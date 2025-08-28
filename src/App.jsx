import React from 'react'
import { ChatInterface } from './components/chat'
import { Header, Sidebar } from './components/layout'
import { useChat } from './hooks/useChat'
import { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    handleSendMessage
  } = useChat()

  return (
    <div className="flex h-screen bg-white dark:bg-[#0b0f19] overflow-hidden">
      <Sidebar 
        sidebarOpen={sidebarOpen && !sidebarCollapsed} 
        setSidebarOpen={(open) => { setSidebarOpen(open); if (!open) setSidebarCollapsed(true) }} 
      />
      
      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={(open) => { setSidebarOpen(open); setSidebarCollapsed(false) }} />
        
        <ChatInterface
          messages={messages}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isTyping={isTyping}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  )
}

export default App
