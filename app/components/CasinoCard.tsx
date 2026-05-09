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

const rankConfig = {
  1: {
    label: '#1',
    border: 'border-amber-400/30',
    glow: 'shadow-[0_0_32px_rgba(245,158,11,0.12),0_20px_60px_rgba(0,0,0,0.55)]',
    hoverGlow: 'hover:shadow-[0_0_44px_rgba(245,158,11,0.18),0_28px_70px_rgba(0,0,0,0.65)]',
    rankColor: 'text-amber-400',
    rankBg: 'bg-amber-500/10 border-amber-500/25',
    topLine: 'from-amber-500/0 via-amber-400/60 to-amber-500/0',
  },
  2: {
    label: '#2',
    border: 'border-violet-400/25',
    glow: 'shadow-[0_0_28px_rgba(139,92,246,0.10),0_20px_60px_rgba(0,0,0,0.5)]',
    hoverGlow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.16),0_28px_70px_rgba(0,0,0,0.6)]',
    rankColor: 'text-violet-300',
    rankBg: 'bg-violet-500/10 border-violet-500/25',
    topLine: 'from-violet-500/0 via-violet-400/50 to-violet-500/0',
  },
  default: {
    label: '',
    border: 'border-white/[0.07]',
    glow: 'shadow-[0_16px_50px_rgba(0,0,0,0.45)]',
    hoverGlow: 'hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]',
    rankColor: 'text-white/40',
    rankBg: 'bg-white/[0.04] border-white/[0.09]',
    topLine: 'from-white/0 via-white/10 to-white/0',
  },
};

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

    // Google Ads conversion
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18095510991/dN83CKv-36UcEM-rzrRD',
      });
    }
  };

  const cfg = rank === 1 ? rankConfig[1] : rank === 2 ? rankConfig[2] : rankConfig.default;

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image
          src={casino.logo}
          alt={`${casino.name} Casino`}
          width={260}
          height={180}
          className="h-full w-full object-contain drop-shadow-sm"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  const filledStars = Math.round(casino.rating / 2);

  return (
    <article
      className={`
        relative mx-auto w-full max-w-lg cursor-pointer overflow-hidden
        rounded-2xl border bg-[#0c0e22]
        transition-all duration-300 hover:-translate-y-1
        ${cfg.border} ${cfg.glow} ${cfg.hoverGlow}
      `}
    >
      {/* Top gradient accent line */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${cfg.topLine}`} />

      {/* Invisible full-card link */}
      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCasinoClick}
        className="absolute inset-0 z-0 rounded-2xl"
        aria-label={`Ver oferta ${casino.name}`}
      />

      {/* Subtle ambient glow in background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className={`absolute -top-10 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full blur-3xl opacity-[0.07] ${rank === 1 ? 'bg-amber-400' : 'bg-violet-500'}`} />
      </div>

      <div className="relative z-10 p-4 sm:p-5">

        {/* Header row: rank pill + casino badge */}
        <div className="mb-3 flex items-center justify-between gap-2">
          {rank ? (
            <div className={`flex h-7 items-center rounded-lg border px-2.5 text-[11px] font-black tracking-wider ${cfg.rankColor} ${cfg.rankBg}`}>
              {cfg.label || `#${rank}`}
            </div>
          ) : <div />}

          {casino.badge ? (
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.15em] ${
              rank === 1
                ? 'border border-amber-500/20 bg-amber-500/10 text-amber-300'
                : 'border border-violet-500/20 bg-violet-500/10 text-violet-300'
            }`}>
              <span className="text-[8px]">◆</span>
              {casino.badge}
            </span>
          ) : null}
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">

          {/* LEFT: logo + rating */}
          <div className="flex w-full flex-row items-center gap-2.5 sm:w-44 sm:shrink-0 sm:flex-col sm:items-center sm:gap-2.5">

            {/* Logo container — maximise available area, minimal padding */}
            <div className="flex h-[76px] w-[44%] shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] p-1.5 sm:h-[88px] sm:w-full">
              <div className="flex h-full w-full items-center justify-center [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full">
                {renderLogo()}
              </div>
            </div>

            {/* Rating box — compact */}
            <div className="flex flex-1 flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.03] px-2 py-2 sm:w-full sm:flex-none">
              <div className="text-[26px] font-black leading-none tracking-tight text-white sm:text-[30px]">
                {casino.rating.toFixed(1)}
              </div>
              <div className="mt-1 flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-[10px] ${i < filledStars ? 'text-amber-400' : 'text-white/15'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="mt-0.5 text-[9px] font-medium text-white/30">
                {casino.votes.toLocaleString('pt-PT')} aval.
              </div>
            </div>
          </div>

          {/* RIGHT: bonus + CTA */}
          <div className="flex flex-1 flex-col gap-3">

            {/* Bonus card */}
            <div className="relative flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-[#07091c] p-4">
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 h-full w-[3px] rounded-l-xl ${rank === 1 ? 'bg-gradient-to-b from-amber-400 to-amber-600' : 'bg-gradient-to-b from-violet-400 to-violet-700'}`} />

              <p className={`mb-2 text-[9px] font-extrabold uppercase tracking-[0.3em] sm:text-[10px] ${rank === 1 ? 'text-amber-400/80' : 'text-violet-400/80'}`}>
                Oferta de Boas-Vindas
              </p>
              <p className="text-[15px] font-black uppercase leading-snug tracking-tight text-white sm:text-[17px]">
                {casino.bonus}
              </p>
            </div>

            {/* CTA button */}
            <div>
              <a
                href={casino.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.stopPropagation(); handleCasinoClick(); }}
                className="relative z-10 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-amber-500/80 bg-gradient-to-b from-amber-400 to-amber-600 px-4 py-3 text-center text-[16px] font-black text-white shadow-[0_8px_24px_rgba(245,158,11,0.28)] transition-all duration-200 hover:scale-[1.015] hover:shadow-[0_12px_30px_rgba(245,158,11,0.38)] sm:text-[18px]"
              >
                {/* Shimmer overlay */}
                <span className="pointer-events-none absolute inset-0 -skew-x-12 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 hover:translate-x-[120%]" />
                <span className="whitespace-nowrap">Ver Oferta</span>
                <span className="text-[1em] leading-none opacity-80">→</span>
              </a>

              {/* Trust badges */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                <span className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold text-white/35">
                  🛡️ Licenciado em Portugal
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold text-white/35">
                  💳 Pagamentos Seguros
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold text-white/35">
                  🔒 Jogo Responsável
                </span>
              </div>

              <p className="mt-2 text-center text-[10px] text-white/25">
                Sujeito a T&amp;C · 18+ · Aposte com moderação
              </p>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}
