// components/ThemeToggle.tsx
'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui'

interface ToggleThemeProps {
  className?: string
}

export function ToggleTheme({ className }: ToggleThemeProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null // avoid hydration mismatch

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant='primary'
      type='button'
      ariaLabel='Toggle theme'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={className}
    >
      {isDark ? 'Light' : 'Dark'}
    </Button>
  )
}
