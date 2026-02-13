import { useState, useEffect, useCallback, useRef } from 'react'
import { getInlineCompletion, generateTitleOptions, generateDescription, getLineCompletion } from '../services/aiMockService'

export function useAISuggestions({
  value = '',
  aiContext = {},
  debounceMs = 300,
  minChars = 3,
  fieldType = 'title', // 'title' | 'description'
}) {
  const [ghostText, setGhostText] = useState('')
  const [popoverOptions, setPopoverOptions] = useState([])
  const [showPopover, setShowPopover] = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef(null)
  const valueRef = useRef(value)

  // Keep valueRef in sync
  valueRef.current = value

  // Debounced inline completion on typing
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!value || value.trim().length < minChars) {
      setGhostText('')
      return
    }

    debounceRef.current = setTimeout(async () => {
      try {
        let completion
        if (fieldType === 'title') {
          completion = await getInlineCompletion(value, aiContext)
        } else {
          completion = await getLineCompletion(value, aiContext)
        }

        // Only apply if value hasn't changed during the delay
        if (valueRef.current === value && completion) {
          setGhostText(completion)
        }
      } catch {
        // Silently ignore errors
      }
    }, debounceMs)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [value, aiContext, debounceMs, minChars, fieldType])

  // Clear ghost text when value changes to something that no longer matches
  useEffect(() => {
    if (!value) setGhostText('')
  }, [value])

  const acceptGhost = useCallback(() => {
    if (!ghostText) return null
    const newValue = value + ghostText
    setGhostText('')
    return newValue
  }, [value, ghostText])

  const dismissGhost = useCallback(() => {
    setGhostText('')
  }, [])

  const generateOptions = useCallback(async () => {
    setLoading(true)
    setShowPopover(true)
    setGhostText('')

    try {
      if (fieldType === 'title') {
        const options = await generateTitleOptions(value, aiContext)
        setPopoverOptions(options)
      } else {
        const desc = await generateDescription(aiContext)
        setPopoverOptions([desc])
      }
    } catch {
      setPopoverOptions([])
    } finally {
      setLoading(false)
    }
  }, [value, aiContext, fieldType])

  const closePopover = useCallback(() => {
    setShowPopover(false)
    setPopoverOptions([])
  }, [])

  // Keyboard handler for ghost text (Tab=accept, Escape=dismiss)
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Tab' && ghostText) {
      e.preventDefault()
      return acceptGhost()
    }
    if (e.key === 'Escape' && ghostText) {
      e.preventDefault()
      dismissGhost()
      return null
    }
    return undefined
  }, [ghostText, acceptGhost, dismissGhost])

  return {
    ghostText,
    popoverOptions,
    showPopover,
    loading,
    acceptGhost,
    dismissGhost,
    generateOptions,
    closePopover,
    handleKeyDown,
  }
}
