import React from 'react'
import { ChatInterface } from './components/chat'
import { Header, Sidebar } from './components/layout'
import { useChat } from './hooks/useChat'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebarOpen', true) // Use localStorage to remember sidebar state
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
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={setSidebarOpen} />
        
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
