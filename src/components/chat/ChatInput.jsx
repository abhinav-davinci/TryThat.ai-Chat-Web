import React, { useRef } from 'react'
import { Send, Paperclip } from 'lucide-react'

const ChatInput = ({ inputValue, setInputValue, handleSendMessage, handleKeyDown, hero = false }) => {
  const inputRef = useRef(null)

  const handleAutoResize = (e) => {
    const el = e.target
    el.style.height = 'auto'
    el.style.overflowY = 'hidden'
    const maxHeight = 300
    const newHeight = Math.min(el.scrollHeight, maxHeight)
    el.style.height = `${newHeight}px`
    if (el.scrollHeight > maxHeight) {
      el.style.overflowY = 'auto'
    }
  }

  return (
    <div className={`${hero ? 'border-t-0 py-8' : 'border-t border-neutral-200 dark:border-neutral-800 p-4'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); handleAutoResize(e) }}
            onKeyDown={handleKeyDown}
            placeholder="Ask about real estate properties, market trends, mortgages, or any property-related questions..."
            className="w-full resize-none overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0f1525] rounded-2xl px-14 py-4 pr-28 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 shadow-subtle"
            style={{
              minHeight: '120px',
              maxHeight: '300px',
              overflow: 'hidden'
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