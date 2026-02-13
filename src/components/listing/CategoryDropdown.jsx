import { ChevronDown } from 'lucide-react'

export default function CategoryDropdown({ options, value, onChange, placeholder = 'Select...', id }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          input w-full appearance-none rounded-lg border border-neutral-200 bg-white
          px-4 py-3 pr-10 text-base text-neutral-800
          focus:outline-none focus:ring-2 focus:ring-[#A3C7FF] focus:border-[#2558A6]
          transition-colors cursor-pointer
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => {
          const val = typeof opt === 'string' ? opt : opt.value
          const label = typeof opt === 'string' ? opt : opt.label
          return (
            <option key={val} value={val}>
              {label}
            </option>
          )
        })}
      </select>
      <ChevronDown
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
      />
    </div>
  )
}
