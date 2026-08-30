import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface CTAProps {
  onDownloadPdf?: () => void;
}

export const CTA: React.FC<CTAProps> = () => {
  return (
    <section className="py-20 md:py-28 border-t border-stone-200 bg-[#faf8f5] text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-stone-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase bg-stone-100 border border-stone-200 text-stone-700 font-medium shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-stone-700" />
          <span>Próximos Passos</span>
        </div>

        {/* Headlines */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 tracking-tight leading-tight">
            Vamos dar uma nova dimensão à <br className="hidden sm:inline" />
            <span className="font-editorial font-normal text-stone-600">presença digital dos seus negócios?</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Fico à total disposição para esclarecer qualquer questão ou ajustar os detalhes da estratégia aos seus objetivos.
          </p>
        </div>

        {/* Guarantee details */}

      </motion.div>
    </section>
  );
};
