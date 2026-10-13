import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';

    // 1. Fetch random English fact from Useless Facts API
    const factRes = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!factRes.ok) {
      throw new Error('Failed to fetch from fact provider');
    }

    const factData = await factRes.json();
    const factEn = factData.text;

    // 2. If Vietnamese requested, translate using MyMemory API
    let factVi = '';
    try {
      const transUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        factEn
      )}&langpair=en|vi`;
      const transRes = await fetch(transUrl, { cache: 'no-store' });
      if (transRes.ok) {
        const transData = await transRes.json();
        factVi = transData.responseData?.translatedText || factEn;
      }
    } catch {
      factVi = factEn; // fallback to English if translation times out
    }

    // 3. AI generated image URL matching the exact fact via Pollinations.ai
    // We add photography enhancement tags
    const cleanPrompt = factEn.replace(/['"]/g, '').slice(0, 120);
    const prompt = encodeURIComponent(`${cleanPrompt}, high quality photography, cinematic lighting`);
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=600&nologo=true`;

    return NextResponse.json({
      success: true,
      fact_en: factEn,
      fact_vi: factVi || factEn,
      imageUrl,
      source: factData.source || 'Useless Facts API',
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      {
        success: false,
        error: errMessage,
      },
      { status: 500 }
    );
  }
}
