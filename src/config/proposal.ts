import { ProposalConfig } from '../types';

export const proposalData: ProposalConfig = {
  professionalName: 'Patrícia Ferreira | Freelancer',
  brandName: 'Patrícia Ferreira | Freelancer',
  email: 'patricia.digitalstudio@gmail.com',
  phone: '+351 961100881',
  instagram: 'https://www.instagram.com/patriciaferreira_19',
  instagramHandle: '@patriciaferreira_19',
  clientNamePlaceholder: 'Tatiana Santos',
  hairSalonNamePlaceholder: 'Cabeleireiro Tatiana Santos',
  fashionStoreNamePlaceholder: 'Je t’aime boutique',
  year: 2026,
  validityDays: 30,

  workSchedule: {
    days: 'SEG — SEX',
    hours: '21h00 - 23h30',
    mode: 'REMOTO',
    note: 'A comunicação e o acompanhamento do projeto serão feitos dentro do horário definido, mantendo sempre alguma flexibilidade para pequenos ajustes quando necessário, de acordo com a disponibilidade de ambas as partes.',
  },

  plans: [
    {
      id: 'essencial',
      name: 'Proposta Essencial',
      tagline: 'Presença digital regular e profissional.',
      price: 350,
      currency: '€',
      period: 'mês',
      postsPerMonth: 12,
      reelsPerMonth: 4,
      storiesPerMonth: 12,
      deliverables: [
        '12 publicações / mês',
        '4 Reels / mês',
        '12 Stories / mês',
      ],
      features: [
        'Estratégia de comunicação',
        'Planeamento editorial mensal',
        'Copywriting',
        'Design gráfico e composição dos conteúdos',
        'Edição dos materiais disponibilizados',
        'Seleção estratégica de hashtags',
        'Agendamento e publicação dos conteúdos',
        'Gestão de comentários e mensagens',
        'Relatório mensal com os principais resultados',
      ],
    },
    {
      id: 'profissional',
      name: 'Proposta Profissional',
      tagline: 'Gestão estratégica e consistente dos dois negócios.',
      price: 550,
      currency: '€',
      period: 'mês',
      recommended: true,
      badge: 'RECOMENDADO',
      postsPerMonth: 16,
      reelsPerMonth: 8,
      storiesPerMonth: 24,
      deliverables: [
        '16 publicações / mês',
        '8 Reels / mês',
        '24 Stories / mês',
      ],
      features: [
        'Tudo o que está incluído na Proposta Essencial',
        'Estratégia de conteúdos diferenciada para cada negócio',
        'Pilares de conteúdo definidos para cada área',
        'Pesquisa de tendências e temas relevantes',
        'Planeamento de conteúdos sazonais',
        'Edição e adaptação de vídeos para Reels',
        'Stories estratégicos para interação e conversão',
        'Conteúdos orientados para marcações e vendas',
        'Otimização de hashtags',
        'Análise mensal de resultados',
        'Recomendações estratégicas para o mês seguinte',
        'Relatório mensal com métricas e evolução',
      ],
    },
  ],

  services: [
    {
      id: 'estrategia',
      title: 'Estratégia & Posicionamento',
      description: 'Definição de linhas editoriais, tom de voz e pilares de comunicação para valorizar cada negócio.',
      category: 'strategy',
      icon: 'Compass',
    },
    {
      id: 'planeamento',
      title: 'Planeamento Editorial',
      description: 'Calendário mensal estruturado com antecedência, combinando temas, formatos e sazonalidade.',
      category: 'strategy',
      icon: 'Calendar',
    },
    {
      id: 'criacao',
      title: 'Criação de Conteúdo',
      description: 'Tratamento e composição dos materiais disponibilizados, transformando-os em conteúdos visuais apelativos e profissionais.',
      category: 'content',
      icon: 'Sparkles',
    },
    {
      id: 'design',
      title: 'Design Editorial',
      description: 'Uma linguagem visual coerente, que respeita a identidade de cada marca e cria harmonia entre ambas.',
      category: 'content',
      icon: 'Palette',
    },
    {
      id: 'reels',
      title: 'Edição de Vídeo',
      description: 'Vídeos dinâmicos, com ritmo, transições fluidas, legendas apelativas e áudios em tendência.',
      category: 'content',
      icon: 'Video',
    },
    {
      id: 'stories',
      title: 'Stories Interativos',
      description: 'Stories estratégicos para gerar interação, aproximar a comunidade e destacar serviços, bastidores e produtos.',
      category: 'content',
      icon: 'Flame',
    },
    {
      id: 'copywriting',
      title: 'Copywriting & Textos',
      description: 'Textos que comunicam com intenção, despertam interesse e conduzem à ação, incentivando marcações, visitas e interação com a marca.',
      category: 'content',
      icon: 'PenTool',
    },
    {
      id: 'hashtags',
      title: 'Hashtags Estratégicas',
      description: 'Pesquisa e seleção estratégica de hashtags.',
      category: 'distribution',
      icon: 'Hash',
    },
    {
      id: 'agendamento',
      title: 'Agendamento & Publicação',
      description: 'Agendamento e publicação dos conteúdos.',
      category: 'distribution',
      icon: 'Clock',
    },
    {
      id: 'comentarios',
      title: 'Gestão de Comentários',
      description: 'Gestão de comentários e mensagens.',
      category: 'distribution',
      icon: 'MessageCircle',
    },
    {
      id: 'metricas',
      title: 'Análise de Métricas',
      description: 'Análise dos principais resultados para identificar o que funciona e otimizar continuamente a estratégia.',
      category: 'analytics',
      icon: 'BarChart3',
    },
    {
      id: 'relatorios',
      title: 'Relatórios Mensais',
      description: 'Resumo dos resultados alcançados e da evolução de cada mês.',
      category: 'analytics',
      icon: 'FileText',
    },
    {
      id: 'otimizacao',
      title: 'Otimização Contínua',
      description: 'Otimização contínua da estratégia, orientada pelos conteúdos e formatos que melhor envolvem e convertem as audiências de ambos os negócios.',
      category: 'strategy',
      icon: 'TrendingUp',
    },
  ],

  workflow: [
    {
      stepNumber: '01',
      title: 'Planeamento',
      description: 'Definição dos temas, formatos e calendário editorial mensal.',
      details: [
        'Análise de sazonalidade e datas comemorativas',
        'Mapeamento de produtos em destaque na loja e serviços no salão',
        'Apresentação da grelha de publicações mensal',
      ],
      badge: 'Semana 1',
    },
    {
      stepNumber: '02',
      title: 'Produção',
      description: 'O cliente disponibiliza fotografias, vídeos, novidades, promoções, informações dos serviços e restantes materiais necessários. Os conteúdos são posteriormente preparados e editados.',
      details: [
        'Envio de materiais pelo cliente via pasta partilhada',
        'Edição gráfica, tratamento de imagem e montagem de vídeos/Reels',
      ],
      badge: 'Semana 2',
    },
    {
      stepNumber: '03',
      title: 'Aprovação',
      description: 'Todos os conteúdos são enviados para aprovação antes do agendamento.',
      details: [
        'Acesso antecipado aos posts para revisão',
        'Inclui 1 ronda de alterações por conteúdo',
        'Aprovação dos conteúdos antes do agendamento',
      ],
      badge: '1 Ronda Incluída',
    },
    {
      stepNumber: '04',
      title: 'Publicação + Análise',
      description: 'Os conteúdos são agendados e publicados. Os resultados são acompanhados e utilizados para otimizar o mês seguinte.',
      details: [
        'Publicação autónoma nos melhores horários',
        'Acompanhamento do engagement e interações',
        'Emissão de relatório e recomendações para o ciclo seguinte',
      ],
      badge: 'Contínuo',
    },
  ],

  crossContent: [
    {
      title: 'Novo cabelo + novo look',
      concept: 'Uma experiência completa de styling no mesmo espaço.',
      hairAngle: 'Destaque do corte/coloração, brilho e movimento do cabelo.',
      fashionAngle: 'Outfit selecionado na loja que complementa na perfeição o novo visual.',
      format: 'Reel de Transformação + Carrossel de Detalhes',
    },
    {
      title: 'Look completo para esta estação',
      concept: 'Apresentar as tendências sazonais de cabelo e vestuário lado a lado.',
      hairAngle: 'Penteados e tons que marcam a nova estação.',
      fashionAngle: 'Peças-chave, tecidos e novidades recém-chegadas à loja.',
      format: 'Carrossel Editorial + Stories Diários',
    },
    {
      title: 'Do cabelo ao outfit',
      concept: 'Narrativa visual de preparação para ocasiões especiais (eventos, jantares, dia a dia).',
      hairAngle: 'Penteado com finalização profissional.',
      fashionAngle: 'Sugestões de styling e acessórios disponíveis no espaço.',
      format: 'Reel Dinâmico de "Get Ready With Us"',
    },
    {
      title: 'Transformação completa',
      concept: 'Valorizar a conveniência única de sair do espaço com imagem renovada da cabeça aos pés.',
      hairAngle: 'Antes & Depois de cabelo com foco no resultado e saúde capilar.',
      fashionAngle: 'Combinação elegante de peças que elevam a auto-estima da cliente.',
      format: 'Vídeo Vertical de Alto Impacto',
    },
  ],

  conditions: [
    {
      id: 'horario',
      title: 'Horário de Comunicação',
      content: [
        'O serviço e a comunicação direta com o cliente são realizados idealmente de segunda a sexta-feira, entre as 21h00 e as 23h30.',
        'O período das 21h00 às 23h30 destina-se ao acompanhamento do projeto, esclarecimento de questões, aprovação de conteúdos e restantes comunicações relacionadas com a gestão das redes sociais.',
        'As mensagens e comentários serão acompanhados e respondidos de acordo com a minha disponibilidade, procurando garantir uma resposta atempada e consistente.',
      ],
      importantNotice: 'Disponibilidade estruturada para garantir acompanhamento focado e organizado.',
    },
    {
      id: 'remoto',
      title: 'Serviço Remoto',
      content: [
        'O serviço é prestado em regime remoto.',
      ],
    },
    {
      id: 'materiais',
      title: 'Materiais & Conteúdos Base',
      content: [
        'Fotografias, vídeos e restantes materiais necessários à criação dos conteúdos serão fornecidos pelo cliente.',
        'A edição, adaptação, tratamento e preparação dos materiais fornecidos estão incluídos de acordo com o plano escolhido.',
      ],
    },
    {
      id: 'captacao',
      title: 'Captação Presencial',
      content: [
        'A proposta não inclui deslocações, sessões fotográficas ou captação presencial de fotografia e vídeo.',
      ],
    },
    {
      id: 'reels',
      title: 'Produção de Reels',
      content: [
        'A edição, montagem, tratamento, adaptação para formato vertical, copy e preparação para publicação estão incluídos.',
        'Não está incluída a captação presencial de vídeo.',
      ],
      importantNotice: 'Os conteúdos são desenvolvidos com base nos materiais disponibilizados, como fotografias, vídeos, informações sobre serviços, produtos e novidades.',
    },
    {
      id: 'alteracoes',
      title: 'Rondas de Alterações',
      content: [
        'Cada conteúdo inclui uma ronda de alterações.',
        'Alterações adicionais ou reformulação completa de conteúdos poderão ser consideradas serviços adicionais.',
      ],
    },
    {
      id: 'urgentes',
      title: 'Pedidos Urgentes',
      content: [
        'Pedidos urgentes ou conteúdos solicitados fora do calendário editorial poderão ser considerados serviços adicionais, dependendo da disponibilidade.',
      ],
    },
    {
      id: 'anuncios',
      title: 'Publicidade Paga (Meta Ads)',
      content: [
        'A gestão de campanhas Meta Ads e o respetivo investimento publicitário não estão incluídos nos planos apresentados.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Tenho de fornecer fotografias e vídeos?',
      answer: 'Sim. Os materiais necessários são fornecidos pelo cliente. A edição e adaptação estão incluídas de acordo com o plano escolhido.',
    },
    {
      question: 'Existe trabalho ao fim de semana?',
      answer: 'Não. O serviço é prestado de segunda a sexta-feira, entre as 21h30 e as 23h30.',
    },
    {
      question: 'Fazem deslocações ao estabelecimento?',
      answer: 'Não. O serviço é exclusivamente remoto.',
    },
    {
      question: 'Posso pedir alterações?',
      answer: 'Sim. Cada conteúdo inclui uma ronda de alterações.',
    },
    {
      question: 'Está incluída publicidade paga?',
      answer: 'Não. Meta Ads é um serviço separado e o investimento publicitário é suportado diretamente pelo cliente.',
    },
    {
      question: 'Posso pedir um conteúdo urgente?',
      answer: 'Pedidos fora do calendário serão avaliados de acordo com a disponibilidade e poderão representar um serviço adicional.',
    },
    {
      question: 'Quem fornece os vídeos para os Reels?',
      answer: 'O cliente fornece os vídeos/fotografias. A edição e preparação do Reel estão incluídas de acordo com o plano.',
    },
  ],
};
