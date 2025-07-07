import type { Metadata } from 'next'
import { atkinsonMono, atkinsonNext } from './fonts'
import '@/styles/globals.scss'
import { Providers } from './providers'
import { Header } from '@/components/layout'

export const metadata: Metadata = {
  title: 'The Bootstrapper Guild',
  description:
    'For the fed up, for the tired, for those looking for a new way forward',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${atkinsonNext.variable} ${atkinsonMono.variable}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
