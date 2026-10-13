'use client';

import React from 'react';
import { Volume2, VolumeX, Shuffle, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types/card';
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
}) => {
  const progressPercent = Math.min(Math.round(((currentIndex) / totalCards) * 100), 100);

  return (
    <header className="w-full max-w-md mx-auto pt-3 px-4 pb-2 flex flex-col gap-2.5 z-40">
      <div className="flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-500 flex items-center justify-center shadow-md shadow-amber-500/10">
            <span className="text-white text-base font-black">♠</span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight text-white flex items-center gap-1 leading-tight">
              VIBE FACTS
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                52
              </span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium">
              {language === 'vi' ? 'Bộ Bài 52 Sự Thật' : 'Deck of 52 Wonders'}
            </p>
          </div>
        </div>

        {/* Right Action Icons: Live API, Audio, Shuffle, Language Switcher */}
        <div className="flex items-center gap-1.5">
          {/* Live Fact API button */}
          <button
            type="button"
            onClick={onOpenLiveFact}
            title={language === 'vi' ? 'Fact trực tiếp' : 'Live API Fact'}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all active:scale-95 flex items-center gap-1 text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden xs:inline text-[11px] font-semibold">Live</span>
          </button>

          {/* Shuffle button */}
          <button
            type="button"
            onClick={() => {
              sound.playShuffle();
              onShuffle();
            }}
            title={language === 'vi' ? 'Xào lại bài' : 'Shuffle Deck'}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all active:scale-95"
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute sound' : 'Enable sound'}
            className={`p-1.5 sm:p-2 rounded-xl border transition-all active:scale-95 ${
              soundEnabled
                ? 'bg-slate-800/80 border-slate-700 text-amber-400'
                : 'bg-slate-800/40 border-slate-800 text-slate-500'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Language Switcher Pill */}
          <div className="flex items-center rounded-xl bg-slate-800/90 border border-slate-700 p-0.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-lg transition-all ${
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
              className={`px-2 py-1 rounded-lg transition-all ${
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

      {/* Progress Bar & Deck Counter */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>
            {language === 'vi' ? 'Lá bài hiện tại' : 'Card Progress'}
          </span>
          <span className="text-slate-200 font-bold">
            {Math.min(currentIndex + 1, totalCards)} <span className="text-slate-400 font-normal">/ {totalCards}</span>
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
