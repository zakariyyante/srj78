import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Portal de Casinos Online Regulamentados em Portugal 2026",
  description: "Plataforma informativa independente para análise e comparação de casinos online autorizados pelo SRIJ em Portugal. Avaliações, promoções e jogo consciente.",
  icons: [],
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
