# CLAUDE.md — Projetos N2 (Desenvolvimento Front-end — UCB)

## Contexto

Sou Gabriel Gomes Giani, aluno de Programação na UCB (Universidade Católica de Brasília), 2º semestre. Este repositório contém dois projetos da disciplina de Desenvolvimento Front-end. Minha conta GitHub é `gabrielggiani-alt` e o repositório é `Desenvolvimento-Front-end.` (com ponto no final).

**Regras gerais de código:**
- HTML semântico, CSS puro (sem frameworks CSS), JavaScript vanilla quando necessário para animações e interações.
- Sem comentários no HTML/CSS/JS que pareçam gerados por IA.
- Código limpo mas simples — estilo de aluno de 2º semestre.
- Commits com mensagens naturais em português (ex: "ajustei o rodapé", "adicionei página de história").
- Usar Font Awesome para ícones (CDN).
- Todas as páginas devem ser responsivas.
- Cada projeto fica em sua própria pasta dentro do repositório.

**IMPORTANTE — Use a skill `frontend-design` (SKILL.md) como referência obrigatória antes de criar qualquer arquivo HTML/CSS.** O objetivo é um site que NÃO pareça genérico de IA. Nada de Inter, Roboto, Arial, gradientes roxos genéricos, layouts previsíveis. Cada site tem que ter personalidade própria.

---

## PROJETO 1 — AT1 (Individual): Dia Mundial do Karatê

**Tema:** Dia Mundial do Karatê (25 de outubro)
**Pasta:** `/at1-karate/`
**Total de páginas:** 3

### Estrutura das 3 páginas

1. **index.html** — Página inicial (Home)
   - Banner hero fullscreen com imagem de karatê de alto impacto
   - Texto de introdução sobre o Dia Mundial do Karatê
   - Seção "Por que essa data?" explicando a origem e importância

2. **historia.html** — História do Karatê
   - Origem do karatê em Okinawa
   - Evolução até virar esporte olímpico (Tóquio 2020)
   - Linha do tempo visual ou seções com imagens
   - Principais estilos (Shotokan, Goju-ryu, Shito-ryu, Wado-ryu)

3. **curiosidades.html** — Curiosidades e Cultura
   - Faixas e seus significados
   - Karatê no Brasil
   - Filmes e cultura pop
   - Katas famosos

### Especificações técnicas obrigatórias

- **Banner:** largura total da tela (100vw), imagem de fundo com overlay escuro e texto por cima.
- **Área de conteúdo:** max-width de 1200px, centralizado (margin: 0 auto).
- **Margens laterais:** entre 5% e 10% (usar padding ou margin percentual, nunca abaixo de 5%).
- **Menu de navegação:**
  - Posição: topo da página, ABAIXO do banner (ou lateral — escolher um e manter igual nas 3 páginas).
  - Posição fixa (position: sticky ou fixed) — não muda entre as páginas.
  - Botões com apenas 1 ou 2 palavras: "Início", "História", "Curiosidades".
  - Sem adicionar ou remover itens do menu entre páginas.
- **Logo:**
  - Presente no banner.
  - Funciona como botão/link para a página inicial (index.html).
  - Pode ser um texto estilizado "空手" ou uma imagem SVG simples.
- **Rodapé:**
  - Largura total da tela (100%).
  - Nome do aluno: Gabriel Gomes Giani.
  - Logo da UCB (usar imagem ou texto "UCB — Universidade Católica de Brasília").
  - OPCIONAL: ícones do Font Awesome com links externos (Wikipedia do Karatê, WKF, etc).

### Estilo visual sugerido

- Paleta de cores: preto, vermelho escuro (#8B0000), branco, dourado (#DAA520).
- Tipografia: fonte sem serifa para corpo, fonte impactante para títulos.
- Estética: minimalista japonesa, elegante, com bastante espaço em branco.
- Imagens: usar imagens de karatê de bancos livres (Unsplash, Pexels) via URL direta ou baixar para pasta `/at1-karate/img/`.

### Referência: o professor mencionou estes sites como inspiração
- wpdatatables (tabelas bonitas)
- Font Awesome (ícones)
- fooplugins (galerias de imagem)

---

## PROJETO 2 — AT2 (Grupo, até 3 integrantes): Site Empresarial

**Pasta:** `/at2-empresarial/`
**Total de páginas:** 5

### IMPORTANTE — LEIA ANTES DE COMEÇAR

> A empresa/pessoa precisa ser REAL e NÃO PODE TER SITE. Se já tiver site, o trabalho é anulado.
> Preciso de autorização da empresa/pessoa.
> Não pode ser empresa inventada.

### Dados da empresa

- **Nome:** Doce Encanto - Confeitaria Artesanal
- **Proprietária:** Andreia
- **Tipo de serviço:** Confeitaria artesanal — bolos de aniversário, doces, sobremesas sob encomenda
- **Localização:** QN 24 Cj. 2, Lotes 1 e 2 - Riacho Fundo II, Brasília - DF, CEP 71881-807
- **Telefone/WhatsApp:** (61) 99301-1184
- **Instagram:** @doceencanto_andreia
- **Avaliação Google:** 5.0 estrelas (25 avaliações)
- **O que os clientes dizem:** capricho impecável, decoração perfeita, massa leve, recheio no ponto, feito com amor e carinho, "Master Chef de mãos cheias"
- **Fotos/logo:** Pegar do Instagram da Andreia (com autorização). Se não tiver logo, criar um texto estilizado elegante.

### Integrantes do grupo

1. Gabriel Gomes Giani
2. [PREENCHER — nome do colega]
3. [PREENCHER — nome do colega, se tiver]

### Estrutura das 5 páginas

1. **index.html** — Página inicial
   - Banner hero fullscreen com imagem de bolo decorado (usar foto real da Andreia com autorização, ou imagem de confeitaria de banco livre como placeholder)
   - Frase de impacto: algo como "Cada bolo conta uma história" ou "Feito com amor, decorado com arte"
   - Seção com 3 cards destacando os principais serviços: Bolos de Aniversário, Doces Finos, Sobremesas
   - Seção de depoimentos reais (usar trechos das avaliações do Google com autorização)
   - Call-to-action: botão "Faça sua Encomenda" levando para contato

2. **sobre.html** — Sobre a Doce Encanto
   - História da Andreia e como começou a confeitaria (texto placeholder que ela pode revisar depois)
   - Valores: capricho, carinho, ingredientes de qualidade, cada detalhe importa
   - Foto da Andreia trabalhando (placeholder se não tiver)
   - Seção "Por que nos escolher?" com diferenciais (artesanal, personalizado, 5 estrelas no Google)

3. **cardapio.html** — Cardápio / Produtos
   - Categorias: Bolos Decorados, Bolos Simples, Doces Finos, Sobremesas no Pote, Kits Festa
   - Cada categoria com imagem, descrição e faixa de preço (placeholder: "Consulte valores")
   - Ícones do Font Awesome para cada categoria (fa-birthday-cake, fa-cookie, fa-ice-cream, etc)
   - Observação: "Todos os produtos são feitos sob encomenda. Entre em contato para personalizar!"

4. **galeria.html** — Galeria de Trabalhos
   - Grid responsivo com fotos dos bolos e doces (usar imagens do Instagram com autorização, ou placeholders de confeitaria)
   - Layout tipo Pinterest/Masonry ou grid uniforme
   - Lightbox simples em CSS/JS puro para ampliar as fotos ao clicar
   - Filtros visuais por categoria (opcional): "Aniversário", "Casamento", "Infantil", "Doces"

5. **contato.html** — Encomende / Contato
   - Formulário: Nome, WhatsApp, Data do evento, Tipo de produto, Mensagem (formulário estático, sem backend)
   - Informações de contato: WhatsApp (61) 99301-1184, Instagram @doceencanto_andreia
   - Mapa do Google Maps embutido (iframe) com a localização: QN 24, Riacho Fundo II
   - Horário de atendimento para encomendas
   - Link direto para WhatsApp: https://wa.me/5561993011184

### Especificações técnicas obrigatórias

- **Banner:** largura total da tela (100%), imagem de fundo com overlay.
- **Área de conteúdo:** max-width de 1200px, centralizado.
- **Margens:** entre 5% e 10%.
- **Menu de navegação:**
  - Posição fixa, igual em todas as 5 páginas.
  - Botões curtos: "Início", "Sobre", "Cardápio", "Galeria", "Contato".
- **Logo:**
  - No banner, funciona como link para index.html.
- **Rodapé:**
  - Largura total.
  - Nomes de todos os integrantes do grupo.
  - Logo da UCB.
- **Hospedagem:** o site precisa ficar online. Usar GitHub Pages (branch gh-pages ou pasta /docs).

### Estilo visual

- Paleta de cores: rosa claro (#F4C2C2 ou #FFD1DC), rosa escuro/vinho (#8B2252), branco (#FFFFFF), dourado (#D4A574 — tom de caramelo), marrom chocolate (#3C1518).
- Tipografia: fonte elegante/script para o nome "Doce Encanto" (Google Fonts: Playfair Display, Great Vibes ou Parisienne para destaque), sans-serif limpa para corpo (Poppins, Nunito).
- Estética: feminina, acolhedora, clean, com fotos grandes e bastante espaço em branco. Inspiração em sites de confeitarias premium.
- Imagens placeholder: buscar fotos de bolos e doces em Unsplash/Pexels (search: "cake", "confectionery", "pastry") enquanto não tiver fotos reais da Andreia.

---

## Estrutura de pastas esperada

```
Desenvolvimento-Front-end./
├── CLAUDE.md
├── at1-karate/
│   ├── index.html
│   ├── historia.html
│   ├── curiosidades.html
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── (imagens do projeto)
├── at2-empresarial/
│   ├── index.html
│   ├── sobre.html
│   ├── cardapio.html
│   ├── galeria.html
│   ├── contato.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── (imagens do projeto)
```

---

## Design e Animações — LEIA COM ATENÇÃO

Os sites precisam ser MEMORÁVEIS. Não é pra ser um site de aluno qualquer, é pra impressionar o professor e parecer site de verdade.

### Animações obrigatórias (CSS + JS vanilla mínimo)

- **Scroll reveal:** elementos (textos, cards, imagens) aparecem suavemente conforme o usuário rola a página. Usar Intersection Observer API com CSS transitions — nada de biblioteca externa.
- **Hover states criativos:** botões do menu, cards e imagens precisam ter hover com transições suaves (scale, shadow, color shift, underline animado).
- **Banner hero:** efeito parallax sutil no background OU animação de fade-in no texto ao carregar a página.
- **Staggered animations:** quando uma seção com vários cards/itens entra na tela, cada item aparece com um delay incremental (animation-delay).
- **Menu:** transição suave ao abrir/fechar no mobile (hambúrguer com animação no ícone), sticky com efeito de shadow ao rolar.
- **Lightbox da galeria (AT2):** abrir com fade/scale, fechar com animação, navegar entre fotos.
- **Loading suave:** ao trocar de página ou carregar, nada de flash branco — usar transitions e fade.

### O que NÃO fazer

- Nada de layout genérico com seções empilhadas sem graça.
- Nada de fontes padrão (Inter, Roboto, Arial, sans-serif genérica).
- Nada de paleta de cores previsível (gradiente roxo-azul, cinza corporativo sem alma).
- Nada de cards idênticos sem personalidade.
- Nada de CSS sem variáveis (usar custom properties pra cores, fontes, espaçamentos).

### O que QUERO ver

- Google Fonts com personalidade (Playfair Display, DM Serif, Sora, Space Grotesk, Outfit, Cormorant — variar entre os projetos).
- Uso intencional de espaço negativo.
- Backgrounds com textura, gradientes sutis ou patterns — não fundo branco puro.
- Micro-interações que surpreendem (hover em imagens com zoom + overlay, botões com ripple effect, underlines animados).
- Composição assimétrica onde fizer sentido — nem tudo precisa ser centralizado.
- Cada projeto com uma identidade visual completamente diferente do outro.

---

## Instruções para o Claude Code

1. **PRIMEIRO: leia a skill `frontend-design` (SKILL.md) antes de escrever qualquer código.**
2. **Comece pelo AT1 (Karatê)** — é individual e mais simples.
3. Pesquise informações reais sobre o Dia Mundial do Karatê para preencher o conteúdo das páginas.
4. Use imagens de Unsplash/Pexels (coloque URLs diretas ou baixe).
5. Crie os arquivos HTML, CSS e JS completos — não faça parcial, nunca mande snippet.
6. Teste se todas as páginas linkam corretamente entre si.
7. Depois passe para o AT2 quando os dados da empresa estiverem preenchidos.
8. Faça commits naturais em português ao longo do processo.
9. No final, configure o GitHub Pages para o AT2.
10. **Revise cada página visualmente antes de entregar** — se parecer genérico, refaça.

**Prioridade:** qualidade visual e animações > quantidade de conteúdo. O site tem que impressionar visualmente. Se não for memorável, não tá pronto.
