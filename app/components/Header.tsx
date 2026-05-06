'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-40">
      {/* Thin top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500/80 to-transparent" />

      <div className="border-b border-violet-500/[0.08] bg-[#05071a]/95 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <a href="/" className="group flex-shrink-0 transition-opacity hover:opacity-85">
              <Logo />
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-all hover:bg-violet-500/[0.07] hover:text-violet-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop right badge */}
            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center gap-1.5 rounded-full border border-violet-500/25 bg-violet-500/[0.08] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-300">
                  18+ | Jogue com responsabilidade
                </span>
              </div>
            </div>

            {/* Mobile right */}
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex items-center gap-1.5 rounded-full border border-violet-500/25 bg-violet-500/[0.08] px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-violet-300">18+</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors hover:border-violet-500/25 hover:text-violet-300"
                aria-label="Alternar menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {isMenuOpen && (
            <div className="border-t border-white/[0.06] pb-4 pt-3 lg:hidden">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:bg-violet-500/[0.06] hover:text-violet-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-violet-500/60" />
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
