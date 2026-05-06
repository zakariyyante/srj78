import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Portal de Casinos Online Regulamentados em Portugal 2026",
  description: "Plataforma informativa independente para análise e comparação de casinos online autorizados pelo SRIJ em Portugal. Avaliações, promoções e jogo consciente.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head />
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
