import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Shirt, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';
import { proposalData } from '../config/proposal';

export const BusinessCards: React.FC = () => {
  const hairFocusPoints = [
    { title: 'Estilo · Inspiração · Transformação', desc: 'Conteúdo que destaca a experiência, o cuidado e o resultado por detrás de cada transformação.' },
    { title: 'Cuidados Capilares & Dicas', desc: 'Partilhar recomendações práticas simples e úteis para o dia a dia.' },
    { title: 'Serviços & Tratamentos', desc: 'Reforçar a confiança, a qualidade e a experiência.' },
    { title: 'Marcações & Contacto Fácil', desc: 'Do interesse à marcação, de forma simples e direta.' },
    { title: 'Resultados & Testemunhos', desc: 'Mostrar clientes reais satisfeitos com a sua nova imagem.' },
    { title: 'Inspiração & Tendências', desc: 'Apresentar referências elegantes que despertam o desejo de mudança.' },
  ];

  const fashionFocusPoints = [
    { title: 'Tendências · Novidades · Inspiração', desc: 'Conteúdo visual e dinâmico que cria desejo pelas peças, incentiva visitas à loja e potencia as vendas.' },
    { title: 'Peças & Detalhes', desc: 'Destacar o corte, os detalhes, o estilo e a versatilidade de cada peça.' },
    { title: 'Combinações & Dicas de Styling', desc: 'Ensinar a conjugar looks completos para diferentes ocasiões.' },
    { title: 'Tendências da Estação', desc: 'Destacar as tendências da estação através das peças disponíveis na loja.' },
    { title: 'Inspiração & Lifestyle', desc: 'Criar conteúdos que inspiram, despertam o desejo e aproximam a marca do dia a dia das clientes.' },
    { title: 'Produtos em Destaque', desc: 'Promover peças-chave, novidades e promoções relevantes.' },
    { title: 'Visita à Loja & Atendimento', desc: 'Incentivar a passagem pelo espaço físico para experimentar.' },
  ];

  return (
    <section id="visao-geral" className="py-20 md:py-28 border-t border-stone-200 bg-[#f7f5f0]">
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
            Visão Geral da Estratégia
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Uma Estratégia. <span className="font-editorial font-normal text-stone-600">Dois negócios.</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans leading-relaxed font-light">
            O objetivo é criar uma presença digital profissional e consistente para os dois negócios, mantendo uma identidade própria para cada área e ao mesmo tempo, aproveitando oportunidades de comunicação cruzada.
          </p>
        </motion.div>

        {/* Two Business Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Cabeleireiro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-stone-200/90 bg-white rounded-3xl p-8 sm:p-10 space-y-8 relative overflow-hidden transition-all duration-300 hover:border-stone-300 shadow-md shadow-stone-200/50 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 shadow-inner">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-medium block">
                      Negócio 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                      Cabeleireiro
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                  {proposalData.hairSalonNamePlaceholder}
                </span>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Conteúdo que destaca a experiência, o cuidado e o resultado por detrás de cada transformação.
              </p>

              {/* Focus List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium block">
                  Conteúdos Estratégicos:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hairFocusPoints.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1"
                    >
                      <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0"></span>
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 pl-3.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Outcome Footer */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-mono">Foco Central:</span>
              <span className="text-stone-900 font-semibold">Visibilidade · Confiança · Marcações</span>
            </div>
          </motion.div>

          {/* Pillar 2: Loja de Roupa / Moda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-stone-200/90 bg-white rounded-3xl p-8 sm:p-10 space-y-8 relative overflow-hidden transition-all duration-300 hover:border-stone-300 shadow-md shadow-stone-200/50 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 shadow-inner">
                    <Shirt className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-medium block">
                      Negócio 02
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                      Loja & Moda
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                  {proposalData.fashionStoreNamePlaceholder}
                </span>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Conteúdo visual e dinâmico que cria desejo pelas peças, incentiva visitas à loja e potencia as vendas.
              </p>

              {/* Focus List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium block">
                  Conteúdos Estratégicos:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fashionFocusPoints.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1"
                    >
                      <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0"></span>
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 pl-3.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Outcome Footer */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-mono">Foco Central:</span>
              <span className="text-stone-900 font-semibold">Desejo · Visitas à Loja · Vendas</span>
            </div>
          </motion.div>

        </div>

        {/* Synergy Bridge Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>O valor de estarem no mesmo espaço</span>
            </h4>
            <p className="text-xs text-stone-600 max-w-3xl leading-relaxed">
             Quem visita o salão descobre a loja. Quem procura moda conhece o salão. A presença digital reforça esta ligação natural entre os dois negócios.
            </p>
          </div>
          <a
            href="#estrategia-cruzada"
            className="text-xs font-medium text-stone-800 hover:text-stone-950 flex items-center gap-1.5 whitespace-nowrap bg-stone-100 hover:bg-stone-200 px-4 py-2.5 rounded-xl border border-stone-200 transition-colors"
          >
            <span>Ver Ideias Cruzadas</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
