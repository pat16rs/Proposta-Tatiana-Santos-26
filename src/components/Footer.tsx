import React from 'react';
import { proposalData } from '../config/proposal';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#f4f2ee] text-stone-600 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-sm font-bold text-stone-900 tracking-wider uppercase block">
              {proposalData.brandName}
            </span>
            <p className="text-stone-500 text-xs">
              Proposta Comercial Privada · Gestão de Redes Sociais {proposalData.year}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-600 font-mono">
            <a href={`mailto:${proposalData.email}`} className="hover:text-stone-900 transition-colors">
              {proposalData.email}
            </a>
            <span>·</span>
            <a href={`tel:${proposalData.phone}`} className="hover:text-stone-900 transition-colors">
              {proposalData.phone}
            </a>
            {proposalData.instagram && (
              <>
                <span>·</span>
                <a
                  href={proposalData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors text-stone-800 font-medium"
                >
                  <Instagram className="w-3.5 h-3.5 text-stone-700" />
                  <span>{proposalData.instagramHandle || 'patriciaferreira_19'}</span>
                </a>
              </>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-stone-700 hover:text-stone-900 bg-white border border-stone-200 px-3.5 py-2 rounded-xl transition-colors shadow-xs cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <p>
            Esta proposta é confidencial e destina-se apenas a {proposalData.clientNamePlaceholder}.
          </p>
          <div className="flex items-center gap-4">
            <span>Validade: {proposalData.validityDays} dias</span>
            <span>·</span>
            <span>Documento Confidencial</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
