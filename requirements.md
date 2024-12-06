# Requisitos Funcionais para um CRM Básico

## 1. Gerenciamento de Usuários
- [ ] **Cadastro de Usuários:** Permitir o cadastro de novos usuários, incluindo campos obrigatórios como nome, e-mail, senha e papel (admin, usuário comum).
- [ ] **Autenticação:** Implementar login e logout seguro com validação de credenciais.
- [ ] **Gerenciamento de Perfis:** Permitir que usuários editem informações do perfil, como nome, e-mail e foto de perfil.
- [ ] **Recuperação de Senha:** Implementar funcionalidade para recuperação de senha via e-mail.

## 2. Gerenciamento de Contatos
- [ ] **Adicionar Contatos:** Permitir o cadastro de contatos com campos como nome, e-mail, telefone, endereço, e empresa associada.
- [ ] **Editar Contatos:** Habilitar a edição de informações de contatos já cadastrados.
- [ ] **Excluir Contatos:** Implementar funcionalidade para exclusão de contatos.
- [ ] **Listagem de Contatos:** Exibir uma lista paginada de contatos com opção de busca e filtros.
- [ ] **Detalhes do Contato:** Exibir informações detalhadas ao selecionar um contato.

## 3. Gerenciamento de Empresas
- [ ] **Adicionar Empresas:** Permitir o cadastro de empresas com campos como nome, CNPJ, endereço e telefone.
- [ ] **Editar Empresas:** Permitir edição de informações de empresas já cadastradas.
- [ ] **Excluir Empresas:** Implementar funcionalidade para exclusão de empresas.
- [ ] **Relacionamento com Contatos:** Associar contatos a empresas específicas.

## 4. Pipeline de Vendas
- [ ] **Gerenciar Oportunidades:** Criar, editar e excluir oportunidades de vendas.
- [ ] **Fases do Pipeline:** Implementar fases como "Prospecção", "Qualificação", "Proposta" e "Fechamento".
- [ ] **Arrastar e Soltar:** Permitir movimentação de oportunidades entre fases com drag-and-drop.
- [ ] **Filtro por Status:** Habilitar filtros para exibir oportunidades por fase ou status.

## 5. Gerenciamento de Atividades
- [ ] **Criar Atividades:** Permitir criação de tarefas associadas a contatos ou oportunidades.
- [ ] **Editar Atividades:** Habilitar edição de tarefas existentes.
- [ ] **Excluir Atividades:** Implementar funcionalidade para exclusão de tarefas.
- [ ] **Visualização de Atividades:** Exibir uma lista de tarefas pendentes com filtros por data e prioridade.
- [ ] **Notificações:** Enviar lembretes de atividades por e-mail ou dentro do sistema.

## 6. Relatórios e Análises
- [ ] **Relatório de Vendas:** Gerar relatórios básicos com informações como total de vendas por período, por empresa ou por contato.
- [ ] **Dashboard:** Criar um dashboard com gráficos que mostrem métricas como leads capturados, oportunidades abertas, e taxas de conversão.
- [ ] **Exportação de Dados:** Permitir exportação de relatórios em formatos como CSV ou PDF.

## 7. Configurações Gerais
- [ ] **Configurações de Perfil:** Permitir alteração de senha, idioma e preferências de notificação.
- [ ] **Gerenciamento de Permissões:** Definir permissões de acesso baseadas em papéis (ex.: admin pode acessar tudo, usuário comum tem acesso limitado).
- [ ] **Integrações:** Configurar integrações básicas com ferramentas externas como e-mail e calendários.

## 8. Funcionalidades Extras
- [ ] **Busca Global:** Implementar uma barra de busca global para encontrar contatos, empresas ou oportunidades rapidamente.
- [ ] **Histórico de Interações:** Exibir um histórico de interações com contatos ou empresas.
- [ ] **Importação de Dados:** Permitir importação de contatos e empresas via planilhas CSV.
- [ ] **Suporte a Multitenancy:** Habilitar uso de múltiplos clientes no mesmo sistema com isolamento de dados.

## 9. Interface do Usuário
- [ ] **Design Responsivo:** Garantir que o sistema funcione em dispositivos móveis e desktops.
- [ ] **Navegação Intuitiva:** Criar um menu lateral ou barra de navegação para acesso fácil a todas as funcionalidades.
- [ ] **Feedback Visual:** Mostrar mensagens de erro, sucesso e carregamento para melhorar a experiência do usuário.

## 10. Segurança
- [ ] **Proteção contra XSS e CSRF:** Implementar proteção contra ataques comuns de segurança.
- [ ] **Validação de Dados:** Garantir validação no front-end e no back-end.
- [ ] **HTTPS:** Garantir que todas as comunicações sejam feitas por meio de conexões seguras.
- [ ] **Autenticação JWT:** Implementar autenticação usando tokens JWT.


estrutura de pastas

src/
├── components/
│   ├── Auth/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── ResetPasswordForm.jsx
│   ├── Contacts/
│   │   ├── ContactCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── ContactList.jsx
│   ├── Companies/
│   │   ├── CompanyCard.jsx
│   │   ├── CompanyForm.jsx
│   │   └── CompanyList.jsx
│   ├── Dashboard/
│   │   ├── SalesChart.jsx
│   │   ├── PipelineOverview.jsx
│   │   └── MetricsWidget.jsx
│   ├── Pipeline/
│   │   ├── OpportunityCard.jsx
│   │   └── PipelineBoard.jsx
│   ├── Activities/
│   │   ├── ActivityForm.jsx
│   │   ├── ActivityList.jsx
│   │   └── Notifications.jsx
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   └── Shared/
│       ├── Button.jsx
│       ├── Modal.jsx
│       ├── InputField.jsx
│       ├── AutocompleteInput.jsx
│       └── LoadingSpinner.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── ContactContext.jsx
│   └── CompanyContext.jsx
├── hooks/
│   ├── useAuth.jsx
│   ├── useContacts.jsx
│   ├── useCompanies.jsx
│   └── usePipeline.jsx
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.js
│   │   │   ├── register.js
│   │   │   └── reset-password.js
│   │   ├── contacts/
│   │   │   ├── index.js
│   │   │   └── [id].js
│   │   ├── companies/
│   │   │   ├── index.js
│   │   │   └── [id].js
│   │   ├── pipeline/
│   │   │   ├── index.js
│   │   │   └── [id].js
│   │   └── activities/
│   │       ├── index.js
│   │       └── [id].js
│   ├── auth/
│   │   ├── login.jsx
│   │   ├── register.jsx
│   │   └── reset-password.jsx
│   ├── dashboard.jsx
│   ├── contacts/
│   │   ├── index.jsx
│   │   └── [id].jsx
│   ├── companies/
│   │   ├── index.jsx
│   │   └── [id].jsx
│   ├── pipeline/
│   │   ├── index.jsx
│   │   └── [id].jsx
│   ├── activities/
│   │   ├── index.jsx
│   │   └── [id].jsx
│   └── settings.jsx
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── contactService.js
│   ├── companyService.js
│   └── pipelineService.js
├── styles/
│   ├── globals.css
│   ├── layout.css
│   └── components.css
├── utils/
│   ├── validation.js
│   ├── formatters.js
│   └── constants.js
├── App.js
├── index.js
└── next.config.js


design system

# Prompt Detalhado para Design de Dashboard

Crie um dashboard CRM com tema escuro, estilo moderno e minimalista, projetado para gerenciar leads, negócios e campanhas de forma eficiente. O design deve ser funcional, responsivo e oferecer uma experiência de usuário intuitiva.

---

## 1. Barra Lateral Esquerda
### 1.1. Estrutura do Menu
- **Visão Geral:** Resumo de todas as atividades importantes no CRM.
- **Leads:** Seção para visualizar e gerenciar potenciais clientes.
- **Negócios:** Área dedicada ao gerenciamento de oportunidades e negociações.
- **Campanhas:** Controle e monitoramento de campanhas de marketing.
- **Insights:** Análises detalhadas e relatórios sobre desempenho.
- **Contatos:** Gestão de contatos, com listagem, criação e edição.
- **Ferramentas:**
  - **Integrações:** Gerenciamento de conexões com sistemas externos.
  - **E-mail:** Visualização e envio de e-mails relacionados a negociações.
  - **Automação:** Configuração de automações para tarefas recorrentes.
- **Base de Conhecimento:** Documentação e suporte interno para uso do sistema.
- **Configurações:** Configurações do sistema e preferências de usuário.

### 1.2. Detalhes de Design
- **Tons Escuros:** Fundo preto ou cinza escuro (#1C1C1E) com texto branco ou cinza claro.
- **Ícones Modernos:** Utilizar ícones visuais ao lado dos nomes das seções.
- **Indicador Ativo:** Destaque para o item selecionado (ex.: barra lateral acesa ou realce de cor).
- **Contadores:** Exibir notificações ou números ao lado de cada seção (ex.: leads pendentes, e-mails não lidos).

---

## 2. Cabeçalho Superior
### 2.1. Elementos
- **Barra de Busca:**
  - Placeholder: "Pesquise qualquer coisa...".
  - Ícone de lupa no lado esquerdo.
  - Busca global: resultados incluem contatos, negócios e campanhas.
- **Dropdown de Filtros:**
  - Opções para filtrar por período (dia, semana, mês, ano).
  - Filtros personalizados para categorias específicas (leads, campanhas, etc.).
- **Avatar do Usuário:**
  - Exibir foto do perfil no canto superior direito.
  - Dropdown com as opções:
    - Perfil
    - Configurações
    - Sair
- **Ícone de Notificações:**
  - Indicador de notificações pendentes (ex.: círculo vermelho com número).
  - Ao clicar, abrir uma lista de notificações recentes.

---

## 3. Visão Geral do Dashboard
### 3.1. Gráfico de Tendência do Pipeline
- **Visualização:**
  - Gráfico de linhas mostrando as fases do pipeline: Propostas, Negociações.
  - Escala no eixo Y (valores monetários em milhões).
  - Meses no eixo X (com marcações de abril a outubro).
- **Interatividade:**
  - Tooltips exibindo detalhes ao passar o mouse sobre pontos do gráfico.
  - Opção para alternar entre diferentes métricas (ex.: quantidade ou valor em dinheiro).

### 3.2. Cartões de Métricas Resumidas
- **Estrutura:**
  - **Leads:** Total de leads capturados, com variação percentual em relação ao mês anterior.
  - **Reservas:** Quantidade de reservas realizadas.
  - **Previsões:** Previsão de receita futura.
  - **Negócios Fechados:** Número de negócios concluídos.
- **Design:**
  - Cada cartão possui ícones representativos.
  - Indicadores coloridos:
    - Verde para crescimento.
    - Vermelho para queda.
  - Pequena descrição comparativa (ex.: "No mês passado: 32.350").

### 3.3. Tabela de Ranking (Classificação)
- **Colunas:**
  - Nome do vendedor (com avatar).
  - E-mail.
  - Número de negócios fechados.
  - Valor total gerado.
- **Interatividade:**
  - Opção para ordenar a tabela por qualquer coluna.
  - Ícones ao lado de cada linha para visualizar detalhes ou editar.

### 3.4. Cartão de Última Negociação
- **Informações Exibidas:**
  - Nome da empresa.
  - Data esperada de fechamento.
  - Nome do proprietário do negócio (com avatar).
  - Prioridade do negócio (alta, média, baixa).
  - Valor da negociação.
  - Contatos do cliente:
    - E-mail.
    - Telefone.
  - Status atual do negócio (ex.: "Contato Realizado").
- **Design:**
  - Fundo com bordas arredondadas.
  - Divisão clara entre seções (ex.: informações principais separadas dos contatos).

---

## 4. Estilo Visual
### 4.1. Cores e Tipografia
- **Tema Escuro:** Preto (#1C1C1E) ou cinza escuro para o fundo. Branco ou cinza claro para texto (#FFFFFF ou #D1D1D1).
- **Cores de Destaque:** Tons de verde (#4CAF50) para crescimento e vermelho (#F44336) para queda.
- **Fontes Modernas:** Usar fontes como "Inter" ou "Roboto" com peso variado para hierarquia visual.

### 4.2. Responsividade
- **Mobile:** Menu lateral convertido em hambúrguer.
- **Desktop:** Menu lateral fixo com navegação fluida.

### 4.3. Microinterações
- Efeitos de hover em botões, links e itens de menu.
- Transições suaves para mudanças de estado (ex.: cards ou tabelas carregando).

---

## 5. Funcionalidades Adicionais
- **Busca Global:** Resultados incluem contatos, negócios, campanhas e documentos relacionados.
- **Exportação de Dados:** Opção para exportar relatórios em CSV ou PDF.
- **Personalização de Widgets:** Usuários podem reorganizar ou esconder elementos no dashboard.
- **Modo Noturno/Padrão:** Permitir alternância entre tema escuro e claro.
