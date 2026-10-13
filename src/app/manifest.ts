import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VibeFacts — 52 Cards Deck of Wonders',
    short_name: 'VibeFacts',
    description: 'A mobile-first deck of 52 mind-blowing facts with photography in English & Vietnamese.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
