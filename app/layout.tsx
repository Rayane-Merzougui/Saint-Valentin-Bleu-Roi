import type { Metadata } from "next";
import "./globals.css";

// Using standard Google Fonts via Next.js font optimization would be better, 
// but since the user provided local font setup, I'll stick to a clean approach.
// I will use standard system fonts that match the requested style if local files aren't provided,
// or I can use next/font/google which is standard for Next.js.

import { Playfair_Display as Playfair, Montserrat as Mont } from 'next/font/google';

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Mont({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Pour Toi, Mon Amour",
  description: "Un message spécial pour la Saint-Valentin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-[#F5F5F7] text-slate-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
