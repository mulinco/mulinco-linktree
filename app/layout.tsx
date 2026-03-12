import type { Metadata } from 'next'
import { Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'mulinco',
  description: 'Links de Maria Rodrigues — mulinco',
  openGraph: {
    title: 'mulinco',
    description: 'Links de Maria Rodrigues',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
