import React from 'react'
import { Menu, Bot, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const Header = ({ setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 bg-white/70 dark:bg-[#0f1525]/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          </button>
          
          <div className="flex items-center space-x-3">
           
            <div className="hidden sm:block">
              <h1 className="font-semibold text-neutral-800 dark:text-neutral-100">
                Real Estate Advisor
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Your AI property consultant
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          ) : (
            <Moon className="w-5 h-5 text-neutral-600" />
          )}
          <span className="text-sm text-neutral-700 dark:text-neutral-300">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </header>
  )
}

export default Header