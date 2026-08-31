import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Mail, Phone, MessageSquare, Sparkles, ArrowUpRight } from 'lucide-react';
import { proposalData } from '../config/proposal';

interface ContactFormProps {
  selectedPlanId: string;
  onPlanChange: (planId: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedPlanId,
  onPlanChange,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPlan = proposalData.plans.find((p) => p.id === selectedPlanId) || proposalData.plans[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build email mailto link
    const subject = encodeURIComponent(`Aceitação de Proposta Comercial - ${selectedPlan.name} (${proposalData.clientNamePlaceholder})`);
    const body = encodeURIComponent(
      `Olá ${proposalData.professionalName},\n\n` +
      `Gostaria de avançar com a proposta de gestão de redes sociais para o Cabeleireiro e a Loja de Roupa.\n\n` +
      `Plano Escolhido: ${selectedPlan.name} (${selectedPlan.price} €/mês)\n` +
      `Nome de Contacto: ${name || proposalData.clientNamePlaceholder}\n` +
      `Email: ${email}\n` +
      `Telefone: ${phone}\n\n` +
      `Mensagem / Notas Adicionais:\n${message || 'Sem notas adicionais. Aguardo o próximo contacto.'}\n\n` +
      `Com os melhores cumprimentos,\n${name || proposalData.clientNamePlaceholder}`
    );

    // Open mail client
    window.location.href = `mailto:${proposalData.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 border-t border-stone-200 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium block">
            Formalização da Proposta
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Confirmar interesse & <span className="font-editorial font-normal text-stone-600">próximos passos</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans font-light leading-relaxed">
            Preencha os seus dados para confirmar a seleção do plano. Entrarei em contacto dentro do horário estabelecido para formalizarmos o início dos trabalhos.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-12 shadow-lg relative">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-stone-900">
                  Muito obrigado pela confiança!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  O seu cliente de email foi aberto com a mensagem formatada para <strong className="text-stone-900">{proposalData.email}</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Plano Selecionado:</span>
                  <span className="font-bold text-stone-900">{selectedPlan.name} ({selectedPlan.price} €/mês)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Horário de Resposta:</span>
                  <span className="text-stone-800 font-medium">Segunda a Sexta · 21:30 às 23:30</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-stone-600 hover:text-stone-900 underline font-mono cursor-pointer"
              >
                Voltar a editar formulário
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Plan Picker Radio Pills */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold block">
                  1. Selecione o Plano Pretendido
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {proposalData.plans.map((p) => {
                    const isSelected = p.id === selectedPlanId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => onPlanChange(p.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 border-stone-900 text-white shadow-md ring-2 ring-stone-900/20'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100 hover:border-stone-300'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold block">{p.name}</span>
                            {p.recommended && (
                              <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-white text-stone-950' : 'bg-stone-900 text-white'}`}>
                                TOP
                              </span>
                            )}
                          </div>
                          <span className={`text-lg font-bold font-display ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                            {p.price} €<span className={`text-xs font-normal font-sans ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>/mês +IVA</span>
                          </span>
                        </div>
                        <span className={`text-[10px] pt-2 border-t mt-2 font-mono block ${isSelected ? 'text-stone-300 border-stone-800' : 'text-stone-500 border-stone-200'}`}>
                          {p.postsPerMonth} Posts · {p.reelsPerMonth} Reels
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client Contact Details */}
              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold block">
                  2. Os Seus Dados de Contacto
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs text-stone-600 font-medium">
                      Nome / Responsável *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={proposalData.clientNamePlaceholder}
                      className="w-full bg-stone-50 border border-stone-200 focus:border-stone-800 focus:ring-1 focus:ring-stone-800 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs text-stone-600 font-medium">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="912 345 678"
                      className="w-full bg-stone-50 border border-stone-200 focus:border-stone-800 focus:ring-1 focus:ring-stone-800 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="contact-email" className="text-xs text-stone-600 font-medium">
                      Email para Envio do Contrato / Faturação *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemplo@dominio.pt"
                      className="w-full bg-stone-50 border border-stone-200 focus:border-stone-800 focus:ring-1 focus:ring-stone-800 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs text-stone-600 font-medium flex justify-between">
                  <span>Notas Adicionais ou Dúvidas (Opcional)</span>
                  <span className="text-[11px] text-stone-400">Opcional</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tem alguma dúvida ou data pretendida para o arranque dos serviços?"
                  className="w-full bg-stone-50 border border-stone-200 focus:border-stone-800 focus:ring-1 focus:ring-stone-800 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all flex items-center justify-center space-x-2 text-sm shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? 'A preparar email...' : `Confirmar Escolha · ${selectedPlan.name} (${selectedPlan.price} €)`}
                  </span>
                </button>

                <div className="text-center text-[11px] text-stone-500 font-mono">
                  Ao submeter, será gerado um email formal de aceitação da proposta para {proposalData.email}.
                </div>
              </div>

            </form>
          )}

        </div>

        {/* Direct Contact Alternative */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-stone-900 font-semibold block">Contactos Diretos da Proposta</span>
            <div className="flex flex-wrap items-center gap-2 text-stone-600 justify-center sm:justify-start">
              <span>Email: {proposalData.email}</span>
              <span>·</span>
              <span>Tel: {proposalData.phone}</span>
              {proposalData.instagram && (
                <>
                  <span>·</span>
                  <a
                    href={proposalData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Instagram: {proposalData.instagramHandle}
                  </a>
                </>
              )}
            </div>
          </div>
          <div className="text-stone-600 font-mono text-[11px] bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 shrink-0">
            Disponibilidade: Seg–Sex · 21:30–23:30
          </div>
        </div>

      </div>
    </section>
  );
};
