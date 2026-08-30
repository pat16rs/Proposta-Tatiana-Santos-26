# Proposta Comercial Privada · Gestão de Redes Sociais

Aplicação web premium, moderna e responsiva para apresentação de **proposta comercial privada de gestão de redes sociais** para dois negócios geridos no mesmo espaço (Cabeleireiro + Loja de Roupa).

O projeto foi construído com **React, TypeScript, Express, Tailwind CSS e Vite**, com design editorial de alta sofisticação e exportação de PDF de alta fidelidade.

---

## 🔒 1. Segurança & Privacidade

* **Acesso por Password**: Protegido por autenticação com password configurável via variável de ambiente (`PROPOSAL_PASSWORD`).
* **Sessão Segura**: Gestão de sessão por cookie seguro `HTTP-only`.
* **Indexação Bloqueada**: Cabeçalho `X-Robots-Tag: noindex, nofollow, noarchive` e meta tags `noindex, nofollow, noarchive` para garantir total privacidade nos motores de pesquisa.

---

## 🚀 2. Instalação e Execução Local

### Pré-requisitos
* Node.js 18+ ou 20+
* npm ou yarn / pnpm

### Passos

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**:
   Crie o ficheiro `.env` ou `.env.local` na raiz do projeto baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```

   Defina a password de acesso desejada:
   ```env
   PROPOSAL_PASSWORD="a-sua-password-segura"
   ```

3. **Executar em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
   A aplicação ficará disponível em `http://localhost:3000`.

4. **Compilar para produção**:
   ```bash
   npm run build
   ```

5. **Iniciar em modo de produção**:
   ```bash
   npm start
   ```

---

## 🌐 3. Deployment na Vercel

Esta aplicação está pronta para deployment direto na **Vercel**:

1. Faça push do repositório para o seu GitHub / GitLab / Bitbucket.
2. No painel da **Vercel**, clique em **Add New Project** e selecione o repositório.
3. Nas configurações de **Environment Variables** do projeto na Vercel:
   * Chave: `PROPOSAL_PASSWORD`
   * Valor: `a-sua-password-secreta`
4. Clique em **Deploy**.
5. Partilhe o link privado com o seu cliente junto com a password de acesso.

---

## ✏️ 4. Como Alterar os Dados da Proposta

Todos os textos, placeholders, preços, condições e contactos estão centralizados num único ficheiro:

📁 `src/config/proposal.ts`

Pode editar diretamente os seguintes campos:
* `professionalName` / `brandName`: Nome ou marca da profissional de comunicação.
* `email` e `phone`: Os seus contactos diretos.
* `clientNamePlaceholder`: Nome do cliente destinatário da proposta.
* `hairSalonNamePlaceholder`: Nome do salão de cabeleireiro.
* `fashionStoreNamePlaceholder`: Nome da loja de roupa.
* `validityDays`: Período de validade da proposta (padrão: 15 dias).
* `plans`: Preços e entregáveis dos 3 planos (Essencial: 350€, Profissional: 550€, Premium: 650€).
* `workSchedule`: Horário de atendimento e acompanhamento (Segunda a Sexta, 21:30 às 23:30).
* `conditions`: Condições de prestação (regime remoto, materiais fornecidos, 1 ronda de alterações, Meta Ads não incluído).
* `faqs`: Perguntas frequentes e respostas.

---

## 📄 5. Geração e Download de PDF

A aplicação inclui um gerador de PDF integrado:
* Botão **"Descarregar PDF"** na barra de navegação superior e no modal dedicado.
* Gera um documento A4 limpo, sem botões ou elementos interativos desnecessários, preservando a hierarquia visual e tipografia.
* Suporta também impressão nativa (`Ctrl+P` / `Cmd+P` ou botão "Imprimir via Navegador").

---

## 📐 6. Estrutura do Projeto

```
├── server.ts                    # Servidor Express com autenticação, headers de privacidade e middleware Vite
├── src/
│   ├── config/
│   │   └── proposal.ts          # Configuração centralizada de textos, preços e dados
│   ├── components/
│   │   ├── Authentication.tsx   # Ecrã de login privado por password
│   │   ├── HeaderNav.tsx        # Barra de navegação com ações e logout
│   │   ├── Hero.tsx             # Secção de topo com identificação do cliente e proposta
│   │   ├── BusinessCards.tsx    # "Uma estratégia. Dois negócios."
│   │   ├── Services.tsx         # Âmbito de atuação (13 serviços detalhados)
│   │   ├── Pricing.tsx          # 3 Planos (Essencial, Profissional [Recomendado], Premium)
│   │   ├── CrossContent.tsx     # Estratégia de conteúdo cruzado
│   │   ├── Workflow.tsx         # Dinâmica mensal em 4 etapas
│   │   ├── Conditions.tsx       # Condições de prestação e horário visual
│   │   ├── FAQ.tsx              # Perguntas frequentes com accordions
│   │   ├── CTA.tsx              # Apelo à ação final com seleção de planos
│   │   ├── ContactForm.tsx      # Formulário de formalização e contacto
│   │   ├── PdfExport.tsx        # Modal e motor de exportação para PDF
│   │   └── Footer.tsx           # Rodapé elegante e confidencial
│   ├── types.ts                 # Tipos e interfaces TypeScript
│   ├── App.tsx                  # Componente principal e orquestração de estados
│   ├── main.tsx                 # Ponto de entrada React
│   └── index.css                # Estilos globais e regras de impressão (@media print)
├── .env.example                 # Exemplo de variáveis de ambiente
└── metadata.json                # Metadados da aplicação
```
