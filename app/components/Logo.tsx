export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon size={40} />
      <div className="leading-none">
        <div className="flex items-baseline">
          <span className="text-[17px] font-black tracking-tight text-white">Casinos</span>
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-[17px] font-black tracking-tight text-transparent">
            Rápido
          </span>
          <span className="ml-[2px] text-[10px] font-semibold text-violet-400/35">.org</span>
        </div>
        <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-white/20">
          Portugal · Licenciado SRIJ
        </span>
      </div>
    </div>
  );
}

export function LogoIcon({ size = 40 }: { size?: number }) {
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
        {/* Rounded-square fill */}
        <linearGradient id="sqBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b0764" />
          <stop offset="100%" stopColor="#0f0529" />
        </linearGradient>
        {/* Border gradient */}
        <linearGradient id="sqBorder" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="60%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        {/* Crown fill */}
        <linearGradient id="crownFill" x1="12" y1="12" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        {/* Top gloss */}
        <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Clip for gloss */}
        <clipPath id="sqClip">
          <rect x="1.5" y="1.5" width="45" height="45" rx="12.5" />
        </clipPath>
      </defs>

      {/* ── Background rounded square ── */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="12.5" fill="url(#sqBg)" />

      {/* ── Border ── */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="12.5" fill="none" stroke="url(#sqBorder)" strokeWidth="1.4" />

      {/* ── Top gloss sheen ── */}
      <rect x="1.5" y="1.5" width="45" height="20" rx="12.5" fill="url(#gloss)" clipPath="url(#sqClip)" />

      {/* ── Clean geometric crown ── */}
      {/* Crown body — flat 3-peak silhouette */}
      <path
        d="M13 32 L13 21.5 L18.5 26.5 L24 14.5 L29.5 26.5 L35 21.5 L35 32 Z"
        fill="url(#crownFill)"
      />
      {/* Crown base bar */}
      <rect x="12" y="31" width="24" height="4" rx="2" fill="url(#crownFill)" />

      {/* ── Three peak dots ── */}
      <circle cx="13" cy="21.5" r="2.2" fill="#fde68a" />
      <circle cx="24" cy="14.5" r="2.5" fill="#ffffff" opacity="0.95" />
      <circle cx="35" cy="21.5" r="2.2" fill="#fde68a" />

      {/* ── Small center-base diamond ── */}
      <path d="M24 29.5 L25.4 31.5 L24 33.5 L22.6 31.5 Z" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}
