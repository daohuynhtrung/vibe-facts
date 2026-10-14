export type CardSuit = 'spades' | 'hearts' | 'diamonds' | 'clubs';

export type Language = 'en' | 'vi';

export type AppMode = 'explore' | 'discerning';

export interface CardFactTranslation {
  title: string;
  fact: string;
  takeaway?: string;
  categoryName: string;
}

export interface FactCard {
  id: string;
  suit: '♠' | '♥' | '♦' | '♣';
  suitName: CardSuit;
  rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
  cardNumber: number; // 1 to 52
  color: 'red' | 'black';
  category: string;
  imageUrl: string;
  imageAlt: string;
  translations: Record<Language, CardFactTranslation>;
}

export interface DiscerningTranslation {
  title: string;
  claim: string;
  explanation: string;
  categoryName: string;
}

export interface DiscerningCard {
  id: string;
  suit: '♠' | '♥' | '♦' | '♣';
  suitName: CardSuit;
  rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
  cardNumber: number; // 1 to 52
  color: 'red' | 'black';
  category: string;
  imageUrl: string;
  imageAlt: string;
  isReal: boolean; // true = Fact, false = Fake / Myth
  translations: Record<Language, DiscerningTranslation>;
}

export interface UserVerdict {
  cardId: string;
  userAgreed: boolean; // true = user judged Fact (Right), false = Fake (Left)
  isCorrect: boolean;  // userAgreed === card.isReal
}
