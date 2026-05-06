export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <LogoIcon size={46} />
      {/* Wordmark */}
      <div className="leading-none">
        <div className="flex items-baseline gap-[1px]">
          <span className="text-[18px] font-black tracking-tight text-white">Casinos</span>
          <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-[18px] font-black tracking-tight text-transparent">
            Rápido
          </span>
        </div>
        <span className="block text-[9px] font-bold uppercase tracking-[0.35em] text-violet-400/40">
          .org
        </span>
      </div>
    </div>
  );
}

export function LogoIcon({ size = 46 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Outer ring gradient: violet → gold */}
        <linearGradient id="ringGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="45%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        {/* Crown gradient: gold */}
        <linearGradient id="crownGrad" x1="14" y1="13" x2="34" y2="33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        {/* Background gradient */}
        <radialGradient id="bgGrad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#130d2e" />
          <stop offset="100%" stopColor="#060412" />
        </radialGradient>
        {/* Inner ring glow gradient */}
        <linearGradient id="innerRingGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="lg" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Gem glow */}
        <filter id="gemGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="0.7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Background disc ── */}
      <circle cx="24" cy="24" r="23.5" fill="url(#bgGrad)" />

      {/* ── Outer gradient ring ── */}
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="url(#ringGrad)" strokeWidth="1.6" />

      {/* ── 12 gem studs on outer ring ── */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const r = 22.5;
        const cx = 24 + r * Math.cos(angle);
        const cy = 24 + r * Math.sin(angle);
        const isGold = i % 3 === 0;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={isGold ? 1.5 : 1.1}
            fill={isGold ? '#f59e0b' : '#8b5cf6'}
            filter="url(#gemGlow)"
          />
        );
      })}

      {/* ── Second inner ring ── */}
      <circle cx="24" cy="24" r="18.5" fill="none" stroke="url(#innerRingGrad)" strokeWidth="0.6" />

      {/* ── Sunburst rays (very subtle) ── */}
      <g opacity="0.09">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={24}
              y1={24}
              x2={24 + 18 * Math.cos(angle)}
              y2={24 + 18 * Math.sin(angle)}
              stroke="#f59e0b"
              strokeWidth="0.9"
            />
          );
        })}
      </g>

      {/* ── Laurel arcs on left and right ── */}
      <g opacity="0.55" filter="url(#lg)">
        {/* Left laurel arc */}
        <path
          d="M10 30 Q7 24 10 18"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M11.5 28.5 Q9.5 24 11.5 19.5"
          fill="none"
          stroke="#c084fc"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Right laurel arc */}
        <path
          d="M38 18 Q41 24 38 30"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M36.5 19.5 Q38.5 24 36.5 28.5"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* ── Crown ── */}
      <g filter="url(#lg)">
        {/* Crown body */}
        <path
          d="M14 30 L14 20.5 L18.5 25 L24 13.5 L29.5 25 L34 20.5 L34 30 Z"
          fill="url(#crownGrad)"
        />
        {/* Crown base bar */}
        <rect x="13" y="29.5" width="22" height="3.8" rx="1.9" fill="url(#crownGrad)" />

        {/* Crown peak jewels */}
        <circle cx="14" cy="20.5" r="2.1" fill="#c084fc" filter="url(#gemGlow)" />
        <circle cx="24" cy="13.5" r="2.4" fill="#e879f9" filter="url(#gemGlow)" />
        <circle cx="34" cy="20.5" r="2.1" fill="#c084fc" filter="url(#gemGlow)" />

        {/* Crown mid jewels on the "steps" */}
        <circle cx="18.5" cy="25" r="1.3" fill="#fde68a" opacity="0.9" />
        <circle cx="29.5" cy="25" r="1.3" fill="#fde68a" opacity="0.9" />

        {/* Crown base center diamond gem */}
        <path
          d="M24 28 L25.5 30 L24 32 L22.5 30 Z"
          fill="#f59e0b"
          filter="url(#gemGlow)"
        />
      </g>

      {/* ── 4-pointed sparkle top-left ── */}
      <g opacity="0.7" filter="url(#gemGlow)">
        <path d="M9.5 10 L10 11.8 L11.8 12.3 L10 12.8 L9.5 14.6 L9 12.8 L7.2 12.3 L9 11.8 Z" fill="#c084fc" />
      </g>
      {/* ── 4-pointed sparkle top-right ── */}
      <g opacity="0.7" filter="url(#gemGlow)">
        <path d="M38.5 10 L39 11.8 L40.8 12.3 L39 12.8 L38.5 14.6 L38 12.8 L36.2 12.3 L38 11.8 Z" fill="#fbbf24" />
      </g>
    </svg>
  );
}
