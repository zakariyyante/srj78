import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18125330729"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18125330729');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
