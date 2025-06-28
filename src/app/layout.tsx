import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Cogito:in - AI 시대의 사고력 훈련',
  description: 'AI 시대에 필요한 사고력을 훈련하는 5분 브레인트레이닝 웹서비스',
  keywords: '사고력, 브레인트레이닝, 비판적 사고, 창의성, 직관, AI 시대',
  openGraph: {
    title: 'Cogito:in - AI 시대의 사고력 훈련',
    description: 'AI 시대에 필요한 사고력을 훈련하는 5분 브레인트레이닝 웹서비스',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}