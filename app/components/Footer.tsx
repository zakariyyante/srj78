import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/#sobre' },
    { name: 'Privacidade', href: '/privacy' },
    { name: 'Termos', href: '/terms' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Jogo Seguro', href: '/#responsabilidade' },
    { name: 'Cookies', href: '/#cookies' },
  ];

  return (
    <footer id="contacto" className="border-t border-violet-500/[0.08] bg-[#03040e]">
      {/* Top accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16">

        {/* Top row: logo + tagline + socials */}
        <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo />
            <p className="max-w-xs text-center text-xs leading-relaxed text-white/35 sm:text-left">
              Portal independente de análise e comparação de operadores de casino online regulamentados em Portugal.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/35 transition-all hover:border-violet-500/35 hover:bg-violet-500/[0.08] hover:text-violet-300"
            aria-label="Facebook"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/35 transition-all hover:border-violet-500/35 hover:bg-violet-500/[0.08] hover:text-violet-300"
            aria-label="Instagram"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/35 transition-all hover:border-violet-500/35 hover:bg-violet-500/[0.08] hover:text-violet-300"
            aria-label="X (Twitter)"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Middle row: 3 columns */}
        <div className="mb-10 grid gap-8 sm:grid-cols-3">
          {/* Navigation */}
          <div>
            <h6 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Navegação</h6>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-violet-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div id="responsabilidade" className="sm:col-span-2">
            <h6 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400/70">
              Jogo Responsável
            </h6>
            <div className="rounded-2xl border border-violet-500/15 bg-violet-500/[0.04] p-5">
              <p className="mb-3 text-xs leading-relaxed text-white/45 sm:text-sm">
                <strong className="text-white/60">18+.</strong> O jogo deve ser encarado exclusivamente como entretenimento.
                Se sentir dificuldade em controlar o seu comportamento de jogo, recorra a:
              </p>
              <ul className="space-y-1 text-xs text-white/40 sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-violet-400">›</span>
                  SICAD — Serviço de Intervenção nos Comportamentos Aditivos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-violet-400">›</span>
                  Linha Vida — <strong className="text-amber-400">1414</strong> (gratuita, 24h)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-violet-400">›</span>
                  Jogadores Anónimos Portugal
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate & Platform Disclosure */}
        <div className="mb-8 space-y-2 rounded-xl border border-white/[0.05] bg-white/[0.02] px-5 py-4">
          <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
            <strong className="font-semibold text-white/55">Divulgação de afiliação:</strong>{' '}
            Podemos receber uma comissão quando utilizadores se registam através de links disponíveis neste website.
          </p>
          <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
            <strong className="font-semibold text-white/55">Sem serviço de plataforma:</strong>{' '}
            Não disponibilizamos serviços de plataforma de jogo. Todos os serviços são prestados por operadores terceiros devidamente licenciados.
          </p>
        </div>

        {/* Institutional Partners */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.srij.turismodeportugal.pt/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 transition-colors hover:border-violet-500/25"
            aria-label="SRIJ"
          >
            <Image src="/srij.svg" alt="SRIJ" width={100} height={40} className="h-7 w-auto object-contain sm:h-8" />
          </a>
          <a
            href="https://www.icad.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 transition-colors hover:border-violet-500/25"
            aria-label="SICAD"
          >
            <Image src="/sicad.png" alt="SICAD" width={104} height={40} className="h-7 w-auto object-contain sm:h-8" />
          </a>
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 transition-colors hover:border-violet-500/25"
            aria-label="GambleAware"
          >
            <Image src="/gambleaware.png" alt="GambleAware" width={104} height={40} className="h-7 w-auto object-contain sm:h-8" />
          </a>
          <div className="flex items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
            <Image src="/18plus.png" alt="18+" width={40} height={40} className="h-7 w-auto object-contain sm:h-8" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="text-xs text-white/25">
            © 2026 CasinosRápido.org — Portal independente de análise e comparação de casinos online regulamentados em Portugal.
          </p>
          <p className="mt-1.5 text-[11px] text-white/15">
            18+ | Reservado a maiores de idade | Aposte com moderação | Exclusivo para residentes em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
