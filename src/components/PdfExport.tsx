import React, { useRef, useState } from 'react';
import { Download, Printer, X, FileText, CheckCircle2, AlertCircle, Sparkles, Scissors, Shirt } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { proposalData } from '../config/proposal';

interface PdfExportProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfExport: React.FC<PdfExportProps> = ({ isOpen, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  if (!isOpen) return null;

  // Direct jsPDF Vector Engine (Guaranteed 100% sharp, zero blank pages, multi-page vector layout)
  const generateVectorPdf = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
    const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
    const margin = 15;
    const contentWidth = pageWidth - margin * 2; // 180mm

    // Color palette (RGB)
    const cDark = [28, 25, 23]; // #1c1917
    const cGray = [100, 100, 100];
    const cLightBg = [247, 245, 240]; // #f7f5f0
    const cCardBorder = [220, 218, 212];
    const cHighlightBg = [255, 255, 255];

    // ==========================================
    // PAGE 1: COVER & STRATEGY & PLANS
    // ==========================================

    // Top Header Banner Line
    doc.setDrawColor(cDark[0], cDark[1], cDark[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, margin + 2, margin + contentWidth, margin + 2);

    // Header Meta
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text(`PROPOSTA COMERCIAL · ${proposalData.year}`, margin, margin + 8);

    doc.setFont('helvetica', 'normal');
    doc.text(`Validade: ${proposalData.validityDays} dias`, margin + contentWidth, margin + 8, { align: 'right' });

    // Main Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('Gestão de Redes Sociais', margin, margin + 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text('Estratégia digital integrada para dois negócios com um único espaço.', margin, margin + 24);

    // Client & Businesses Box
    let currentY = margin + 30;
    doc.setFillColor(cLightBg[0], cLightBg[1], cLightBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.roundedRect(margin, currentY, contentWidth, 22, 3, 3, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text('PROPOSTA ELABORADA PARA:', margin + 5, currentY + 7);
    doc.text('NEGÓCIOS ABRANGIDOS:', margin + (contentWidth / 2), currentY + 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text(proposalData.clientNamePlaceholder, margin + 5, currentY + 14);

    doc.setFontSize(9);
    doc.text(`1. ${proposalData.hairSalonNamePlaceholder} (Cabeleireiro)`, margin + (contentWidth / 2), currentY + 13);
    doc.text(`2. ${proposalData.fashionStoreNamePlaceholder} (Loja de Roupa)`, margin + (contentWidth / 2), currentY + 18);

    // Section 1: Strategic Vision
    currentY += 28;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('1. Pilares da Estratégia Digital', margin, currentY);

    currentY += 4;
    const colW = (contentWidth - 6) / 2;

    // Pillar 1 Box (Cabeleireiro)
    doc.setFillColor(cHighlightBg[0], cHighlightBg[1], cHighlightBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.roundedRect(margin, currentY, colW, 36, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('Negócio 01 · Cabeleireiro', margin + 4, currentY + 7);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text('• Transformações & Antes/Depois com alto impacto', margin + 4, currentY + 13);
    doc.text('• Experiência, cuidado e resultado por detrás de cada transformação', margin + 4, currentY + 18);
    doc.text('• Dicas de cuidados e rotinas para criar confiança', margin + 4, currentY + 23);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('Foco: Visibilidade · Confiança · Marcações', margin + 4, currentY + 30);

    // Pillar 2 Box (Loja de Roupa)
    const col2X = margin + colW + 6;
    doc.setFillColor(cHighlightBg[0], cHighlightBg[1], cHighlightBg[2]);
    doc.roundedRect(col2X, currentY, colW, 36, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('Negócio 02 · Moda & Vestuário', col2X + 4, currentY + 7);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text('• Apresentação de novas coleções e reposições', col2X + 4, currentY + 13);
    doc.text('• Estilo, combinações de looks e destaque das peças', col2X + 4, currentY + 18);
    doc.text('• Criação de desejo e dinamização de promoções', col2X + 4, currentY + 23);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('Foco: Desejo · Visitas à Loja · Vendas', col2X + 4, currentY + 30);

    // Section 2: Pricing Plans
    currentY += 43;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('2. Propostas de Investimento Mensal (Gestão de Ambos os Negócios)', margin, currentY);

    currentY += 5;
    const planW = (contentWidth - 8) / 3;

    proposalData.plans.forEach((plan, pIdx) => {
      const planX = margin + pIdx * (planW + 4);
      const isRec = plan.recommended;

      doc.setFillColor(isRec ? 252 : 255, isRec ? 250 : 255, isRec ? 245 : 255);
      doc.setDrawColor(isRec ? 28 : 220, isRec ? 25 : 218, isRec ? 23 : 212);
      doc.setLineWidth(isRec ? 0.6 : 0.2);
      doc.roundedRect(planX, currentY, planW, 110, 3, 3, 'FD');

      // Plan Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      doc.text(plan.name, planX + 4, currentY + 8);

      if (isRec) {
        doc.setFillColor(28, 25, 23);
        doc.roundedRect(planX + planW - 25, currentY + 3, 21, 5, 1, 1, 'F');
        doc.setFontSize(6);
        doc.setTextColor(255, 255, 255);
        doc.text('RECOMENDADO', planX + planW - 14.5, currentY + 6.5, { align: 'center' });
      }

      // Price
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      doc.text(`${plan.price} €`, planX + 4, currentY + 18);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(cGray[0], cGray[1], cGray[2]);
      doc.text('/ mês', planX + 28, currentY + 18);

      // Tagline
      doc.setFontSize(7.5);
      doc.setTextColor(cGray[0], cGray[1], cGray[2]);
      const splitTag = doc.splitTextToSize(plan.tagline, planW - 8);
      doc.text(splitTag, planX + 4, currentY + 24);

      // Volume box
      doc.setFillColor(cLightBg[0], cLightBg[1], cLightBg[2]);
      doc.roundedRect(planX + 3, currentY + 33, planW - 6, 17, 1.5, 1.5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      doc.text(`• ${plan.postsPerMonth} Posts no Feed / mês`, planX + 5, currentY + 38);
      doc.text(`• ${plan.reelsPerMonth} Reels / mês`, planX + 5, currentY + 43);
      doc.text(`• ${plan.storiesPerMonth} Stories / mês`, planX + 5, currentY + 48);

      // Included features
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      let fY = currentY + 56;
      plan.features.forEach((feat) => {
        const splitFeat = doc.splitTextToSize(`✓ ${feat}`, planW - 8);
        doc.text(splitFeat, planX + 4, fY);
        fY += (splitFeat.length * 3.5) + 1;
      });
    });

    // Page 1 Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text(`Proposta Comercial · Patrícia Ferreira | Freelancer · Página 1 de 2`, margin, pageHeight - 8);

    // ==========================================
    // PAGE 2: WORKFLOW, CONDITIONS & CONTACTS
    // ==========================================
    doc.addPage();

    // Top Header Banner Line
    doc.setDrawColor(cDark[0], cDark[1], cDark[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, margin + 2, margin + contentWidth, margin + 2);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text(`PROPOSTA COMERCIAL · ${proposalData.year}`, margin, margin + 8);
    doc.text('METODOLOGIA, CONDIÇÕES & CONTACTOS', margin + contentWidth, margin + 8, { align: 'right' });

    currentY = margin + 16;

    // Section 3: Workflow 4 steps
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('3. Metodologia & Fluxo de Trabalho Mensal', margin, currentY);

    currentY += 5;
    const stepW = (contentWidth - 9) / 4;

    proposalData.workflow.forEach((step, sIdx) => {
      const sX = margin + sIdx * (stepW + 3);
      doc.setFillColor(cLightBg[0], cLightBg[1], cLightBg[2]);
      doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
      doc.roundedRect(sX, currentY, stepW, 36, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      doc.text(`${step.stepNumber} · ${step.title}`, sX + 3, currentY + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(cGray[0], cGray[1], cGray[2]);
      const splitDesc = doc.splitTextToSize(step.description, stepW - 6);
      doc.text(splitDesc, sX + 3, currentY + 12);
    });

    // Section 4: Operating Conditions
    currentY += 44;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('4. Condições de Prestação do Serviço', margin, currentY);

    currentY += 5;
    const condColW = (contentWidth - 6) / 2;

    const conditionsList = [
      {
        title: 'Horário de Comunicação & Acompanhamento',
        desc: 'Segunda a sexta-feira, das 21h30 às 23h30. Destinado ao esclarecimento de dúvidas, aprovação de materiais e alinhamento do projeto. Não há prestação de serviço aos fins de semana.',
      },
      {
        title: 'Regime Remoto & Captação',
        desc: 'Serviço prestado exclusivamente em regime remoto. Não inclui deslocações ou filmagem profissional presencial no estabelecimento.',
      },
      {
        title: 'Materiais & Produção de Reels',
        desc: 'Fotografias e vídeos base fornecidos pela cliente Tatiana Santos. Edição, montagem criativa, adaptação a formato vertical, textos e hashtags incluídos.',
      },
      {
        title: 'Aprovação & Alterações',
        desc: 'Todos os conteúdos são aprovados antes do agendamento. Cada conteúdo inclui 1 ronda de alterações.',
      },
    ];

    conditionsList.forEach((c, cIdx) => {
      const cRow = Math.floor(cIdx / 2);
      const cCol = cIdx % 2;
      const cX = margin + cCol * (condColW + 6);
      const cY = currentY + cRow * 32;

      doc.setFillColor(cHighlightBg[0], cHighlightBg[1], cHighlightBg[2]);
      doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
      doc.roundedRect(cX, cY, condColW, 28, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      doc.text(c.title, cX + 4, cY + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(cGray[0], cGray[1], cGray[2]);
      const splitText = doc.splitTextToSize(c.desc, condColW - 8);
      doc.text(splitText, cX + 4, cY + 12);
    });

    // Section 5: Cross-Content Sinergy highlight
    currentY += 72;
    doc.setFillColor(cLightBg[0], cLightBg[1], cLightBg[2]);
    doc.setDrawColor(cCardBorder[0], cCardBorder[1], cCardBorder[2]);
    doc.roundedRect(margin, currentY, contentWidth, 24, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text('Sinergia Estratégica: 1 Espaço · 2 Marcas', margin + 5, currentY + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    const sinergyText =
      'Aproveitamento de momentos no espaço (ex: look completo após transformação de cabelo) para produzir conteúdos conjuntos que alimentam ambas as contas, maximizando o retorno e valorizando a conveniência do local.';
    doc.text(doc.splitTextToSize(sinergyText, contentWidth - 10), margin + 5, currentY + 13);

    // Section 6: Next Steps & Direct Contacts Box
    currentY += 30;
    doc.setFillColor(28, 25, 23);
    doc.roundedRect(margin, currentY, contentWidth, 34, 3, 3, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text('Próximos Passos & Contactos', margin + 6, currentY + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(220, 220, 220);
    doc.text('Para adjudicar qualquer uma das propostas ou esclarecer questões adicionais:', margin + 6, currentY + 14);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(`Email: ${proposalData.email}`, margin + 6, currentY + 22);
    doc.text(`Telefone: ${proposalData.phone}`, margin + (contentWidth / 3), currentY + 22);
    doc.text(`Instagram: @patriciaferreira_19`, margin + (contentWidth * 0.65), currentY + 22);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(180, 180, 180);
    doc.text(`Horário de atendimento: Seg a Sex · 21h30 às 23h30`, margin + 6, currentY + 29);

    // Page 2 Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text(`Proposta Comercial · Patrícia Ferreira | Freelancer · Página 2 de 2 · Validade: ${proposalData.validityDays} dias`, margin, pageHeight - 8);

    return doc;
  };

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    setStatusMessage('A gerar documento PDF em alta definição...');

    try {
      // First attempt: generate pure vector PDF directly (guaranteed never blank, ultra-crisp, selectable text)
      const doc = generateVectorPdf();
      doc.save(`Proposta_Comercial_Redes_Sociais_${proposalData.year}.pdf`);
      setStatusMessage('Download concluído com sucesso!');
      setTimeout(() => {
        setIsGenerating(false);
        setStatusMessage('');
      }, 1500);
    } catch (err) {
      console.error('PDF error, attempting fallback:', err);
      // Fallback: window.print
      window.print();
      setIsGenerating(false);
      setStatusMessage('');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="bg-[#faf8f5] border border-stone-300 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Descarregar Proposta Comercial em PDF
              </h3>
              <p className="text-xs text-stone-600">
                Documento de alta resolução com os 3 planos, metodologia e condições
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-600 hover:text-stone-900 p-2 rounded-xl bg-stone-100 border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="text-xs text-stone-700 flex items-center gap-2">
            {isGenerating ? (
              <span className="text-stone-900 font-mono font-medium animate-pulse">{statusMessage}</span>
            ) : (
              <span className="flex items-center gap-1.5 text-stone-600 font-mono text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Formatado em A4 · Pronto para envio e arquivo
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 px-4 py-2 rounded-xl transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="flex items-center space-x-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white px-5 py-2 rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'A descarregar...' : 'Descarregar PDF'}</span>
            </button>
          </div>
        </div>

        {/* PDF Preview Area */}
        <div className="overflow-y-auto rounded-2xl border border-stone-300 bg-stone-100 p-4 sm:p-6 text-stone-900 shadow-inner flex-1 print-document-container">
          
          {/* Visual Document Layout Preview */}
          <div ref={printRef} className="space-y-6 max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 font-sans text-stone-900 leading-normal shadow-sm">
            
            {/* Header */}
            <div className="border-b-2 border-stone-900 pb-5 flex justify-between items-start gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 font-medium block mb-1">
                  PROPOSTA COMERCIAL · {proposalData.year}
                </span>
                <h1 className="text-2xl font-bold font-serif text-stone-950">
                  Gestão de Redes Sociais
                </h1>
                <p className="text-xs text-stone-600 mt-1 max-w-md leading-relaxed">
                  Uma estratégia digital pensada para dar visibilidade, consistência e personalidade aos seus dois negócios.
                </p>
              </div>

              <div className="text-right text-xs shrink-0">
                <span className="font-bold text-stone-950 block text-sm">{proposalData.brandName}</span>
                <span className="text-stone-600 font-mono text-[10px] block">{proposalData.email}</span>
                <div className="mt-2 inline-block px-2.5 py-0.5 rounded bg-stone-100 text-[10px] font-mono font-medium text-stone-800 border border-stone-300">
                  Validade: {proposalData.validityDays} dias
                </div>
              </div>
            </div>

            {/* Target Client & Businesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 font-medium block">Proposta Elaborada Para:</span>
                <span className="font-bold text-stone-900 text-sm block mt-0.5">{proposalData.clientNamePlaceholder}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 font-medium block">Negócios Abrangidos:</span>
                <span className="font-semibold text-stone-900 block mt-0.5 leading-snug">
                  1. {proposalData.hairSalonNamePlaceholder} (Cabeleireiro)<br />
                  2. {proposalData.fashionStoreNamePlaceholder} (Loja de Roupa)
                </span>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] p-3.5 rounded-xl bg-white border border-stone-200">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-stone-500 font-semibold block flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-stone-700" />
                  Negócio 01 · Cabeleireiro
                </span>
                <p className="text-stone-700"><strong>Foco Central:</strong> Visibilidade · Confiança · Marcações</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-stone-500 font-semibold block flex items-center gap-1.5">
                  <Shirt className="w-3.5 h-3.5 text-stone-700" />
                  Negócio 02 · Loja de Roupa
                </span>
                <p className="text-stone-700"><strong>Foco Central:</strong> Desejo · Visitas à Loja · Vendas</p>
              </div>
            </div>

            {/* 3 Proposals Overview */}
            <div className="space-y-3 page-break-inside-avoid">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
                Propostas de Investimento
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {proposalData.plans.map((p) => (
                  <div
                    key={p.id}
                    className={`p-3.5 rounded-xl border text-xs flex flex-col justify-between ${
                      p.recommended
                        ? 'border-stone-900 bg-stone-50/80 ring-1 ring-stone-900'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center gap-1">
                        <span className="font-bold text-stone-950 text-xs">{p.name}</span>
                        {p.recommended && (
                          <span className="text-[8px] font-mono uppercase bg-stone-900 text-white px-1.5 py-0.5 rounded font-bold shrink-0">
                            Recomendada
                          </span>
                        )}
                      </div>
                      <div className="text-base font-bold text-stone-900">
                        {p.price} € <span className="text-[10px] font-normal text-stone-500">/mês</span>
                      </div>
                      <p className="text-[10px] text-stone-600 leading-snug">
                        {p.tagline}
                      </p>
                      
                      <div className="pt-2 border-t border-stone-200 text-[10px] text-stone-700 space-y-0.5 font-mono">
                        <div>• {p.postsPerMonth} publicações/mês</div>
                        <div>• {p.reelsPerMonth} Reels/mês</div>
                        <div>• {p.storiesPerMonth} Stories/mês</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="space-y-2 page-break-inside-avoid">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
                Funcionamento & Metodologia
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                {proposalData.workflow.map((w) => (
                  <div key={w.stepNumber} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                    <span className="font-mono font-bold text-stone-900 block">{w.stepNumber} · {w.title}</span>
                    <p className="text-stone-600 leading-snug">{w.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions & Work Terms */}
            <div className="space-y-2 page-break-inside-avoid">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
                Condições de Prestação do Serviço
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[10px] text-stone-700 leading-snug">
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">Horário de Comunicação:</span>
                  <p>Segunda a sexta-feira, das 21h30 às 23h30. Sem prestação aos fins de semana.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">Regime & Deslocações:</span>
                  <p>Exclusivamente remoto. Não inclui deslocações ou captação presencial no espaço.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">Materiais & Conteúdos:</span>
                  <p>Fotografias e vídeos fornecidos pela cliente Tatiana Santos. Edição e montagem incluídas.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 block">Alterações & Anúncios:</span>
                  <p>1 ronda de alterações por conteúdo incluída. Aprovação antes da publicação.</p>
                </div>
              </div>
            </div>

            {/* Footer / Contacts */}
            <div className="pt-3 border-t-2 border-stone-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] text-stone-600">
              <div>
                <strong>Contacto:</strong> {proposalData.email} | {proposalData.phone} | Instagram: @patriciaferreira_19
              </div>
              <div className="font-mono">
                Proposta Exclusiva para Tatiana Santos · {proposalData.year}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
