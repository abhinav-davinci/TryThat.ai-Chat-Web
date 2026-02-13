import { useRef, useCallback } from 'react'
import { useAISuggestions } from '../../hooks/useAISuggestions'
import GhostTextOverlay from './GhostTextOverlay'
import AISuggestionPopover from './AISuggestionPopover'
import SuggestionChips from './SuggestionChips'
import SparkleIcon from '../ui/SparkleIcon'
import { getSuggestionChips } from '../../services/propertyConstants'

export default function AITextarea({ value, onChange, aiContext, placeholder, id, error }) {
  const textareaRef = useRef(null)
  const overlayRef = useRef(null)

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
    debounceMs: 2000,
    minChars: 5,
    fieldType: 'description',
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
    textareaRef.current?.focus()
  }, [onChange, closePopover])

  // Sync scroll between textarea and ghost overlay
  const handleScroll = useCallback(() => {
    if (overlayRef.current && textareaRef.current) {
      overlayRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }, [])

  const handleChipInsert = useCallback((chip) => {
    const separator = value && !value.endsWith('\n') && !value.endsWith(' ') ? '\n• ' : '• '
    const prefix = !value ? '• ' : separator
    onChange(value + prefix + chip)
    textareaRef.current?.focus()
  }, [value, onChange])

  const handleGhostTap = useCallback(() => {
    if (ghostText) {
      onChange(value + ghostText)
    }
  }, [ghostText, value, onChange])

  const chips = getSuggestionChips(aiContext.propertyType, aiContext.category)

  return (
    <div>
      <div className="relative">
        {/* Ghost text overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 px-4 py-3 text-base font-normal whitespace-pre-wrap overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <span className="invisible">{value}</span>
          {ghostText && <span className="text-neutral-400">{ghostText}</span>}
        </div>

        {/* Actual textarea */}
        <textarea
          ref={textareaRef}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          placeholder={placeholder}
          rows={6}
          className={`
            input w-full rounded-lg border bg-transparent relative z-10 resize-y
            px-4 py-3 pr-12 text-base text-neutral-800
            focus:outline-none focus:ring-2 focus:ring-[#A3C7FF] focus:border-[#2558A6]
            transition-colors min-h-[160px]
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

        {/* Tab hint */}
        {ghostText && (
          <span className="hidden md:inline-flex absolute right-12 top-3 z-20 text-[10px] text-neutral-400 bg-neutral-100 rounded px-1.5 py-0.5 select-none pointer-events-none">
            Tab
          </span>
        )}

        {/* Sparkle button */}
        <button
          type="button"
          onClick={generateOptions}
          className="absolute right-3 top-3 z-20 p-1 rounded-md hover:bg-[#E8F1FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A3C7FF]"
          aria-label="Generate AI description"
          title="Generate AI description"
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
            fieldType="description"
          />
        )}
      </div>

      {/* Suggestion chips */}
      <SuggestionChips chips={chips} onInsert={handleChipInsert} />
    </div>
  )
}
