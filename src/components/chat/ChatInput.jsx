import React, { useRef } from 'react'
import { Send, Paperclip } from 'lucide-react'

const ChatInput = ({ inputValue, setInputValue, handleSendMessage, handleKeyPress }) => {
  const inputRef = useRef(null)

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about real estate properties, market trends, mortgages, or any property-related questions..."
            className="w-full resize-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0f1525] rounded-2xl px-12 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent text-sm leading-relaxed text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500"
            style={{
              minHeight: '48px',
              maxHeight: '120px'
            }}
            rows={1}
          />
          <input id="file-input" type="file" className="hidden" onChange={() => {}} />
          <label htmlFor="file-input" className="absolute left-2 bottom-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors" title="Attach file">
            <Paperclip className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
          </label>
          
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