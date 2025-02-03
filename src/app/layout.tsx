import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Political Ultra Analytics',
  description: 'Advanced Political Analytics Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          {children}
        </main>
      </body>
    </html>
  )
}