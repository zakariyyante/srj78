export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Icon: hexagon with lightning bolt */}
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexGrad" x1="0" y1="0" x2="42" y2="42">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="boltGrad" x1="14" y1="6" x2="28" y2="36">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Hexagon background */}
        <path
          d="M21 2 L37 11.5 L37 30.5 L21 40 L5 30.5 L5 11.5 Z"
          fill="#0f1020"
          stroke="url(#hexGrad)"
          strokeWidth="1.5"
        />
        {/* Speed lines left */}
        <line x1="8" y1="18" x2="14" y2="18" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="7" y1="21" x2="13" y2="21" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <line x1="8" y1="24" x2="14" y2="24" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        {/* Lightning bolt */}
        <path
          d="M23 8 L16 22 L20.5 22 L19 34 L27 19 L22.5 19 Z"
          fill="url(#boltGrad)"
          filter="url(#glow)"
        />
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="flex items-baseline gap-0.5">
          <span className="text-[19px] font-black tracking-tight text-white">Casinos</span>
          <span className="text-[19px] font-black tracking-tight text-amber-400">Rápido</span>
        </div>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
          .org
        </span>
      </div>
    </div>
  );
}
