'use client';

import React from 'react';
import { Undo2, X, ArrowRight, Heart } from 'lucide-react';
import { Language } from '../types/card';
import { sound } from '../utils/audio';

interface BottomControlsProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onUndo: () => void;
  canUndo: boolean;
  isLiked?: boolean;
  onToggleLike?: () => void;
  language: Language;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
  onSwipeLeft,
  onSwipeRight,
  onUndo,
  canUndo,
  isLiked = false,
  onToggleLike,
  language,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto px-4 py-3 z-40 flex flex-col items-center gap-2">
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        
        {/* Undo Previous Card Button */}
        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          title={language === 'vi' ? 'Quay lại lá trước' : 'Undo previous card'}
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
          title={language === 'vi' ? 'Lướt sang lá tiếp theo' : 'Skip / Next card'}
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
            title={language === 'vi' ? 'Yêu thích' : 'Like fact'}
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
          title={language === 'vi' ? 'Lá tiếp theo' : 'Next fact'}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-slate-950 font-black flex items-center justify-center active:scale-90 transition-all shadow-xl shadow-amber-500/20"
        >
          <ArrowRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Subtle Hint for mobile gestures */}
      <p className="text-[11px] text-slate-400 tracking-wide font-medium">
        {language === 'vi'
          ? 'Vuốt thẻ sang bên để lướt tiếp'
          : 'Slide card aside or use buttons'}
      </p>
    </div>
  );
};
