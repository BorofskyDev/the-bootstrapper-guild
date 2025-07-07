import type { Metadata } from 'next'
import { atkinsonMono, atkinsonNext } from './fonts'
import '@/styles/globals.scss'

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
        {children}
      </body>
    </html>
  )
}
