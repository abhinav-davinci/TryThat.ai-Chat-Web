// Utility function to combine class names (similar to clsx)
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
  
  // Generate mock responses for demo
  export const generateMockResponse = (input) => {
    const responses = [
      "I'd be happy to help you with that property search! Based on your criteria, I've found several interesting options. Let me analyze the current market conditions in your desired area and provide you with detailed insights about pricing trends, neighborhood amenities, and investment potential.",
      "Great question about mortgage rates! Current rates are quite favorable for buyers. I can help you calculate your monthly payments and compare different loan options. Would you like me to run some numbers based on your budget and preferred property type?",
      "The real estate market in that area is showing strong growth potential. I've analyzed recent sales data, and properties there have appreciated by approximately 8% over the past year. The area offers excellent schools, convenient transportation, and growing commercial development.",
      "Based on your requirements, I've identified several properties that match your criteria. Let me break down the pros and cons of each option, including neighborhood analysis, price comparisons, and potential ROI if you're considering this as an investment.",
      "I can help you understand the home buying process step by step. From pre-approval to closing, there are several important milestones. Would you like me to create a personalized timeline based on your specific situation?"
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  // Format currency
  export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }
  
  // Format date
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date))
  }