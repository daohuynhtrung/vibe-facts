'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, CheckCircle2, XCircle, RotateCcw, BookOpen, Sparkles, Compass } from 'lucide-react';
import { Language, UserVerdict, DiscerningCard } from '../types/card';
import { sound } from '../utils/audio';

interface DiscerningResultsProps {
  cards: DiscerningCard[];
  verdicts: Record<string, UserVerdict>;
  language: Language;
  onStartReview: () => void;
  onRestart: () => void;
  onSwitchToExplore: () => void;
}

export const DiscerningResults: React.FC<DiscerningResultsProps> = ({
  cards,
  verdicts,
  language,
  onStartReview,
  onRestart,
  onSwitchToExplore,
}) => {
  const totalCards = cards.length;
  
  // Calculate score stats
  let correctCount = 0;
  let factsIdentified = 0;
  let mythsBusted = 0;
  let totalFacts = 0;
  let totalMyths = 0;

  cards.forEach((card) => {
    if (card.isReal) {
      totalFacts++;
    } else {
      totalMyths++;
    }

    const v = verdicts[card.id];
    if (v && v.isCorrect) {
      correctCount++;
      if (card.isReal) {
        factsIdentified++;
      } else {
        mythsBusted++;
      }
    }
  });

  const percent = totalCards > 0 ? Math.round((correctCount / totalCards) * 100) : 0;
  const isVi = language === 'vi';

  // Performance Ranks
  let rankTitle = '';
  let rankDescription = '';

  if (percent >= 90) {
    rankTitle = isVi ? '🕵️‍♂️ BẬC THẦY THẨM ĐỊNH' : '🕵️‍♂️ MASTER FACT-CHECKER';
    rankDescription = isVi
      ? 'Khứu giác thông tin đỉnh cao! Không một tin giả nào có thể đánh lừa được bạn.'
      : 'Phenomenal instinct! Not a single myth could slip past your radar.';
  } else if (percent >= 75) {
    rankTitle = isVi ? '🧐 MẮT THẦN PHẢN BIỆN' : '🧐 SHARP DETECTIVE';
    rankDescription = isVi
      ? 'Tư duy phản biện xuất sắc. Bạn phân biệt rất rõ ràng giữa sự thật và lời đồn.'
      : 'Excellent critical thinking. You reliably discern truth from folklore.';
  } else if (percent >= 50) {
    rankTitle = isVi ? '🤔 NGƯỜI KHÁM PHÁ HIẾU KỲ' : '🤔 CURIOUS SKEPTIC';
    rankDescription = isVi
      ? 'Khá tốt! Một vài huyền thoại phổ biến đã thành công đánh lừa trực giác của bạn.'
      : 'Solid effort! A few famous misconceptions managed to trick your instincts.';
  } else {
    rankTitle = isVi ? '🎣 DỄ BỊ "DẮT MŨI"' : '🎣 GULLIBLE EXPLORER';
    rankDescription = isVi
      ? 'Các tin giả này quá tinh vi! Hãy vào xem lại đáp án để tích lũy thêm kiến thức nhé.'
      : 'These myths were crafty! Review all cards to uncover the real science behind them.';
  }

  useEffect(() => {
    try {
      if (percent >= 60) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#10b981', '#6366f1', '#f59e0b', '#ec4899'],
        });
      }
    } catch {
      // Confetti fallback
    }
  }, [percent]);

  return (
    <div className="w-full max-w-sm mx-auto p-5 sm:p-6 bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl text-center space-y-5 animate-in fade-in zoom-in duration-300 max-h-[85vh] overflow-y-auto custom-scrollbar">
      {/* Trophy Badge */}
      <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-emerald-500/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10">
        <Trophy className="w-8 h-8 text-amber-400 animate-bounce" />
      </div>

      {/* Main Score & Rank */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-bold tracking-widest text-indigo-400 uppercase">
          {isVi ? 'KẾT QUẢ THẨM ĐỊNH' : 'DISCERNING SCORE'}
        </div>
        <div className="text-4xl font-black text-white tracking-tight flex items-center justify-center gap-1.5">
          <span className={percent >= 75 ? 'text-emerald-400' : percent >= 50 ? 'text-amber-400' : 'text-rose-400'}>
            {correctCount}
          </span>
          <span className="text-slate-500 text-2xl font-normal">/ {totalCards}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-bold ml-1">
            {percent}%
          </span>
        </div>
        <div className="text-sm font-extrabold text-amber-300 pt-1 tracking-wide">
          {rankTitle}
        </div>
        <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
          {rankDescription}
        </p>
      </div>

      {/* Breakdown Metrics */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isVi ? 'Sự Thật' : 'Facts'}</span>
          </div>
          <div className="text-lg font-black text-white">
            {factsIdentified} <span className="text-xs text-slate-500 font-normal">/ {totalFacts}</span>
          </div>
          <span className="text-[10px] text-slate-400">
            {isVi ? 'Nhận diện đúng' : 'Identified'}
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold">
            <XCircle className="w-3.5 h-3.5" />
            <span>{isVi ? 'Tin Giả' : 'Myths'}</span>
          </div>
          <div className="text-lg font-black text-white">
            {mythsBusted} <span className="text-xs text-slate-500 font-normal">/ {totalMyths}</span>
          </div>
          <span className="text-[10px] text-slate-400">
            {isVi ? 'Bóc trần thành công' : 'Busted'}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-1">
        {/* PRIMARY ACTION: Review all 52 cards walkthrough */}
        <button
          type="button"
          onClick={() => {
            sound.playCardSlide();
            onStartReview();
          }}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 active:scale-[0.98] transition-all text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/25 border border-indigo-400/30"
        >
          <BookOpen className="w-4 h-4 text-white stroke-[2.5]" />
          <span>{isVi ? '🔍 Xem Lại 52 Câu & Đáp Án Chi Tiết' : '🔍 Review All 52 Answers'}</span>
        </button>

        {/* Play Again */}
        <button
          type="button"
          onClick={() => {
            sound.playShuffle();
            onRestart();
          }}
          className="w-full py-2.5 px-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/80 active:scale-[0.98] transition-all text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700/80"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-300 stroke-[2.5]" />
          <span>{isVi ? 'Thử Lại Chế Độ Thẩm Định' : 'Try Discerning Again'}</span>
        </button>

        {/* Back to Explore */}
        <button
          type="button"
          onClick={onSwitchToExplore}
          className="w-full py-2 px-4 rounded-2xl bg-slate-800/40 hover:bg-slate-700/50 active:scale-[0.98] transition-all text-slate-400 hover:text-slate-200 font-medium text-[11px] flex items-center justify-center gap-1.5 border border-slate-800"
        >
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>{isVi ? 'Về Chế Độ Khám Phá (Explore)' : 'Back to Explore Deck'}</span>
        </button>
      </div>
    </div>
  );
};
