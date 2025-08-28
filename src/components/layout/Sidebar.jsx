import React from 'react'
import { Plus, Home, MessageCircle, Search, Settings, HelpCircle } from 'lucide-react'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <>
    {/* Mobile overlay */}
    {sidebarOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}
    
    <div className={`
      fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      w-64 h-full bg-white border-r border-neutral-200 flex flex-col
    `}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-neutral-200 bg-white/60 backdrop-blur">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-neutral-800">
            TryThat.ai
          </span>
        </div>
      </div>
      
      {/* New Chat Button */}
      <div className="p-4">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
          <Plus className="w-4 h-4 text-neutral-600" />
          <span className="text-neutral-700">New conversation</span>
        </button>
      </div>
      
      {/* Chat History */}
      <div className="flex-1 px-4">
        <div className="text-xs font-medium mb-2 text-neutral-500">
          Recent conversations
        </div>
        <div className="space-y-1">
          {['Property search in Downtown', 'Mortgage calculation help', 'Investment analysis'].map((chat, i) => (
            <button key={i} className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 flex-shrink-0 text-neutral-400" />
                <span className="text-sm truncate text-neutral-700">{chat}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Sidebar Footer */}
      <div className="border-t border-neutral-200 p-4 space-y-1">
        {[
          { icon: Search, label: 'Property Search' },
          { icon: Settings, label: 'Settings' },
          { icon: HelpCircle, label: 'Help & Support' }
        ].map(({ icon: Icon, label }, i) => (
          <button key={i} className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors">
            <Icon className="w-4 h-4 text-neutral-600" />
            <span className="text-sm text-neutral-700">{label}</span>
          </button>
        ))}
      </div>
    </div>
  </>
)

export default Sidebar