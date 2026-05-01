'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Página Inicial', href: '/' },
    { name: 'Quem Somos', href: '/#sobre' },
    { name: 'Privacidade', href: '/privacy' },
    { name: 'Termos de Uso', href: '/terms' },
    { name: 'Fale Connosco', href: '/#contacto' },
    { name: 'Jogo Seguro', href: '/#responsabilidade' },
    { name: 'Cookies', href: '/#cookies' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0b1121]/90 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="transition-opacity hover:opacity-80">
            <Logo />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-amber-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <span className="rounded-full border border-amber-500/25 bg-amber-500/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Jogue com consciência
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-2 text-slate-400 hover:text-amber-400"
              aria-label="Alternar menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-2 border-t border-white/[0.06] pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-amber-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
