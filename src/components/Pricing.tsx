import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Shield } from 'lucide-react';
import { proposalData } from '../config/proposal';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = () => {
  return (
    <section id="planos" className="py-20 md:py-28 border-t border-stone-200 bg-[#f7f5f0] relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-stone-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-stone-100 border border-stone-200 text-stone-700 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-stone-700" />
            <span>Propostas</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 tracking-tight">
            2 Planos. <span className="font-editorial font-normal text-stone-600">Uma Estratégia.</span>
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg font-sans font-light leading-relaxed">
            Escolha a solução que melhor se adapta aos objetivos dos seus negócios.
          </p>
        </motion.div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {proposalData.plans.map((plan: PricingPlan, idx: number) => {
            const isRec = plan.recommended;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isRec
                    ? 'bg-white border-2 border-stone-900 shadow-xl shadow-stone-300/60 lg:-translate-y-2 ring-4 ring-stone-900/5'
                    : 'bg-white border border-stone-200 hover:border-stone-300 shadow-md shadow-stone-200/40'
                }`}
              >
                {/* Recommended Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-stone-900 text-white shadow-md">
                      <Sparkles className="w-3 h-3 text-white fill-white" />
                      {plan.badge || 'RECOMENDADO'}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-display font-bold text-stone-900">
                        {plan.name}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-600 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-stone-100 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-display font-bold text-stone-900 tracking-tight">
                      {plan.price} {plan.currency}
                    </span>
                    <span className="text-xs text-stone-500 font-mono">
                      / {plan.period} +IVA
                    </span>
                  </div>

                  {/* Content Volume Pills */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                    <div className="space-y-0.5">
                      <span className="text-base font-bold text-stone-900 block font-mono">
                        {plan.postsPerMonth}
                      </span>
                      <span className="text-[10px] text-stone-500 block uppercase font-mono font-medium">
                        Posts/mês
                      </span>
                    </div>
                    <div className="space-y-0.5 border-x border-stone-200">
                      <span className="text-base font-bold text-stone-900 block font-mono">
                        {plan.reelsPerMonth}
                      </span>
                      <span className="text-[10px] text-stone-500 block uppercase font-mono font-medium">
                        Reels/mês
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-base font-bold text-stone-900 block font-mono">
                        {plan.storiesPerMonth}
                      </span>
                      <span className="text-[10px] text-stone-500 block uppercase font-mono font-medium">
                        Stories/mês
                      </span>
                    </div>
                  </div>

                  {/* Feature Breakdown */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-medium block">
                      O que está incluído:
                    </span>
                    <ul className="space-y-2.5 text-xs text-stone-700">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isRec ? 'text-stone-900' : 'text-stone-600'}`} />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Details Footer */}
                <div className="pt-6 mt-6 border-t border-stone-100 text-center">
                  <p className="text-[11px] text-center text-stone-500 font-mono leading-relaxed">
                    Os conteúdos são distribuídos entre os dois negócios. Ex.: 12 stories = 6 para o cabeleireiro + 6 para a marca de vestuário.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Transparency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12"
        />

      </div>
    </section>
  );
};
