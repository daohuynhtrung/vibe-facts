'use client';

import React from 'react';
import { Volume2, VolumeX, Shuffle, Sparkles, BookOpen, X, ShieldAlert, Compass } from 'lucide-react';
import { Language, AppMode } from '../types/card';
import { sound } from '../utils/audio';

interface TopBarProps {
  currentIndex: number;
  totalCards: number;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onShuffle: () => void;
  onOpenLiveFact: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  mode: AppMode;
  onModeChange: (mode: AppMode) => void;
  isReviewMode?: boolean;
  onExitReview?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentIndex,
  totalCards,
  language,
  onLanguageChange,
  onShuffle,
  onOpenLiveFact,
  soundEnabled,
  onToggleSound,
  mode,
  onModeChange,
  isReviewMode = false,
  onExitReview,
}) => {
  const isVi = language === 'vi';
  const progressPercent = Math.min(Math.round(((currentIndex) / totalCards) * 100), 100);

  return (
    <header className="w-full max-w-md mx-auto pt-2.5 px-3.5 pb-2 flex flex-col gap-2 z-40">
      {/* Top Row: Brand & Settings Controls */}
      <div className="flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-md transition-all ${
            mode === 'discerning'
              ? 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-indigo-500/10'
              : 'bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-500 shadow-amber-500/10'
          }`}>
            <span className="text-white text-base font-black">
              {mode === 'discerning' ? '🕵️' : '♠'}
            </span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight text-white flex items-center gap-1 leading-tight">
              {mode === 'discerning' ? 'DISCERNING' : 'VIBE FACTS'}
              <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                mode === 'discerning'
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                  : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
              }`}>
                52
              </span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium">
              {isReviewMode
                ? isVi ? 'Chế độ Xem Lại Đáp Án' : 'Answer Review Walkthrough'
                : mode === 'discerning'
                  ? isVi ? 'Thẩm Định: Thật Hay Giả?' : 'Discerning: Fact or Fake?'
                  : isVi ? 'Bộ Bài 52 Sự Thật' : 'Deck of 52 Wonders'}
            </p>
          </div>
        </div>

        {/* Right Actions: Sound, Shuffle, Live, Language */}
        <div className="flex items-center gap-1">
          {/* Live Fact API button */}
          {!isReviewMode && (
            <button
              type="button"
              onClick={onOpenLiveFact}
              title={isVi ? 'Fact trực tiếp' : 'Live API Fact'}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all active:scale-95 flex items-center gap-1 text-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden xs:inline text-[10px] font-semibold">Live</span>
            </button>
          )}

          {/* Shuffle button (disabled in review mode) */}
          {!isReviewMode && (
            <button
              type="button"
              onClick={() => {
                sound.playShuffle();
                onShuffle();
              }}
              title={isVi ? 'Xào lại bài' : 'Shuffle Deck'}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all active:scale-95"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute sound' : 'Enable sound'}
            className={`p-1.5 rounded-xl border transition-all active:scale-95 ${
              soundEnabled
                ? 'bg-slate-800/80 border-slate-700 text-amber-400'
                : 'bg-slate-800/40 border-slate-800 text-slate-500'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center rounded-xl bg-slate-800/90 border border-slate-700 p-0.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 rounded-lg transition-all text-[11px] ${
                language === 'en'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('vi')}
              className={`px-1.5 py-0.5 rounded-lg transition-all text-[11px] ${
                language === 'vi'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              VI
            </button>
          </div>
        </div>
      </div>

      {/* Middle Row: Mode Selector Switcher (Explore ♠ vs Discerning 🕵️) OR Review Bar */}
      {isReviewMode ? (
        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-indigo-950/70 border border-indigo-500/40 text-xs">
          <div className="flex items-center gap-1.5 text-indigo-300 font-bold">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isVi ? 'Đang xem lại đáp án' : 'Reviewing answers'}</span>
          </div>

          <button
            type="button"
            onClick={onExitReview}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-200 border border-indigo-400/30 text-[11px] font-bold transition-all active:scale-95"
          >
            <X className="w-3 h-3" />
            <span>{isVi ? 'Thoát' : 'Exit'}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              if (mode !== 'explore') {
                sound.playCardSlide();
                onModeChange('explore');
              }
            }}
            className={`py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mode === 'explore'
                ? 'bg-slate-800 text-amber-400 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{isVi ? 'Khám Phá 52' : 'Explore 52'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (mode !== 'discerning') {
                sound.playCardSlide();
                onModeChange('discerning');
              }
            }}
            className={`py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              mode === 'discerning'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{isVi ? 'Thẩm Định 🕵️' : 'Discerning 🕵️'}</span>
          </button>
        </div>
      )}

      {/* Progress Bar & Deck Counter */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>
            {isReviewMode
              ? isVi ? 'Lá bài xem lại' : 'Review Card'
              : mode === 'discerning'
                ? isVi ? 'Tiến độ thẩm định' : 'Discerning Progress'
                : isVi ? 'Lá bài hiện tại' : 'Card Progress'}
          </span>
          <span className="text-slate-200 font-bold">
            {Math.min(currentIndex + 1, totalCards)} <span className="text-slate-400 font-normal">/ {totalCards}</span>
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden border border-slate-800">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              mode === 'discerning'
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                : 'bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
