import { useRef, useCallback } from 'react'
import { useAISuggestions } from '../../hooks/useAISuggestions'
import GhostTextOverlay from './GhostTextOverlay'
import AISuggestionPopover from './AISuggestionPopover'
import SparkleIcon from '../ui/SparkleIcon'

export default function AITextInput({ value, onChange, aiContext, placeholder, id, error }) {
  const inputRef = useRef(null)

  const {
    ghostText,
    popoverOptions,
    showPopover,
    loading,
    handleKeyDown: aiKeyDown,
    generateOptions,
    closePopover,
  } = useAISuggestions({
    value,
    aiContext,
    debounceMs: 300,
    minChars: 3,
    fieldType: 'title',
  })

  const handleKeyDown = useCallback((e) => {
    const result = aiKeyDown(e)
    if (result !== undefined && result !== null) {
      onChange(result)
    }
  }, [aiKeyDown, onChange])

  const handleSelect = useCallback((option) => {
    onChange(option)
    closePopover()
    inputRef.current?.focus()
  }, [onChange, closePopover])

  const handleGhostTap = useCallback(() => {
    if (ghostText) {
      onChange(value + ghostText)
    }
  }, [ghostText, value, onChange])

  return (
    <div className="relative">
      {/* Ghost text overlay */}
      <div
        className="absolute inset-0 flex items-center px-4 py-3 text-base font-normal pointer-events-none"
        aria-hidden="true"
      >
        <GhostTextOverlay value={value} ghostText={ghostText} multiline={false} className="flex items-center px-4 py-3 text-base font-normal" />
      </div>

      {/* Actual input */}
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`
          input w-full rounded-lg border bg-transparent relative z-10
          px-4 py-3 pr-12 text-base text-neutral-800
          focus:outline-none focus:ring-2 focus:ring-[#A3C7FF] focus:border-[#2558A6]
          transition-colors
          ${error ? 'border-red-400' : 'border-neutral-200'}
        `}
        autoComplete="off"
      />

      {/* Ghost text tap target for mobile */}
      {ghostText && (
        <button
          type="button"
          onClick={handleGhostTap}
          className="absolute inset-y-0 right-12 left-0 z-20 md:hidden"
          aria-label="Accept suggestion"
        >
          <span className="sr-only">Tap to accept</span>
        </button>
      )}

      {/* Tab hint for desktop */}
      {ghostText && (
        <span className="hidden md:inline-flex absolute right-12 top-1/2 -translate-y-1/2 z-20 text-[10px] text-neutral-400 bg-neutral-100 rounded px-1.5 py-0.5 select-none pointer-events-none">
          Tab
        </span>
      )}

      {/* Sparkle button */}
      <button
        type="button"
        onClick={generateOptions}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1 rounded-md hover:bg-[#E8F1FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A3C7FF]"
        aria-label="Generate AI suggestions"
        title="Generate AI suggestions"
      >
        <SparkleIcon size={18} />
      </button>

      {/* Suggestion popover */}
      {showPopover && (
        <AISuggestionPopover
          options={popoverOptions}
          loading={loading}
          onSelect={handleSelect}
          onClose={closePopover}
          fieldType="title"
        />
      )}
    </div>
  )
}
