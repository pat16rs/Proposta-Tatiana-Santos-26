import React from 'react';
import { motion } from 'motion/react';
import { Calendar, UploadCloud, CheckCircle2, BarChart2, ArrowRight } from 'lucide-react';
import { proposalData } from '../config/proposal';

const stepIcons: Record<string, React.ReactNode> = {
  '01': <Calendar className="w-5 h-5" />,
  '02': <UploadCloud className="w-5 h-5" />,
  '03': <CheckCircle2 className="w-5 h-5" />,
  '04': <BarChart2 className="w-5 h-5" />,
};

export const Workflow: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 border-t border-stone-200 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium block">
            Processo de Trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Como funciona a <span className="font-editorial font-normal text-stone-600">dinâmica mensal</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans font-light leading-relaxed">
            Um processo de trabalho simples e organizado, pensado para respeitar o seu tempo e garantir que cada conteúdo é revisto e aprovado antes da publicação.
          </p>
        </motion.div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {proposalData.workflow.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 flex flex-col justify-between space-y-6 relative group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 group-hover:scale-105 transition-transform shadow-inner">
                    {stepIcons[step.stepNumber] || <Calendar className="w-5 h-5" />}
                  </div>
                  <span className="text-2xl font-display font-bold text-stone-300 group-hover:text-stone-700 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step title */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                    Fase {step.stepNumber}
                  </span>
                  <h3 className="text-lg font-display font-bold text-stone-900">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                {step.details && (
                  <ul className="space-y-2 pt-2 border-t border-stone-100">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-[11px] text-stone-600 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tag / Badge */}
              <div className="pt-4 border-t border-stone-100" />
            </motion.div>
          ))}
        </div>

        {/* Approval Guarantee Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-stone-700">
              <strong className="text-stone-900">Aprovação antes da publicação:</strong> todos os conteúdos são revistos e aprovados antes do agendamento, com 1 ronda de alterações incluída.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
