import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, setTheme, toggleTheme }
}

