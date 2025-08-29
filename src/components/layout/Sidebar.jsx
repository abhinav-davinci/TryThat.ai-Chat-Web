import React from 'react'
import { Plus, Home, MessageCircle, Search, Settings, HelpCircle } from 'lucide-react'

import { ChevronLeft } from 'lucide-react'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className={`
        fixed lg:relative lg:translate-x-0 transition-[width,transform] duration-300 ease-in-out z-50
        ${sidebarOpen ? 'translate-x-0 lg:w-64' : '-translate-x-full lg:translate-x-0 lg:w-16'}
        w-64 h-full bg-white dark:bg-[#0f1525] border-r border-neutral-200 dark:border-neutral-800 flex flex-col
      `}>
        {/* Sidebar Header */}
        <div className="p-4 bg-white/60 dark:bg-transparent backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="TryThat.ai" className={`h-14 w-auto object-contain ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-200`} />
              <span className={`font-semibold text-lg text-neutral-800 dark:text-neutral-100 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:hidden'} transition-opacity duration-200`}>
               
              </span>
            </div>
            <button
              onClick={handleToggleSidebar}
              className="hidden lg:flex p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft className={`w-4 h-4 text-neutral-600 dark:text-neutral-300 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} />
            </button>
          </div>
        </div>
        
        {/* New Chat Button */}
        <div className="p-4">
          <button className="group w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors">
            <Plus className={`${sidebarOpen ? 'w-4 h-4' : 'w-6 h-6'} text-primary-600 transform transition-transform duration-200 ease-out group-hover:rotate-12 group-hover:scale-110`} />
            <span className={`text-primary-600 dark:text-primary-400 font-medium ${sidebarOpen ? 'inline' : 'hidden'}`}>New Chat</span>
          </button>
        </div>
        
        {/* Chat History */}
        <div className="flex-1 px-4">
          {sidebarOpen && (
            <div className="text-xs font-medium mb-2 text-neutral-500">
              Recent conversations
            </div>
          )}
          <div className="space-y-1">
            {['Property search in Downtown', 'Mortgage calculation help', 'Investment analysis'].map((chat, i) => (
              <button key={i} className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 flex-shrink-0 text-neutral-400" />
                  <span className={`text-sm truncate text-neutral-700 dark:text-neutral-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0'} transition-opacity duration-200`}>{chat}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Sidebar Footer */}
        <div className="p-4 space-y-1">
          {[
            { icon: Search, label: 'Property Search' },
            { icon: Settings, label: 'Settings' },
            { icon: HelpCircle, label: 'Help & Support' }
          ].map(({ icon: Icon, label }, i) => (
            <button key={i} className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors">
              <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
              <span className={`text-sm text-neutral-700 dark:text-neutral-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0'} transition-opacity duration-200`}>{label}</span>
            </button>
          ))}
          {/* Free tier upsell (text only) */}
          <div className="w-full px-3 py-2">
            <span className={`text-sm text-neutral-600 dark:text-neutral-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0'} transition-opacity duration-200`}>
              Free User - <span className="text-primary-600 dark:text-primary-400 font-medium">Upgrade</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar