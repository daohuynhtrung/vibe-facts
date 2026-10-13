'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Heart, Trophy, Sparkles, Globe } from 'lucide-react';
import { Language } from '../types/card';
import { sound } from '../utils/audio';

interface DeckCompletedProps {
  totalCards: number;
  likedCount: number;
  language: Language;
  onRestart: () => void;
  onOpenLiveFact: () => void;
}

export const DeckCompleted: React.FC<DeckCompletedProps> = ({
  totalCards,
  likedCount,
  language,
  onRestart,
  onOpenLiveFact,
}) => {
  useEffect(() => {
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#6366f1', '#10b981'],
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 400);

      return () => clearTimeout(timer);
    } catch {
      // Confetti fallback
    }
  }, []);

  const isVi = language === 'vi';

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl text-center space-y-6 animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-indigo-500/20 border border-amber-500/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
        <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-black text-white tracking-tight">
          {isVi ? 'Hoàn Thành Bộ Bài 52 Lá!' : 'Deck Completed!'}
        </h2>
        <p className="text-sm text-slate-400">
          {isVi
            ? 'Bạn đã khám phá trọn vẹn 52 sự thật kỳ thú từ vũ trụ, thiên nhiên đến văn hóa.'
            : 'You unlocked all 52 facts spanning deep cosmos, creatures, history, and science.'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50">
          <div className="text-2xl font-black text-amber-400">{totalCards}</div>
          <div className="text-xs text-slate-400 font-medium">
            {isVi ? 'Lá bài đã lướt' : 'Cards Explored'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50">
          <div className="text-2xl font-black text-rose-400 flex items-center justify-center gap-1">
            <Heart className="w-5 h-5 fill-current" />
            {likedCount}
          </div>
          <div className="text-xs text-slate-400 font-medium">
            {isVi ? 'Lá bài yêu thích' : 'Cards Liked'}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-2">
        <button
          type="button"
          onClick={() => {
            sound.playShuffle();
            onRestart();
          }}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:opacity-95 active:scale-[0.98] transition-all text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
        >
          <RotateCcw className="w-4 h-4 text-slate-950 stroke-[2.5]" />
          <span>{isVi ? 'Xào Bài & Chơi Lại' : 'Shuffle & Deal Again'}</span>
        </button>

        <button
          type="button"
          onClick={onOpenLiveFact}
          className="w-full py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700/80 active:scale-[0.98] transition-all text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700"
        >
          <Globe className="w-4 h-4 text-indigo-400" />
          <span>{isVi ? 'Khám Phá Fact Live Từ API' : 'Draw Live API Fact'}</span>
        </button>
      </div>
    </div>
  );
};
