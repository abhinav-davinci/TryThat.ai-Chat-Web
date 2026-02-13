import { Check } from 'lucide-react'

export default function ChipSelector({ options, value, onChange, variant = 'single', label }) {
  const isSelected = (optionValue) => {
    if (variant === 'single') return value === optionValue
    return Array.isArray(value) && value.includes(optionValue)
  }

  const handleSelect = (optionValue) => {
    if (variant === 'single') {
      onChange(optionValue)
    } else {
      const arr = Array.isArray(value) ? value : []
      if (arr.includes(optionValue)) {
        onChange(arr.filter((v) => v !== optionValue))
      } else {
        onChange([...arr, optionValue])
      }
    }
  }

  const handleKeyDown = (e, optionValue) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleSelect(optionValue)
    }
  }

  return (
    <div
      role={variant === 'single' ? 'radiogroup' : 'group'}
      aria-label={label}
      className="flex flex-wrap gap-2.5"
    >
      {options.map((option) => {
        const optVal = typeof option === 'string' ? option : option.value
        const optLabel = typeof option === 'string' ? option : option.label
        const selected = isSelected(optVal)

        return (
          <button
            key={optVal}
            type="button"
            role={variant === 'single' ? 'radio' : 'checkbox'}
            aria-checked={selected}
            onClick={() => handleSelect(optVal)}
            onKeyDown={(e) => handleKeyDown(e, optVal)}
            className={`
              inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-medium
              transition-all duration-150 cursor-pointer select-none
              focus:outline-none focus:ring-2 focus:ring-[#A3C7FF] focus:ring-offset-1
              ${selected
                ? 'bg-[#2558A6] text-white border border-transparent shadow-sm'
                : 'border border-neutral-200 text-neutral-600 bg-white hover:border-[#2558A6] hover:text-[#2558A6]'
              }
            `}
          >
            {selected && <Check size={14} strokeWidth={2.5} />}
            {optLabel}
          </button>
        )
      })}
    </div>
  )
}
