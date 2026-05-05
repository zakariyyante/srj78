'use client';

import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  badge?: 'gold' | 'silver' | 'bronze' | 'fourth';
  isOnline?: boolean;
}

export default function CasinoCard({ casino, rank, badge, isOnline = false }: CasinoCardProps) {
  const brandEventKey = casino.name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  const handleCasinoClick = () => {
    track(`brand_click_${brandEventKey}`, {
      brand: casino.name,
      isMobileBrand: !!casino.isMobile,
      href: casino.url,
    });
  };

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image
          src={casino.logo}
          alt={`${casino.name} Casino`}
          width={260}
          height={180}
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  return (
    <article className="relative mx-auto w-full max-w-lg rounded-3xl border border-white/[0.08] bg-[#111b30] p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/15 hover:shadow-[0_24px_70px_rgba(0,0,0,0.6)] cursor-pointer sm:p-5">

      {/* Invisible full-card link — sits behind everything */}
      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCasinoClick}
        className="absolute inset-0 z-0 rounded-3xl"
        aria-label={`Explorar oferta ${casino.name}`}
      />

      {/* Top badge */}
      {casino.badge && (
        <div className="relative z-10 mb-3">
          <span className="inline-flex rounded-full bg-amber-500/12 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-400">
            {casino.badge}
          </span>
        </div>
      )}

      {/* Main layout: left (logo + rating) | right (bonus + button) */}
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-stretch">

        {/* LEFT: logo then rating */}
        <div className="flex w-full flex-row items-center justify-between gap-3 sm:w-44 sm:shrink-0 sm:flex-col sm:items-center sm:justify-between">
          <div className="flex h-16 w-44 items-center justify-start sm:h-24 sm:w-full sm:justify-center [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full">
            {renderLogo()}
          </div>
          <div className="w-28 rounded-2xl border border-white/[0.07] bg-[#0b1121] px-2 py-2.5 text-center sm:w-full">
            <div className="text-[26px] font-black leading-none tracking-[-0.04em] text-white sm:text-[32px]">
              {casino.rating.toFixed(1)}
            </div>
            <div className="mt-1 text-xs leading-none tracking-[0.1em] text-amber-400">
              ★★★★★
            </div>
            <div className="mt-1 text-[10px] text-white/35">
              {casino.votes.toLocaleString('pt-PT')} votos
            </div>
          </div>
        </div>

        {/* RIGHT: bonus text then play button */}
        <div className="flex flex-1 flex-col justify-between gap-3">
          <div className="flex-1 rounded-2xl border border-amber-500/15 bg-[#0b1121] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <div className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-400 sm:text-[11px]">
              Oferta de Boas-Vindas
            </div>
            <div className="text-[16px] font-black uppercase leading-snug tracking-[-0.01em] text-white sm:text-[19px]">
              {casino.bonus}
            </div>
          </div>

          <div>
            <a
              href={casino.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); handleCasinoClick(); }}
              className="relative z-10 flex w-full items-center justify-center gap-2 rounded-2xl border border-amber-500 bg-[linear-gradient(180deg,#f59e0b_0%,#d97706_100%)] px-4 py-3 text-center text-[17px] font-black text-white shadow-[0_10px_24px_rgba(245,158,11,0.3)] transition-transform duration-200 hover:scale-[1.01] sm:text-[19px]"
            >
              <span className="whitespace-nowrap">Explorar oferta</span>
              <span className="text-[0.9em] leading-none">→</span>
            </a>
            <div className="mt-2 text-center text-[10px] font-medium text-white/35 sm:text-xs">
              Sujeito a T&amp;C. 18+. Aposte com moderação.
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
