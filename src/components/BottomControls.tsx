'use client';

import React from 'react';
import { Undo2, X, ArrowRight, Heart, Check, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { Language, AppMode } from '../types/card';
import { sound } from '../utils/audio';

interface BottomControlsProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onUndo: () => void;
  canUndo: boolean;
  isLiked?: boolean;
  onToggleLike?: () => void;
  language: Language;
  mode?: AppMode;
  isReviewMode?: boolean;
  onPrevReview?: () => void;
  onNextReview?: () => void;
  onBackToResults?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
  onSwipeLeft,
  onSwipeRight,
  onUndo,
  canUndo,
  isLiked = false,
  onToggleLike,
  language,
  mode = 'explore',
  isReviewMode = false,
  onPrevReview,
  onNextReview,
  onBackToResults,
  hasPrev = false,
  hasNext = false,
}) => {
  const isVi = language === 'vi';
  const isDiscerning = mode === 'discerning';

  // ----------------------------------------------------
  // REVIEW MODE CONTROLS: Walkthrough navigation
  // ----------------------------------------------------
  if (isReviewMode) {
    return (
      <div
        className="w-full max-w-sm mx-auto px-4 py-2 z-40 flex flex-col items-center gap-1.5 transition-all"
        style={{
          paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))',
        }}
      >
        <div className="flex items-center justify-center gap-4">
          {/* Previous Card */}
          <button
            type="button"
            onClick={() => {
              sound.playCardSlide();
              if (onPrevReview) onPrevReview();
            }}
            disabled={!hasPrev}
            className="w-12 h-12 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 flex items-center justify-center active:scale-90 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg"
            title={isVi ? 'Câu trước' : 'Previous answer'}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Back to Score Summary */}
          <button
            type="button"
            onClick={onBackToResults}
            className="py-2.5 px-4 rounded-2xl bg-indigo-600/90 hover:bg-indigo-500 border border-indigo-400/40 text-white font-bold text-xs flex items-center gap-1.5 active:scale-95 transition-all shadow-lg shadow-indigo-600/20"
          >
            <Trophy className="w-4 h-4 text-amber-300" />
            <span>{isVi ? 'Bảng Điểm' : 'Score Summary'}</span>
          </button>

          {/* Next Card */}
          <button
            type="button"
            onClick={() => {
              sound.playCardSlide();
              if (onNextReview) onNextReview();
            }}
            disabled={!hasNext}
            className="w-12 h-12 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 flex items-center justify-center active:scale-90 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg"
            title={isVi ? 'Câu tiếp' : 'Next answer'}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-[11px] text-slate-400 font-medium tracking-wide">
          {isVi
            ? 'Dùng nút mũi tên để lướt xem lại toàn bộ 52 câu'
            : 'Use arrows to walk through all 52 answers'}
        </p>
      </div>
    );
  }

  // ----------------------------------------------------
  // DISCERNING PLAY MODE CONTROLS: Left (Fake) vs Right (Fact)
  // ----------------------------------------------------
  if (isDiscerning) {
    return (
      <div
        className="w-full max-w-sm mx-auto px-4 py-2 z-40 flex flex-col items-center gap-1.5 transition-all"
        style={{
          paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))',
        }}
      >
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {/* Disagree / FAKE Button */}
          <button
            type="button"
            onClick={() => {
              sound.playCardSlide();
              if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                navigator.vibrate(20);
              }
              onSwipeLeft();
            }}
            title={isVi ? 'Đoán là Tin Giả (Vuốt trái)' : 'Judge as Fake (Slide left)'}
            className="h-13 px-4 rounded-2xl bg-rose-950/80 hover:bg-rose-900 border-2 border-rose-500/80 text-rose-300 font-black text-xs sm:text-sm flex items-center gap-1.5 active:scale-95 transition-all shadow-xl shadow-rose-950/40"
          >
            <X className="w-5 h-5 text-rose-400 stroke-[3]" />
            <span>{isVi ? 'TIN GIẢ' : 'FAKE'}</span>
          </button>

          {/* Undo Button */}
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title={isVi ? 'Sửa lại câu trước' : 'Undo previous verdict'}
            className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-400 hover:text-white flex items-center justify-center active:scale-90 transition-all disabled:opacity-20 disabled:pointer-events-none shadow-lg"
          >
            <Undo2 className="w-4 h-4" />
          </button>

          {/* Agree / FACT Button */}
          <button
            type="button"
            onClick={() => {
              sound.playLike();
              if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                navigator.vibrate(25);
              }
              onSwipeRight();
            }}
            title={isVi ? 'Đoán là Sự Thật (Vuốt phải)' : 'Judge as Fact (Slide right)'}
            className="h-13 px-4 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 border-2 border-emerald-500/80 text-emerald-300 font-black text-xs sm:text-sm flex items-center gap-1.5 active:scale-95 transition-all shadow-xl shadow-emerald-950/40"
          >
            <Check className="w-5 h-5 text-emerald-400 stroke-[3]" />
            <span>{isVi ? 'SỰ THẬT' : 'FACT'}</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400 tracking-wide font-medium">
          {isVi
            ? 'Vuốt Trái: Tin Giả ❌  |  Vuốt Phải: Sự Thật ✅'
            : 'Swipe Left: Fake ❌  |  Swipe Right: Fact ✅'}
        </p>
      </div>
    );
  }

  // ----------------------------------------------------
  // STANDARD EXPLORE MODE CONTROLS
  // ----------------------------------------------------
  return (
    <div
      className="w-full max-w-sm mx-auto px-4 py-2 z-40 flex flex-col items-center gap-1.5 transition-all"
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {/* Undo Previous Card Button */}
        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          title={isVi ? 'Quay lại lá trước' : 'Undo previous card'}
          className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center active:scale-90 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg"
        >
          <Undo2 className="w-5 h-5" />
        </button>

        {/* Slide Left / Next Button */}
        <button
          type="button"
          onClick={() => {
            sound.playCardSlide();
            if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
              navigator.vibrate(20);
            }
            onSwipeLeft();
          }}
          title={isVi ? 'Lướt sang lá tiếp theo' : 'Skip / Next card'}
          className="w-14 h-14 rounded-full bg-slate-850/90 border-2 border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white flex items-center justify-center active:scale-90 transition-all shadow-xl hover:shadow-slate-700/20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Like Button */}
        {onToggleLike && (
          <button
            type="button"
            onClick={() => {
              sound.playLike();
              if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                navigator.vibrate(30);
              }
              onToggleLike();
            }}
            title={isVi ? 'Yêu thích' : 'Like fact'}
            className={`w-12 h-12 rounded-full border flex items-center justify-center active:scale-90 transition-all shadow-lg ${
              isLiked
                ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:text-rose-400'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        )}

        {/* Slide Right / Next Button */}
        <button
          type="button"
          onClick={() => {
            sound.playLike();
            if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
              navigator.vibrate(25);
            }
            onSwipeRight();
          }}
          title={isVi ? 'Lá tiếp theo' : 'Next fact'}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-slate-950 font-black flex items-center justify-center active:scale-90 transition-all shadow-xl shadow-amber-500/20"
        >
          <ArrowRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      <p className="text-[11px] text-slate-400 tracking-wide font-medium">
        {isVi
          ? 'Vuốt thẻ sang bên để lướt tiếp'
          : 'Slide card aside or use buttons'}
      </p>
    </div>
  );
};
