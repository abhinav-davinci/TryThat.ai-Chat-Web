import React, { useRef } from 'react'
import { Send } from 'lucide-react'

const ChatInput = ({ inputValue, setInputValue, handleSendMessage, handleKeyPress }) => {
  const inputRef = useRef(null)

  return (
    <div className="border-t border-neutral-200 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about real estate properties, market trends, mortgages, or any property-related questions..."
            className="w-full resize-none border border-neutral-200 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent text-sm leading-relaxed text-neutral-800"
            style={{
              minHeight: '48px',
              maxHeight: '120px'
            }}
            rows={1}
          />
          
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="absolute right-2 bottom-2 p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 text-white hover:bg-primary-700"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-2 text-xs text-center text-neutral-500">
          TryThat.ai can make mistakes. Please verify important property information independently.
        </div>
      </div>
    </div>
  )
}

export default ChatInput