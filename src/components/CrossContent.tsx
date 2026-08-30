import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Scissors, Shirt } from 'lucide-react';
import { proposalData } from '../config/proposal';

export const CrossContent: React.FC = () => {
  return (
    <section id="estrategia-cruzada" className="py-20 md:py-28 border-t border-stone-200 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-stone-100 border border-stone-200 text-stone-700 font-medium">
            <Layers className="w-3.5 h-3.5 text-stone-700" />
            <span>Exemplos de Estratégia Cruzada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Dois negócios. <span className="font-editorial font-normal text-stone-600">Mais possibilidades.</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-sans font-light leading-relaxed">
A gestão conjunta vai além da simples partilha de conteúdos. A estratégia assenta numa narrativa visual integrada, capaz de cruzar cabelo e moda de forma natural, potenciar a identidade de cada negócio e transformar a conveniência de os encontrar no mesmo espaço.
          </p>
        </motion.div>

        {/* 4 Campaign Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proposalData.crossContent.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-300 space-y-6 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-semibold">
                    Conceito Editorial 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 font-medium">
                    {item.format}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-stone-900">
                    "{item.title}"
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.concept}
                  </p>
                </div>

                {/* Dual Angles */}
                <div className="space-y-2.5 pt-2">
                  {/* Hair Angle */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-800 shrink-0 mt-0.5 shadow-xs">
                      <Scissors className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 text-xs">
                      <span className="font-mono text-[10px] uppercase text-stone-500 font-semibold block">
                        No Salão de Cabeleireiro:
                      </span>
                      <p className="text-stone-700 leading-snug">
                        {item.hairAngle}
                      </p>
                    </div>
                  </div>

                  {/* Fashion Angle */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-800 shrink-0 mt-0.5 shadow-xs">
                      <Shirt className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 text-xs">
                      <span className="font-mono text-[10px] uppercase text-stone-500 font-semibold block">
                        Na Loja de Roupa:
                      </span>
                      <p className="text-stone-700 leading-snug">
                        {item.fashionAngle}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Benefit Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>1 Momento de Captação</span>
                <span className="text-stone-900 font-semibold">2 Contas Impactadas</span>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};
