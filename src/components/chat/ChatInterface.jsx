import React, { useRef, useEffect } from 'react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import ChatInput from './ChatInput'

const ChatInterface = ({ 
  messages, 
  inputValue, 
  setInputValue, 
  isTyping, 
  handleSendMessage 
}) => {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const hasUserMessage = messages.some(m => m.type === 'user')

  if (!hasUserMessage) {
    return (
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-3xl">
          <ChatInput 
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={handleSendMessage}
            handleKeyDown={handleKeyDown}
            hero
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* Input Area */}
      <ChatInput 
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
        handleKeyDown={handleKeyDown}
      />
    </>
  )
}

export default ChatInterface