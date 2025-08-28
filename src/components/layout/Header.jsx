import React from 'react'
import { Menu, Bot } from 'lucide-react'

const Header = ({ setSidebarOpen }) => (
  <header className="border-b border-neutral-200 px-4 py-3 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
        >
          <Menu className="w-5 h-5 text-neutral-600" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100">
            <Bot className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h1 className="font-semibold text-neutral-800">
              Real Estate Advisor
            </h1>
            <p className="text-sm text-neutral-500">
              Your AI property consultant
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header