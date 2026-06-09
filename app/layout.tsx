import type {Metadata} from 'next';
import { Cormorant_Garamond, Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Pavidesignz — Graphic Designer & Video Editor Portfolio',
  description: 'Posters, banners, reels, visiting cards, and social media content — crafted for businesses that want to look professional and get noticed.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${syne.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning className="font-body bg-white text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
