'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { DECK_OF_52_FACTS, getNext52Cards } from '../data/facts';
import { DISCERNING_DECK_OF_52 } from '../data/discerningDeck';
import { FactCard, DiscerningCard, Language, AppMode, UserVerdict } from '../types/card';
import { CardItem } from './CardItem';
import { TopBar } from './TopBar';
import { BottomControls } from './BottomControls';
import { DeckCompleted } from './DeckCompleted';
import { DiscerningResults } from './DiscerningResults';
import { LiveFactModal } from './LiveFactModal';
import { sound } from '../utils/audio';

function shuffleDeck<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const DeckContainer: React.FC = () => {
  // Mode: Explore ♠ or Discerning 🕵️
  const [mode, setMode] = useState<AppMode>('explore');
  const [language, setLanguage] = useState<Language>('vi'); // Default Vietnamese
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  // ----------------------------------------------------------------
  // EXPLORE MODE STATE
  // ----------------------------------------------------------------
  const [exploreDeck, setExploreDeck] = useState<FactCard[]>(DECK_OF_52_FACTS);
  const [exploreIndex, setExploreIndex] = useState(0);
  const [exploreHistory, setExploreHistory] = useState<number[]>([]);
  const [likedCardIds, setLikedCardIds] = useState<Set<string>>(new Set());

  // ----------------------------------------------------------------
  // DISCERNING MODE STATE
  // ----------------------------------------------------------------
  const [discerningDeck, setDiscerningDeck] = useState<DiscerningCard[]>(DISCERNING_DECK_OF_52);
  const [discerningIndex, setDiscerningIndex] = useState(0);
  const [discerningHistory, setDiscerningHistory] = useState<number[]>([]);
  const [verdicts, setVerdicts] = useState<Record<string, UserVerdict>>({});
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Restore preferences from localStorage
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
      const savedMode = localStorage.getItem('vibe_facts_mode') as AppMode;
      if (savedMode === 'explore' || savedMode === 'discerning') {
        setMode(savedMode);
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

  const handleModeChange = (newMode: AppMode) => {
    setMode(newMode);
    setIsReviewMode(false);
    try {
      localStorage.setItem('vibe_facts_mode', newMode);
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

  // ----------------------------------------------------------------
  // SWIPE HANDLERS
  // ----------------------------------------------------------------
  const handleSwipe = (direction: 'left' | 'right') => {
    if (mode === 'explore') {
      if (exploreIndex >= exploreDeck.length) return;
      const currentCard = exploreDeck[exploreIndex];
      if (direction === 'right') {
        setLikedCardIds((prev) => new Set(prev).add(currentCard.id));
      }
      setExploreHistory((prev) => [...prev, exploreIndex]);
      setExploreIndex((prev) => prev + 1);
    } else {
      // Discerning Mode: Left = FAKE (user says False), Right = FACT (user says True)
      if (discerningIndex >= discerningDeck.length) return;
      const currentCard = discerningDeck[discerningIndex];
      const userAgreed = direction === 'right'; // Right = Agree / Fact, Left = Disagree / Fake
      const isCorrect = userAgreed === currentCard.isReal;

      setVerdicts((prev) => ({
        ...prev,
        [currentCard.id]: {
          cardId: currentCard.id,
          userAgreed,
          isCorrect,
        },
      }));

      setDiscerningHistory((prev) => [...prev, discerningIndex]);
      setDiscerningIndex((prev) => prev + 1);
    }
  };

  const handleUndo = () => {
    if (mode === 'explore') {
      if (exploreHistory.length === 0) return;
      sound.playCardSlide();
      const lastIndex = exploreHistory[exploreHistory.length - 1];
      setExploreHistory((prev) => prev.slice(0, -1));
      setExploreIndex(lastIndex);
    } else {
      if (discerningHistory.length === 0) return;
      sound.playCardSlide();
      const lastIndex = discerningHistory[discerningHistory.length - 1];
      const cardToUndo = discerningDeck[lastIndex];
      setVerdicts((prev) => {
        const copy = { ...prev };
        delete copy[cardToUndo.id];
        return copy;
      });
      setDiscerningHistory((prev) => prev.slice(0, -1));
      setDiscerningIndex(lastIndex);
    }
  };

  const handleShuffle = () => {
    if (mode === 'explore') {
      setExploreDeck(shuffleDeck(DECK_OF_52_FACTS));
      setExploreIndex(0);
      setExploreHistory([]);
    } else {
      setDiscerningDeck(shuffleDeck(DISCERNING_DECK_OF_52));
      setDiscerningIndex(0);
      setDiscerningHistory([]);
      setVerdicts({});
      setIsReviewMode(false);
      setReviewIndex(0);
    }
  };

  const handleAddMoreCards = () => {
    sound.playShuffle();
    const next52 = getNext52Cards(exploreDeck.length);
    setExploreDeck((prev) => [...prev, ...next52]);
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

  // Status flags
  const isExploreCompleted = exploreIndex >= exploreDeck.length;
  const isDiscerningCompleted = discerningIndex >= discerningDeck.length;

  const currentExploreCard = exploreDeck[exploreIndex];
  const currentDiscerningCard = isReviewMode
    ? discerningDeck[reviewIndex]
    : discerningDeck[discerningIndex];

  return (
    <div className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 select-none">
      
      {/* Dynamic Background Glow Effect */}
      <div className={`absolute top-[-20%] left-[-20%] w-[140%] h-[60%] blur-3xl pointer-events-none transition-all duration-700 ${
        mode === 'discerning'
          ? 'bg-gradient-to-br from-indigo-900/25 via-purple-900/15 to-transparent'
          : 'bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent'
      }`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] blur-3xl pointer-events-none transition-all duration-700 ${
        mode === 'discerning'
          ? 'bg-gradient-to-tl from-pink-900/20 via-purple-900/15 to-transparent'
          : 'bg-gradient-to-tl from-rose-900/15 via-amber-900/10 to-transparent'
      }`} />

      {/* Top Header & Bar */}
      <TopBar
        currentIndex={
          isReviewMode
            ? reviewIndex
            : mode === 'discerning'
              ? discerningIndex
              : exploreIndex
        }
        totalCards={mode === 'discerning' ? discerningDeck.length : exploreDeck.length}
        language={language}
        onLanguageChange={handleLanguageChange}
        onShuffle={handleShuffle}
        onOpenLiveFact={() => setIsLiveModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        mode={mode}
        onModeChange={handleModeChange}
        isReviewMode={isReviewMode}
        onExitReview={() => setIsReviewMode(false)}
      />

      {/* Main Playing Cards Arena */}
      <main className="flex-1 flex items-center justify-center px-4 py-0.5 sm:py-2 relative z-20">
        <div className="relative w-full max-w-[380px] h-[485px] sm:h-[515px] max-h-[64dvh]">
          
          {/* ========================================== */}
          {/* 1. DISCERNING MODE */}
          {/* ========================================== */}
          {mode === 'discerning' ? (
            isReviewMode ? (
              // REVIEW WALKTHROUGH MODE: Show single card with review banner & myth-buster
              <AnimatePresence mode="wait">
                {currentDiscerningCard && (
                  <CardItem
                    key={`review-${currentDiscerningCard.id}`}
                    card={currentDiscerningCard}
                    language={language}
                    isFront={true}
                    stackIndex={0}
                    onSwipe={() => {}}
                    mode="discerning"
                    isReviewMode={true}
                    reviewVerdict={verdicts[currentDiscerningCard.id]}
                  />
                )}
              </AnimatePresence>
            ) : isDiscerningCompleted ? (
              // DISCERNING COMPLETED: Show Score and Rank
              <div className="w-full h-full flex items-center justify-center">
                <DiscerningResults
                  cards={discerningDeck}
                  verdicts={verdicts}
                  language={language}
                  onStartReview={() => {
                    setIsReviewMode(true);
                    setReviewIndex(0);
                  }}
                  onRestart={handleShuffle}
                  onSwitchToExplore={() => handleModeChange('explore')}
                />
              </div>
            ) : (
              // DISCERNING PLAY MODE: Stack of 3 cards with Left=Fake / Right=Fact
              <AnimatePresence>
                {discerningDeck
                  .slice(discerningIndex, discerningIndex + 3)
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
                        mode="discerning"
                        isReviewMode={false}
                      />
                    );
                  })
                  .reverse()}
              </AnimatePresence>
            )
          ) : (
            /* ========================================== */
            /* 2. EXPLORE MODE                            */
            /* ========================================== */
            isExploreCompleted ? (
              <div className="w-full h-full flex items-center justify-center">
                <DeckCompleted
                  totalCards={exploreDeck.length}
                  likedCount={likedCardIds.size}
                  language={language}
                  onRestart={handleShuffle}
                  onAddMoreCards={handleAddMoreCards}
                  onOpenLiveFact={() => setIsLiveModalOpen(true)}
                />
              </div>
            ) : (
              <AnimatePresence>
                {exploreDeck
                  .slice(exploreIndex, exploreIndex + 3)
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
                        mode="explore"
                        isReviewMode={false}
                      />
                    );
                  })
                  .reverse()}
              </AnimatePresence>
            )
          )}
        </div>
      </main>

      {/* Bottom Floating Control Buttons */}
      {mode === 'discerning' ? (
        isReviewMode ? (
          <BottomControls
            onSwipeLeft={() => {}}
            onSwipeRight={() => {}}
            onUndo={() => {}}
            canUndo={false}
            language={language}
            mode="discerning"
            isReviewMode={true}
            onPrevReview={() => setReviewIndex((prev) => Math.max(prev - 1, 0))}
            onNextReview={() =>
              setReviewIndex((prev) => Math.min(prev + 1, discerningDeck.length - 1))
            }
            onBackToResults={() => setIsReviewMode(false)}
            hasPrev={reviewIndex > 0}
            hasNext={reviewIndex < discerningDeck.length - 1}
          />
        ) : !isDiscerningCompleted ? (
          <BottomControls
            onSwipeLeft={() => handleSwipe('left')}
            onSwipeRight={() => handleSwipe('right')}
            onUndo={handleUndo}
            canUndo={discerningHistory.length > 0}
            language={language}
            mode="discerning"
          />
        ) : null
      ) : !isExploreCompleted ? (
        <BottomControls
          onSwipeLeft={() => handleSwipe('left')}
          onSwipeRight={() => handleSwipe('right')}
          onUndo={handleUndo}
          canUndo={exploreHistory.length > 0}
          isLiked={currentExploreCard ? likedCardIds.has(currentExploreCard.id) : false}
          onToggleLike={
            currentExploreCard ? () => handleToggleLike(currentExploreCard.id) : undefined
          }
          language={language}
          mode="explore"
        />
      ) : null}

      {/* Live Fact Modal Stream */}
      <LiveFactModal
        isOpen={isLiveModalOpen}
        onClose={() => setIsLiveModalOpen(false)}
        language={language}
      />
    </div>
  );
};
