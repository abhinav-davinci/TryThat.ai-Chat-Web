import React from 'react'
import { User, Bot } from 'lucide-react'

const MessageBubble = ({ message }) => (
  <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className="flex max-w-[80%] space-x-3">
      {message.type === 'bot' && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary-100">
          <Bot className="w-5 h-5 text-primary-600" />
        </div>
      )}
      
      <div className={`
        rounded-2xl px-4 py-3 max-w-full transition-transform duration-150 will-change-transform
        ${message.type === 'user' 
          ? 'bg-primary-600 text-white' 
          : 'bg-white dark:bg-[#0f1525] border border-neutral-200 dark:border-neutral-800'
        }
      `}>
        <p className={`text-sm leading-relaxed whitespace-pre-wrap ${message.type === 'user' ? 'text-white' : 'text-neutral-800 dark:text-neutral-100'}`}>
          {message.content}
        </p>
      </div>
      
      {message.type === 'user' && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
          <User className="w-5 h-5 text-neutral-600 dark:text-neutral-200" />
        </div>
      )}
    </div>
  </div>
)

export default MessageBubble