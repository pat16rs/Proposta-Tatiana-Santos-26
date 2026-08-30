import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Scissors, Shirt, ArrowRight } from 'lucide-react';
import { proposalData } from '../config/proposal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#fcfbf9] to-[#f7f5f0]">
      {/* Background Subtle Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-stone-200/30 via-stone-100/20 to-transparent -z-10 blur-2xl pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-stone-200/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            
            {/* Meta badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-stone-100 border border-stone-200 text-stone-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
                PROPOSTA COMERCIAL · {proposalData.year}
              </span>
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-stone-200 text-stone-600 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                Validade: {proposalData.validityDays} dias
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-stone-900 leading-[1.08]">
                Gestão de <br className="hidden sm:block" />
                <span className="font-editorial font-normal text-stone-600">Redes Sociais</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-stone-600 font-sans leading-relaxed max-w-2xl font-light">
                Uma estratégia digital pensada para dar visibilidade, consistência e personalidade aos seus dois negócios.
              </p>
            </div>

            {/* Dual Business Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center p-1.5 bg-stone-100/90 border border-stone-200 rounded-2xl gap-2 shadow-inner"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-stone-200/80 text-xs font-semibold text-stone-800 shadow-sm">
                <Scissors className="w-3.5 h-3.5 text-stone-700" />
                <span>Cabeleireiro</span>
              </div>
              <span className="text-stone-400 text-xs font-mono font-bold">+</span>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-stone-200/80 text-xs font-semibold text-stone-800 shadow-sm">
                <Shirt className="w-3.5 h-3.5 text-stone-700" />
                <span>Moda</span>
              </div>
            </motion.div>

            {/* Target Client Notice */}
            <div className="pt-2 border-t border-stone-200 text-xs">
              <span className="text-stone-500 uppercase tracking-wider font-mono text-[11px] font-medium block">
                Proposta desenvolvida para
              </span>
              <span className="text-base font-bold text-stone-900 font-sans">
                {proposalData.clientNamePlaceholder}
              </span>
            </div>
          </motion.div>

          {/* Editorial Visual Composition (Right Column) */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Frame Container */}
              <div className="relative border border-stone-200/90 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50 overflow-hidden">
                
                {/* Decorative background lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#e7e5df_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

                {/* Header card preview */}
                <div className="relative z-10 flex items-center justify-between border-b border-stone-100 pb-5 mb-6">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
                      Uma Estratégia. Dois Negócios.
                    </span>
                    <h3 className="text-sm font-bold text-stone-900">
                      Presença Digital Integrada
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-stone-200 bg-stone-100 flex items-center justify-center text-stone-700">
                    <Sparkles className="w-3.5 h-3.5 text-stone-700" />
                  </div>
                </div>

                {/* 2-Side Interactive Visual Balance */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Left Stream: Hair */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-800 shadow-xs">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Salão & Estilo</div>
                      <div className="text-[11px] text-stone-600 mt-0.5 font-medium">Estilo · Inspiração · Transformação</div>
                    </div>
                    <div className="pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[10px] text-stone-700 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Marcações & Resultados</span>
                    </div>
                  </div>

                  {/* Right Stream: Fashion */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-800 shadow-xs">
                      <Shirt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Loja & Moda</div>
                      <div className="text-[11px] text-stone-600 mt-0.5 font-medium">Tendências · Novidades · Inspiração</div>
                    </div>
                    <div className="pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[10px] text-stone-700 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Visita à Loja & Vendas</span>
                    </div>
                  </div>
                </div>

                {/* Synthesis Banner */}
                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-stone-600 text-[11px] uppercase tracking-wider font-semibold">
                      Sinergia de Conteúdo
                    </span>
                    <span className="text-[11px] font-bold text-stone-900">
                      1 Espaço · 2 Marcas
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Estratégia coordenada para valorizar ambos os negócios.
                  </p>
                </div>

                {/* Bottom stats banner */}
               
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
