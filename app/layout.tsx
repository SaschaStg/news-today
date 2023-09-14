import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from './head'
import Header from './Header'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News today',
  description: 'Your favorite news, today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className={"bg-gray-100 transition-all duration-500 dark:bg-zinc-900 overflow-x-hidden"}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
