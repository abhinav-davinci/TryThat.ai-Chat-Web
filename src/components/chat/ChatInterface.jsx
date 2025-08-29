import React, { useRef, useEffect, useState } from 'react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import ChatInput from './ChatInput'
import CreditsModal from './CreditsModal'
import { useFreeTier } from '../../hooks/useFreeTier'
import { useNavigate } from 'react-router-dom'

const ChatInterface = ({ 
  messages, 
  inputValue, 
  setInputValue, 
  isTyping, 
  handleSendMessage 
}) => {
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()
  const { usedCount, attemptConsume, modalOpen, setModalOpen, freeLimit } = useFreeTier()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (attemptConsume()) {
        handleSendMessage()
      }
    }
  }

  const hasUserMessage = messages.some(m => m.type === 'user')

  if (!hasUserMessage) {
    return (
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">Hey There, Welcome To Trythat.ai</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Your Smartest AI Property Advisor</p>
            <div className="mt-4">
            Free User - <span className="text-primary-600 dark:text-primary-400 font-medium"><a href="https://trythat.ai/pricing" target="_blank" rel="noopener noreferrer">Upgrade</a></span>
            </div>
          </div>
          <ChatInput 
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={() => { if (attemptConsume()) { handleSendMessage() } }}
            handleKeyDown={handleKeyDown}
            hero
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <CreditsModal 
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onRegister={() => { setModalOpen(false); navigate('/signup') }}
      />
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
        handleSendMessage={() => { if (attemptConsume()) { handleSendMessage() } }}
        handleKeyDown={handleKeyDown}
      />
    </>
  )
}

export default ChatInterface