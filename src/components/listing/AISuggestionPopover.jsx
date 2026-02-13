import { useEffect, useRef } from 'react'
import SparkleIcon from '../ui/SparkleIcon'

export default function AISuggestionPopover({ options, loading, onSelect, onClose, fieldType = 'title' }) {
  const ref = useRef(null)
  const itemRefs = useRef([])

  // Close on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose()
      }
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  // Focus first item on open
  useEffect(() => {
    if (!loading && options.length > 0 && itemRefs.current[0]) {
      itemRefs.current[0].focus()
    }
  }, [loading, options])

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.min(index + 1, options.length - 1)
      itemRefs.current[next]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = Math.max(index - 1, 0)
      itemRefs.current[prev]?.focus()
    } else if (e.key === 'Enter') {
      e.preventDefault()
      onSelect(options[index])
    }
  }

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 top-full mt-1 z-50 bg-white rounded-xl border border-neutral-200 shadow-lg overflow-hidden"
      role="listbox"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neutral-100 bg-neutral-50">
        <SparkleIcon size={16} />
        <span className="text-sm font-medium text-neutral-700">AI Suggestions</span>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center gap-1.5 px-4 py-4 justify-center">
          <span className="w-2 h-2 bg-[#2558A6] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-[#2558A6] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-[#2558A6] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
      )}

      {/* Options */}
      {!loading && options.map((option, index) => (
        <button
          key={index}
          ref={(el) => { itemRefs.current[index] = el }}
          type="button"
          role="option"
          tabIndex={0}
          onClick={() => onSelect(option)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`
            w-full text-left px-4 py-3 text-sm text-neutral-700
            hover:bg-[#E8F1FF] focus:bg-[#E8F1FF] focus:outline-none
            transition-colors cursor-pointer border-b border-neutral-50 last:border-b-0
            ${fieldType === 'description' ? 'whitespace-pre-wrap leading-relaxed' : ''}
          `}
        >
          {fieldType === 'description' ? (
            <div className="max-h-48 overflow-y-auto">
              {option.length > 150 ? option.slice(0, 150) + '...' : option}
              <span className="block mt-1 text-xs text-[#2558A6] font-medium">Click to use this description</span>
            </div>
          ) : (
            option
          )}
        </button>
      ))}

      {!loading && options.length === 0 && (
        <div className="px-4 py-3 text-sm text-neutral-400 text-center">
          No suggestions available
        </div>
      )}
    </div>
  )
}
