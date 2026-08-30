import React, { useState, useEffect } from 'react';
import { Download, LogOut, Menu, X } from 'lucide-react';
import { proposalData } from '../config/proposal';

interface HeaderNavProps {
  onLogout: () => void;
  onDownloadPdf: () => void;
  isGeneratingPdf?: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onLogout,
  onDownloadPdf,
  isGeneratingPdf = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão Geral', href: '#visao-geral' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Propostas', href: '#planos' },
    { label: 'Estratégia Cruzada', href: '#estrategia-cruzada' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Condições', href: '#condicoes' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/90 py-3 sm:py-3.5 shadow-xs transition-shadow duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand & Proposal context */}
        <a href="#hero" className="flex items-center space-x-3 group min-w-0 flex-shrink">
          <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex-shrink-0 flex items-center justify-center text-xs font-mono font-bold text-white shadow-sm">
            PF
          </div>
          <div className="min-w-0">
            <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-900 truncate">
                {proposalData.brandName}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 whitespace-nowrap">
                Proposta 2026
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible on lg and larger) */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-xs text-stone-600 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-stone-900 transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
          <button
            onClick={onDownloadPdf}
            disabled={isGeneratingPdf}
            className="flex items-center space-x-2 text-xs font-medium bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 px-3.5 py-2 rounded-lg transition-all shadow-xs active:scale-95 disabled:opacity-50 whitespace-nowrap cursor-pointer"
            title="Descarregar proposta em formato PDF"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span>{isGeneratingPdf ? 'A preparar PDF...' : 'Descarregar PDF'}</span>
          </button>

          <button
            onClick={onLogout}
            className="text-xs text-stone-500 hover:text-red-600 hover:bg-stone-100 p-2 rounded-lg transition-colors cursor-pointer"
            title="Terminar sessão"
            aria-label="Terminar sessão"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile & Tablet Actions (Hamburger Menu + Quick PDF Download) */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onDownloadPdf}
            disabled={isGeneratingPdf}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-white border border-stone-200 rounded-lg shadow-xs active:scale-95 disabled:opacity-50"
            title="Descarregar PDF"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">PDF</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-800 hover:text-stone-950 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg shadow-xs active:scale-95 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-stone-50 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors border border-stone-200/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-stone-400 font-mono text-[10px]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onDownloadPdf();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-xs shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descarregar Proposta em PDF</span>
            </button>
            
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLogout();
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 text-xs text-stone-600 hover:text-red-600 bg-stone-100 hover:bg-stone-200 py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
