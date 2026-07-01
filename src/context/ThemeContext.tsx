import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from 'react'

export type ThemeName = 'verde' | 'violeta' | 'celeste' | 'rosa'

const THEME_ORDER: ThemeName[] = ['verde', 'violeta', 'celeste', 'rosa']
const STORAGE_KEY = 'nexos-theme'

function isThemeName(value: string | null): value is ThemeName {
  return value !== null && (THEME_ORDER as string[]).includes(value)
}

function getInitialTheme(): ThemeName {
  const stored = localStorage.getItem(STORAGE_KEY)
  return isThemeName(stored) ? stored : 'verde'
}

interface ThemeContextValue {
  theme: ThemeName
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const cycleTheme = () => {
    setTheme(current => {
      const nextIndex = (THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length
      return THEME_ORDER[nextIndex]
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
