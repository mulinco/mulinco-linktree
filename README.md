# m.links ✦

Uma aplicação pessoal de linktree moderna, altamente estética e com tema duplo, construída com [Next.js](https://nextjs.org/) e estilizada com CSS vanilla.

Projetada com foco em uma experiência interativa, este projeto transita de forma fluída entre uma estética vibrante e suave chamada **Kawaii** durante o dia, e uma estética afiada e sombria chamada **Goth** durante a noite.

## ✨ Funcionalidades

- **Duas Estéticas Personalizadas**
  - **Modo Kawaii (Dia):** Ativo das 06:00 às 17:59. Apresenta formas arredondadas, cores pastéis suaves, detalhes em rose gold/maquiagem e um avatar fluido que altera de forma.
  - **Modo Goth (Noite):** Ativo das 18:00 às 05:59. Apresenta uma paleta escura, contornos brilhantes em vermelho carmesim, estética afiada e uma "halo" (aura sombria) animada ao redor do avatar.
- **Fundos Animados Dinâmicos**: Esferas de luz ambiente e filtros de ruído que respondem nativamente ao tema ativo.
- **Interações Ocultas**: Descubra easter eggs como dar um clique duplo no avatar principal para alternar manualmente o tema a qualquer momento.
- **Arquitetura 100% Componentizada**: Código base dividido de forma limpa em camadas para dados reutilizáveis, componentes de UI modulares e tipagens estritas em TypeScript.
- **Extremamente Rápido**: Utiliza o Next.js App Router para garantir performance perfeita.

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) (React)
- **Estilização**: CSS Vanilla (Variáveis Globais & Features nativas)
- **Ícones**: Componentes SVG incluídos no próprio projeto
- **Gerenciador de Pacotes**: [pnpm](https://pnpm.io/)
- **Linguagem**: TypeScript

## 🚀 Como Iniciar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado, e em seguida instale o `pnpm` globalmente caso ainda não possua:

```bash
npm install -g pnpm
```

### 1. Clonar o repositório

```bash
git clone https://github.com/mulinco/mulinco-linktree.git
cd mulinco-linktree
```

### 2. Instalar as Dependências

Instale todos os pacotes necessários utilizando o `pnpm`:

```bash
pnpm install
```

### 3. Rodar o Servidor Local de Desenvolvimento

Inicie o servidor local para ver a sua aplicação em ação:

```bash
pnpm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📂 Estrutura do Projeto

```text
├── app/
│   ├── components/       # Componentes React reutilizáveis (Avatar, Cards, Ícones, AnimatedBackground)
│   ├── data/             # Dados estáticos/mock de placeholder para seus Links e Projetos
│   ├── types/            # Interfaces de tipagem do TypeScript
│   ├── globals.css       # Sistema de design core, animações keyframes e de cores
│   ├── layout.tsx        # Layout raiz do Next.js
│   └── page.tsx          # Ponto de entrada (Entrypoint) com o estado para o gerenciamento de tema
├── public/               # Assets estáticos (Imagem de perfil, favicon)
└── ...
```

## 📝 Editando seus Dados

Para modificar os links exibidos e o texto contido na sua página, navegue pelo arquivo `app/data/links.tsx` e atualize os arrays de `socialLinks` ou `projects` com os seus próprios textos, rótulos e URLs de direcionamento.

## 📄 Licença

Este é um projeto pessoal. Todos os direitos reservados.
