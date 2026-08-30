import React from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Laptop,
  Image,
  Video,
  RefreshCw,
  AlertCircle,
  Megaphone,
  CameraOff,
  Info
} from 'lucide-react';
import { proposalData } from '../config/proposal';

export const Conditions: React.FC = () => {
  return (
    <section id="condicoes" className="py-20 md:py-28 border-t border-stone-200 bg-[#faf8f5]">
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
            <Info className="w-3.5 h-3.5 text-stone-700" />
            <span>Termos & Alinhamento Profissional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Condições de prestação <span className="font-editorial font-normal text-stone-600">do serviço</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-sans font-light leading-relaxed">
    Para garantir um trabalho cuidado, consistente e bem organizado, gostaria de partilhar algumas informações relacionadas com a minha disponibilidade enquanto freelancer no fluxo de trabalho.
    </p>
        </motion.div>

        {/* Visual Schedule Spotlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-md relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 3 Metric Pills */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-[11px] font-mono text-stone-500 block uppercase font-medium">Dias Úteis</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-stone-900 block">
                  {proposalData.workSchedule.days}
                </span>
                <span className="text-[10px] text-stone-500 font-mono block">Segunda a Sexta</span>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-[11px] font-mono text-stone-500 block uppercase font-medium">Acompanhamento</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-stone-900 block whitespace-nowrap">
                  {proposalData.workSchedule.hours}
                </span>
                <span className="text-[10px] text-stone-500 font-mono block">Horário Definido</span>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-[11px] font-mono text-stone-500 block uppercase font-medium">Regime</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-stone-900 block">
                  {proposalData.workSchedule.mode}
                </span>
                <span className="text-[10px] text-stone-500 font-mono block">100% Digital</span>
              </div>
            </div>

            {/* Schedule Explanation */}
            <div className="lg:col-span-5 space-y-2 border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-8">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone-700" />
                <span>Horário & Comunicação Estruturada</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {proposalData.workSchedule.note}
              </p>
              <p className="text-[11px] text-stone-500 pt-1 leading-relaxed">
As mensagens e comentários serão acompanhados e respondidos de acordo com a minha disponibilidade, procurando garantir uma resposta atempada e consistente.              </p>
            </div>

          </div>
        </motion.div>

        {/* Detailed Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Horário de Comunicação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Horário de Comunicação</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>O serviço e a comunicação direta com o cliente são realizados exclusivamente de segunda a sexta-feira, das 21h00 às 23h30.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>O período das 21h00 às 23h30 destina-se ao acompanhamento do projeto, esclarecimento de questões, aprovação de conteúdos e restantes comunicações relacionadas com a gestão das redes sociais.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>Não está contemplada prestação de serviço aos fins de semana.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>As mensagens e comentários serão acompanhados e respondidos de acordo com a minha disponibilidade, procurando garantir uma resposta atempada e consistente.</span>
              </li>
            </ul>
          </motion.div>

          {/* Serviço Remoto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Serviço Remoto</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>O serviço é prestado exclusivamente em regime remoto.</span>
              </li>
              
            </ul>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-600 leading-relaxed">
              Toda a partilha de materiais, calendários e relatórios é feita de forma digital e simplificada através de plataformas online e email.
            </div>
          </motion.div>

          {/* Materiais & Conteúdos Base */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <Image className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Materiais</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>Fotografias, vídeos e restantes materiais necessários à criação dos conteúdos serão fornecidos pelo cliente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>A edição, adaptação, tratamento e preparação dos materiais fornecidos estão incluídos de acordo com o plano escolhido.</span>
              </li>
            </ul>
          </motion.div>

          {/* Captação Presencial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <CameraOff className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Captação Presencial</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>Fotografia profissional, filmagem, captação presencial de Reels e produção de conteúdos no estabelecimento não estão incluídas.</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-600 leading-relaxed">
              Serão fornecidas orientações claras sobre como captar fotografias e vídeos simples com telemóvel para obter o melhor resultado na edição.
            </div>
          </motion.div>

          {/* Alterações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Alterações & Validação</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>Cada conteúdo inclui uma ronda de alterações.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>Alterações adicionais ou reformulação completa de conteúdos poderão ser consideradas serviços adicionais.</span>
              </li>
            </ul>
          </motion.div>

          {/* Pedidos Urgentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Pedidos Urgentes</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>Pedidos urgentes ou conteúdos solicitados fora do calendário editorial poderão ser considerados serviços adicionais, dependendo da disponibilidade.</span>
              </li>
            </ul>
          </motion.div>

          {/* Publicidade Paga */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm md:col-span-2 space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Publicidade Paga (Meta Ads)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                <span>A gestão de campanhas Meta Ads e o respetivo investimento publicitário não estão incluídos nos planos apresentados.</span>
              </li>
            </ul>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-600 leading-relaxed">
              Caso pretenda investir em anúncios pagos no Facebook e Instagram no futuro, este serviço poderá ser contratado e orçamentado separadamente de acordo com os objetivos de crescimento pretendidos.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
