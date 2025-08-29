import { useState, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

const FREE_LIMIT = 3

export const useFreeTier = () => {
  const [usedCount, setUsedCount] = useLocalStorage('free_tier_used', 0)
  const [modalOpen, setModalOpen] = useState(false)
  const isExhausted = useMemo(() => usedCount >= FREE_LIMIT, [usedCount])

  const attemptConsume = () => {
    if (usedCount < FREE_LIMIT) {
      setUsedCount(usedCount + 1)
      return true
    }
    setModalOpen(true)
    return false
  }

  const reset = () => setUsedCount(0)

  return {
    usedCount,
    isExhausted,
    modalOpen,
    setModalOpen,
    attemptConsume,
    reset,
    freeLimit: FREE_LIMIT,
  }
}


