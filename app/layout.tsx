import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Cursor from '@/components/Cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avinash | Portfolio',
  description: 'Avinsh Kumar Ankur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-900 text-neutral-200 ${inter.className}`}>
        <Cursor />
        {children}
        <Contact />
      <Footer />
      </body>
    </html>
  )
}
