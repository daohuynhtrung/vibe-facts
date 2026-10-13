'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { DECK_OF_52_FACTS, getNext52Cards } from '../data/facts';
import { FactCard, Language } from '../types/card';
import { CardItem } from './CardItem';
import { TopBar } from './TopBar';
import { BottomControls } from './BottomControls';
import { DeckCompleted } from './DeckCompleted';
import { LiveFactModal } from './LiveFactModal';
import { sound } from '../utils/audio';

function shuffleDeck(array: FactCard[]): FactCard[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const DeckContainer: React.FC = () => {
  const [deck, setDeck] = useState<FactCard[]>(DECK_OF_52_FACTS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [likedCardIds, setLikedCardIds] = useState<Set<string>>(new Set());
  const [language, setLanguage] = useState<Language>('vi'); // Default Vietnamese as requested
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  // Restore language & sound preference if stored in localStorage
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('vibe_facts_lang') as Language;
      if (savedLang === 'en' || savedLang === 'vi') {
        setLanguage(savedLang);
      }
      const savedSound = localStorage.getItem('vibe_facts_sound');
      if (savedSound !== null) {
        const enabled = savedSound === 'true';
        setSoundEnabled(enabled);
        sound.setSoundEnabled(enabled);
      }
    } catch {
      // LocalStorage access errors ignored
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('vibe_facts_lang', newLang);
    } catch {
      // Ignored
    }
  };

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    sound.setSoundEnabled(nextVal);
    try {
      localStorage.setItem('vibe_facts_sound', String(nextVal));
    } catch {
      // Ignored
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex >= deck.length) return;

    const currentCard = deck[currentIndex];

    // If swiped right, mark as liked
    if (direction === 'right') {
      setLikedCardIds((prev) => new Set(prev).add(currentCard.id));
    }

    setHistory((prev) => [...prev, currentIndex]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    sound.playCardSlide();
    const lastIndex = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentIndex(lastIndex);
  };

  const handleShuffle = () => {
    setDeck(shuffleDeck(DECK_OF_52_FACTS));
    setCurrentIndex(0);
    setHistory([]);
  };

  const handleAddMoreCards = () => {
    sound.playShuffle();
    const next52 = getNext52Cards(deck.length);
    setDeck((prev) => [...prev, ...next52]);
    // currentIndex remains at the index of the first new card,
    // so isCompleted becomes false and the user continues scrolling!
  };

  const handleToggleLike = (cardId: string) => {
    setLikedCardIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(cardId)) {
        updated.delete(cardId);
      } else {
        updated.add(cardId);
      }
      return updated;
    });
  };

  const isCompleted = currentIndex >= deck.length;
  const currentCard = deck[currentIndex];

  return (
    <div className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 select-none">
      
      {/* Dynamic Background Glow Effect */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] bg-gradient-to-tl from-rose-900/15 via-amber-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Header & Bar */}
      <TopBar
        currentIndex={currentIndex}
        totalCards={deck.length}
        language={language}
        onLanguageChange={handleLanguageChange}
        onShuffle={handleShuffle}
        onOpenLiveFact={() => setIsLiveModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Playing Cards Arena */}
      <main className="flex-1 flex items-center justify-center px-4 py-2 relative z-20">
        <div className="relative w-full max-w-[380px] h-[520px] max-h-[72dvh]">
          {isCompleted ? (
            <div className="w-full h-full flex items-center justify-center">
              <DeckCompleted
                totalCards={deck.length}
                likedCount={likedCardIds.size}
                language={language}
                onRestart={handleShuffle}
                onAddMoreCards={handleAddMoreCards}
                onOpenLiveFact={() => setIsLiveModalOpen(true)}
              />
            </div>
          ) : (
            <AnimatePresence>
              {/* Render top 3 cards in the deck stack to give physical depth */}
              {deck
                .slice(currentIndex, currentIndex + 3)
                .map((card, idx) => {
                  const isFront = idx === 0;
                  return (
                    <CardItem
                      key={card.id}
                      card={card}
                      language={language}
                      isFront={isFront}
                      stackIndex={idx}
                      onSwipe={handleSwipe}
                      isLiked={likedCardIds.has(card.id)}
                      onToggleLike={handleToggleLike}
                    />
                  );
                })
                .reverse()}
            </AnimatePresence>
          )}
        </div>
      </main>

      {/* Bottom Floating Control Buttons */}
      {!isCompleted && (
        <BottomControls
          onSwipeLeft={() => handleSwipe('left')}
          onSwipeRight={() => handleSwipe('right')}
          onUndo={handleUndo}
          canUndo={history.length > 0}
          isLiked={currentCard ? likedCardIds.has(currentCard.id) : false}
          onToggleLike={currentCard ? () => handleToggleLike(currentCard.id) : undefined}
          language={language}
        />
      )}

      {/* Live Fact Modal Stream */}
      <LiveFactModal
        isOpen={isLiveModalOpen}
        onClose={() => setIsLiveModalOpen(false)}
        language={language}
      />
    </div>
  );
};
