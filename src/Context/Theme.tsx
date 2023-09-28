import { useState, useEffect, createContext } from 'react'
import { themes } from '../lib/consts'
import type { Theme, ContextProps, ThemeContextType } from '../lib/types'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider: React.FC<ContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes.Dark)

  const toggleTheme = (): void => {
    if (theme === themes.Light) {
      setTheme(themes.Dark)
      window.localStorage.setItem('theme', themes.Dark)
      document.documentElement.classList.add(themes.Dark)
    } else {
      setTheme(themes.Light)
      window.localStorage.setItem('theme', themes.Light)
      document.documentElement.classList.remove(themes.Dark)
    }
  }
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === themes.Dark || savedTheme === themes.Light) {
      setTheme(savedTheme)
      savedTheme === themes.Dark
        ? document.documentElement.classList.add(themes.Dark)
        : document.documentElement.classList.remove(themes.Dark)
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme(themes.Dark)
      document.documentElement.classList.add(themes.Dark)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}
