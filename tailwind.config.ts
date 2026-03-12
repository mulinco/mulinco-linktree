import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-code)', 'monospace'],
        display: ['var(--font-display)', 'cursive'],
        special: ['var(--font-special)', 'cursive'],
        'titulo-zao': ['var(--font-titulo-zao)', 'cursive']
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        red: 'var(--red)',
        'red-dim': 'var(--red-dim)',
        'red-glow': 'var(--red-glow)',
        'red-border': 'var(--red-border)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease both',
        blink: 'blink 1s step-end infinite',
        redPulse: 'redPulse 3.2s ease-in-out infinite',
        morph: 'morph 8s ease-in-out infinite',
        'cursed-halo': 'cursed-halo 5s infinite ease-in-out',
        blob: 'blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
        jelly: 'jelly 0.5s'
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        redPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 var(--red-glow), 0 0 20px rgba(160,0,20,0.12)' },
          '50%': { boxShadow: '0 0 0 7px transparent, 0 0 40px rgba(160,0,20,0.28)' },
        },
        morph: {
          '0%': { borderRadius: '48% 52% 68% 32% / 53% 43% 57% 47%' },
          '25%': { borderRadius: '64% 36% 47% 53% / 44% 59% 41% 56%' },
          '50%': { borderRadius: '42% 58% 35% 65% / 62% 40% 60% 38%' },
          '75%': { borderRadius: '59% 41% 58% 42% / 36% 51% 49% 64%' },
          '100%': { borderRadius: '48% 52% 68% 32% / 53% 43% 57% 47%' },
        },
        'cursed-halo': {
          '0%': { transform: 'scale(0.95)', opacity: '0.3', borderWidth: '1px', boxShadow: '0 0 0px var(--red)' },
          '50%': { transform: 'scale(1.15)', opacity: '0.6', borderWidth: '2px', boxShadow: '0 0 20px var(--red), inset 0 0 15px var(--red)' },
          '100%': { transform: 'scale(0.95)', opacity: '0.3', borderWidth: '1px', boxShadow: '0 0 0px var(--red)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        jelly: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.9, 1.1)' },
          '50%': { transform: 'scale(1.1, 0.9)' },
          '75%': { transform: 'scale(0.95, 1.05)' },
        }
      }
    },
  },
  plugins: [
    function({ addVariant }: { addVariant: any }) {
      addVariant('kawaii', 'body.kawaii &')
      addVariant('goth', 'body:not(.kawaii) &')
    }
  ],
}
export default config
