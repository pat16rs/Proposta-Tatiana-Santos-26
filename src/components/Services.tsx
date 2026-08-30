import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Calendar,
  Sparkles,
  Palette,
  Video,
  Flame,
  PenTool,
  Hash,
  Clock,
  MessageCircle,
  BarChart3,
  FileText,
  TrendingUp,
} from 'lucide-react';
import { proposalData } from '../config/proposal';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  PenTool: <PenTool className="w-5 h-5" />,
  Hash: <Hash className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

interface CategoryFilter {
  id: string;
  label: string;
  matchIds?: string[];
  matchCategory?: string;
}

const filterCategories: CategoryFilter[] = [
  { id: 'all', label: 'Todos os Serviços' },
  { 
    id: 'strategy', 
    label: 'Estratégia & Planeamento',
    matchIds: ['estrategia', 'planeamento', 'otimizacao']
  },
  { 
    id: 'design', 
    label: 'Criação & Design',
    matchIds: ['criacao', 'design', 'copywriting']
  },
  { 
    id: 'video', 
    label: 'Edição de Vídeo & Reels',
    matchIds: ['reels', 'stories']
  },
  { 
    id: 'distribution', 
    label: 'Distribuição & Agendamento',
    matchIds: ['hashtags', 'agendamento', 'comentarios']
  },
  { 
    id: 'analytics', 
    label: 'Métricas & Relatórios',
    matchIds: ['metricas', 'relatorios']
  },
];

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = proposalData.services.filter((service) => {
    if (activeCategory === 'all') return true;
    const filter = filterCategories.find((c) => c.id === activeCategory);
    if (!filter) return true;
    if (filter.matchIds && filter.matchIds.includes(service.id)) return true;
    if (filter.matchCategory && service.category === filter.matchCategory) return true;
    return false;
  });

  return (
    <section id="servicos" className="py-20 md:py-28 border-t border-stone-200 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Interactive Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium block">
                Âmbito de Atuação
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
                O que é feito na <span className="font-editorial font-normal text-stone-600">gestão de redes sociais</span>
              </h2>
              <p className="text-stone-600 text-base font-sans font-light leading-relaxed">
Uma abordagem integrada que combina estratégia, criatividade e execução para garantir uma presença digital consistente, cuidada e com propósito. 
</p>
            </div>

            {/* Total items badge */}
            <div className="text-xs font-mono text-stone-500 hidden md:block">
              Apresentando <span className="font-bold text-stone-900">{filteredServices.length}</span> de <span className="font-bold text-stone-900">{proposalData.services.length}</span> áreas
            </div>
          </div>

          {/* Interactive Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? proposalData.services.length 
                : proposalData.services.filter(s => cat.matchIds?.includes(s.id)).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                    isActive
                      ? 'bg-stone-900 text-white border border-stone-900 shadow-sm font-semibold'
                      : 'bg-white hover:bg-stone-100/80 text-stone-700 hover:text-stone-950 border border-stone-200/80 font-medium'
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-white' : 'bg-stone-400'
                    }`}
                  />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-200 group flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 group-hover:scale-105 transition-transform shadow-inner">
                    {iconMap[service.icon] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-stone-950 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span className="capitalize text-stone-600 font-medium">
                  {service.category === 'strategy' ? 'Estratégia' : service.category === 'content' ? 'Conteúdo & Design' : service.category === 'distribution' ? 'Distribuição' : 'Métricas'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};
