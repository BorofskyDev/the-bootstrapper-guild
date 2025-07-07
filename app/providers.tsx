// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute='data-theme'
      defaultTheme='light'
      themes={['light', 'dark']} 
    >
      {children}
    </ThemeProvider>
  )
}
