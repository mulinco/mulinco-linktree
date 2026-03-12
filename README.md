# mulinco — Linktree Pessoal

Um linktree personalizado feito com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## 🚀 Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## ✏️ Como personalizar

Todas as edições ficam em **`app/page.tsx`**:

### Trocar a foto de perfil
Substitua o componente `<Avatar />` por uma `<Image />` do Next.js:
```tsx
import Image from 'next/image'

// Coloque sua foto em /public/avatar.jpg e use:
<Image src="/avatar.jpg" alt="mulinco" width={96} height={96} className="rounded-full" />
```

### Adicionar/remover links sociais
Edite o array `socialLinks` no início do arquivo.

### Adicionar projetos ao portfólio
Edite o array `projects` com nome, descrição e URL dos seus projetos.

### Adicionar seu e-mail
Procure por `seu@email.com` no arquivo e substitua pelo seu e-mail real.

### Mudar a cor de destaque
Em `app/globals.css`, altere a variável `--accent`:
```css
:root {
  --accent: #c8f560; /* ← troque aqui */
}
```

## 📦 Deploy

Para fazer o deploy na Vercel:
```bash
npm run build
```
Ou conecte o repositório diretamente na [vercel.com](https://vercel.com).

## 🛠 Tecnologias
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts: Syne + JetBrains Mono
