import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'vi';

    // 1. Fetch real fact from uselessfacts API
    const factRes = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!factRes.ok) {
      throw new Error('Failed to fetch from fact provider');
    }

    const factData = await factRes.json();
    const originalFact = factData.text;

    // 2. Decide if this card will be presented as a FACT or a FAKE (50/50)
    const isReal = Math.random() >= 0.5;

    let claimEn = originalFact;
    let explanationEn = 'This statement is scientifically and historically verified.';

    // 3. If FAKE: Mutate the fact into a plausible fake statement
    if (!isReal) {
      try {
        const prompt = `Given this true fact: "${originalFact}".
Change ONE specific detail (e.g. number, animal, person, location, or cause) to turn it into a convincing FALSE statement.
Also provide a 1-sentence myth-busting explanation of why it is false.
Return ONLY valid JSON in this exact structure:
{"fake_claim": "...", "explanation": "..."}`;

        const aiRes = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}`, {
          cache: 'no-store',
        });
        if (aiRes.ok) {
          const aiText = await aiRes.text();
          const cleanJson = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanJson);
          if (parsed.fake_claim && parsed.explanation) {
            claimEn = parsed.fake_claim;
            explanationEn = parsed.explanation;
          }
        }
      } catch {
        // Fallback: simple negation if AI times out
        claimEn = `Contrary to popular belief, ${originalFact.toLowerCase()}`;
        explanationEn = 'This is an inverted formulation of a known trivia fact.';
      }
    }

    // 4. Translate claim and explanation to Vietnamese if requested
    let claimVi = claimEn;
    let explanationVi = explanationEn;

    if (lang === 'vi') {
      try {
        const [transClaimRes, transExpRes] = await Promise.all([
          fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(claimEn)}&langpair=en|vi`, { cache: 'no-store' }),
          fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(explanationEn)}&langpair=en|vi`, { cache: 'no-store' }),
        ]);

        if (transClaimRes.ok) {
          const transClaimData = await transClaimRes.json();
          claimVi = transClaimData.responseData?.translatedText || claimEn;
        }

        if (transExpRes.ok) {
          const transExpData = await transExpRes.json();
          explanationVi = transExpData.responseData?.translatedText || explanationEn;
        }
      } catch {
        // Fallback to English
      }
    }

    // 5. Generate matching image
    const imagePrompt = encodeURIComponent(`${claimEn.slice(0, 100)}, photography, high quality`);
    const imageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}?width=800&height=600&nologo=true`;

    return NextResponse.json({
      success: true,
      isReal,
      claim: {
        en: claimEn,
        vi: claimVi,
      },
      explanation: {
        en: explanationEn,
        vi: explanationVi,
      },
      imageUrl,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errMessage }, { status: 500 });
  }
}
