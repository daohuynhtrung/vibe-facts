'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';
import { FactCard, DiscerningCard, Language, AppMode, UserVerdict } from '../types/card';
import { Volume2, VolumeX, Sparkles, Share2, Heart, Check, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { sound, speakText, stopSpeaking } from '../utils/audio';

interface CardItemProps {
  card: FactCard | DiscerningCard;
  language: Language;
  isFront: boolean;
  stackIndex: number;
  onSwipe: (direction: 'left' | 'right') => void;
  isLiked?: boolean;
  onToggleLike?: (cardId: string) => void;
  mode?: AppMode;
  isReviewMode?: boolean;
  reviewVerdict?: UserVerdict;
}

export const CardItem: React.FC<CardItemProps> = ({
  card,
  language,
  isFront,
  stackIndex,
  onSwipe,
  isLiked = false,
  onToggleLike,
  mode = 'explore',
  isReviewMode = false,
  reviewVerdict,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Motion values for front card drag
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 0, 250], [-18, 0, 18]);
  const opacityRight = useTransform(x, [30, 120], [0, 1]);
  const opacityLeft = useTransform(x, [-120, -30], [1, 0]);

  const currentTranslation = (card.translations[language] || card.translations.en) as {
    title: string;
    fact?: string;
    claim?: string;
    takeaway?: string;
    explanation?: string;
    categoryName: string;
  };

  const isDiscerning = mode === 'discerning' && 'isReal' in card;
  const cardText = currentTranslation.claim || currentTranslation.fact || '';
  const cardDetail = currentTranslation.explanation || currentTranslation.takeaway || '';
  const isReal = isDiscerning ? (card as DiscerningCard).isReal : true;

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (isReviewMode) return; // In review mode, swipe is handled by controls

    const threshold = 90;
    const velocityThreshold = 400;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      sound.playLike();
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(30);
      }
      onSwipe('right');
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      sound.playCardSlide();
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(20);
      }
      onSwipe('left');
    }
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const textToSpeak = `${currentTranslation.title}. ${cardText}`;
      speakText(textToSpeak, language, () => setIsSpeaking(false));
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const prefix = isDiscerning ? (isReal ? '✅ [SỰ THẬT / FACT]' : '❌ [TIN GIẢ / FAKE]') : '🃏';
    const shareText = `${prefix} [${card.rank}${card.suit}] ${currentTranslation.title}\n${cardText}\n\nVia VibeFacts (Deck of 52)`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: currentTranslation.title,
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Stack styling for cards behind the front card
  const stackScale = Math.max(1 - stackIndex * 0.045, 0.88);
  const stackTranslateY = stackIndex * 12;
  const stackRotate = stackIndex === 1 ? 1.5 : stackIndex === 2 ? -2 : 0;

  const isSuitRed = card.color === 'red';
  const isVi = language === 'vi';

  return (
    <motion.div
      className={`absolute inset-0 select-none ${
        isFront && !isReviewMode ? 'cursor-grab active:cursor-grabbing z-30' : 'z-20'
      }`}
      style={{
        zIndex: 30 - stackIndex,
        transformOrigin: 'bottom center',
        ...(isFront && !isReviewMode ? { x, rotate } : {}),
      }}
      initial={
        isFront
          ? false
          : {
              scale: stackScale,
              y: stackTranslateY,
              rotate: stackRotate,
            }
      }
      animate={{
        scale: isFront ? 1 : stackScale,
        y: isFront ? 0 : stackTranslateY,
        rotate: isFront ? 0 : stackRotate,
        opacity: stackIndex > 2 ? 0 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 320,
        damping: 26,
      }}
      drag={isFront && !isReviewMode ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.75}
      onDragEnd={isFront && !isReviewMode ? handleDragEnd : undefined}
    >
      {/* Visual Card Body */}
      <div className={`relative w-full h-full bg-slate-900 border rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between text-slate-100 transition-all ${
        isReviewMode && reviewVerdict
          ? reviewVerdict.isCorrect
            ? 'border-emerald-500/50 shadow-emerald-950/40'
            : 'border-rose-500/50 shadow-rose-950/40'
          : 'border-slate-800'
      }`}>
        
        {/* REVIEW MODE: Answer Header Banner */}
        {isReviewMode && reviewVerdict && (
          <div className={`w-full px-4 py-2 flex items-center justify-between text-xs font-bold border-b transition-colors z-30 ${
            reviewVerdict.isCorrect
              ? 'bg-emerald-950/90 border-emerald-500/30 text-emerald-300'
              : 'bg-rose-950/90 border-rose-500/30 text-rose-300'
          }`}>
            <div className="flex items-center gap-1.5">
              {reviewVerdict.isCorrect ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-400 stroke-[2.5]" />
              )}
              <span>
                {reviewVerdict.isCorrect
                  ? isVi ? 'CHÍNH XÁC! Bạn đoán đúng' : 'CORRECT! You judged right'
                  : isVi ? 'CHƯA ĐÚNG!' : 'INCORRECT!'}
              </span>
            </div>

            <span className="text-[11px] font-semibold opacity-90">
              {isVi
                ? `Bạn chọn: ${reviewVerdict.userAgreed ? 'ĐÚNG' : 'SAI'}`
                : `You: ${reviewVerdict.userAgreed ? 'FACT' : 'FAKE'}`}
            </span>
          </div>
        )}

        {/* Subtle Playing Card Corner Badge - Top Left */}
        <div className={`absolute left-3.5 z-20 flex flex-col items-center leading-none pointer-events-none drop-shadow-md ${
          isReviewMode && reviewVerdict ? 'top-10' : 'top-3'
        }`}>
          <span className={`text-base font-extrabold tracking-tighter ${isSuitRed ? 'text-rose-500' : 'text-slate-200'}`}>
            {card.rank}
          </span>
          <span className={`text-sm ${isSuitRed ? 'text-rose-500' : 'text-slate-300'}`}>
            {card.suit}
          </span>
        </div>

        {/* Card Number Counter - Top Right */}
        <div className={`absolute right-3.5 z-20 pointer-events-none ${
          isReviewMode && reviewVerdict ? 'top-10' : 'top-3'
        }`}>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300 shadow-sm">
            <span className="text-amber-400 font-semibold">#{card.cardNumber}</span>/52
          </span>
        </div>

        {/* Dynamic Drag Direction Badges */}
        {isFront && !isReviewMode && (
          <>
            {/* Right Swipe: Agree (Discerning) or Like (Explore) */}
            <motion.div
              style={{ opacity: opacityRight }}
              className="absolute top-12 left-6 z-40 px-3.5 py-1.5 rounded-xl border-2 border-emerald-400 bg-emerald-950/80 backdrop-blur-md text-emerald-300 font-bold text-sm tracking-wider uppercase rotate-[-12deg] pointer-events-none shadow-lg shadow-emerald-500/20"
            >
              {isDiscerning
                ? isVi ? 'SỰ THẬT ✅' : 'FACT ✅'
                : isVi ? 'THÍCH ❤️' : 'LIKE ❤️'}
            </motion.div>

            {/* Left Swipe: Disagree (Discerning) or Next (Explore) */}
            <motion.div
              style={{ opacity: opacityLeft }}
              className="absolute top-12 right-6 z-40 px-3.5 py-1.5 rounded-xl border-2 border-rose-400 bg-rose-950/80 backdrop-blur-md text-rose-300 font-bold text-sm tracking-wider uppercase rotate-[12deg] pointer-events-none shadow-lg shadow-rose-500/20"
            >
              {isDiscerning
                ? isVi ? 'TIN GIẢ ❌' : 'FAKE ❌'
                : isVi ? 'BỎ QUA 💨' : 'NEXT 💨'}
            </motion.div>
          </>
        )}

        {/* Card Image Area (Responsive height) */}
        <div className="relative w-full h-[45%] min-h-[180px] overflow-hidden bg-slate-950 group">
          {/* Skeleton placeholder while image loads */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-slate-600 animate-spin" />
            </div>
          )}

          <Image
            src={card.imageUrl}
            alt={card.imageAlt}
            fill
            sizes="(max-width: 640px) 90vw, 420px"
            priority={isFront}
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient Overlay for seamless readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/35" />

          {/* Category Chip + Truth Badge in Review Mode */}
          <div className="absolute bottom-2.5 left-3.5 z-10 flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-amber-300 tracking-wide uppercase flex items-center gap-1">
              <span className={isSuitRed ? 'text-rose-400' : 'text-indigo-300'}>{card.suit}</span>
              {currentTranslation.categoryName}
            </span>

            {/* REVIEW MODE: Definitive Truth Badge */}
            {isReviewMode && isDiscerning && (
              <span className={`px-2.5 py-1 rounded-lg backdrop-blur-md border text-[11px] font-extrabold tracking-wide uppercase flex items-center gap-1 shadow-md ${
                isReal
                  ? 'bg-emerald-950/90 border-emerald-400 text-emerald-300'
                  : 'bg-rose-950/90 border-rose-400 text-rose-300'
              }`}>
                {isReal ? '✅ ' + (isVi ? 'SỰ THẬT' : 'REAL FACT') : '❌ ' + (isVi ? 'TIN GIẢ / HUYỀN THOẠI' : 'FAKE / MYTH')}
              </span>
            )}
          </div>

          {/* Action Buttons overlaying image */}
          {isFront && (
            <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleSpeak}
                aria-label="Read card text aloud"
                className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                  isSpeaking
                    ? 'bg-amber-500 border-amber-300 text-slate-950 animate-pulse'
                    : 'bg-black/50 border-white/20 text-slate-200 hover:bg-black/70 active:scale-95'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share card"
                className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-slate-200 hover:bg-black/70 active:scale-95 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>

              {onToggleLike && !isDiscerning && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playLike();
                    onToggleLike(card.id);
                  }}
                  aria-label="Like card"
                  className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                    isLiked
                      ? 'bg-rose-500/90 border-rose-400 text-white'
                      : 'bg-black/50 border-white/20 text-slate-200 hover:bg-black/70 active:scale-95'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Card Content Text Area */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
              {currentTranslation.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {cardText}
            </p>
          </div>

          {/* Details / Takeaway / Myth-Buster Box */}
          {cardDetail && (
            <div className={`mt-3 p-3 rounded-2xl border backdrop-blur-sm transition-all ${
              isReviewMode && isDiscerning
                ? isReal
                  ? 'bg-emerald-950/40 border-emerald-500/40'
                  : 'bg-rose-950/40 border-rose-500/40'
                : 'bg-slate-800/70 border-slate-700/60'
            }`}>
              <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                {isReviewMode && isDiscerning ? (
                  isReal ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {isVi ? 'Bằng chứng khoa học:' : 'Scientific Verification:'}
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      {isVi ? 'Bóc trần sự thật:' : 'Myth-Buster Truth:'}
                    </span>
                  )
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isVi ? 'Bạn có biết?' : 'Deep Dive'}</span>
                  </>
                )}
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {cardDetail}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Corner Accent Mirror - Bottom Right */}
        <div className="absolute bottom-2.5 right-3.5 z-20 flex flex-col items-center leading-none pointer-events-none rotate-180 opacity-50">
          <span className={`text-xs font-extrabold tracking-tighter ${isSuitRed ? 'text-rose-500' : 'text-slate-400'}`}>
            {card.rank}
          </span>
          <span className={`text-[10px] ${isSuitRed ? 'text-rose-500' : 'text-slate-400'}`}>
            {card.suit}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
