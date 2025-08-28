import React from 'react'
import { Bot } from 'lucide-react'

const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="flex space-x-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary-100">
        <Bot className="w-5 h-5 text-primary-600" />
      </div>
      
      <div className="bg-white border border-neutral-200 rounded-2xl px-4 py-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
        </div>
      </div>
    </div>
  </div>
)

export default TypingIndicator