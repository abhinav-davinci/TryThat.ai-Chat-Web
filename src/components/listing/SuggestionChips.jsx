import { Plus } from 'lucide-react'

export default function SuggestionChips({ chips, onInsert }) {
  if (!chips || chips.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mt-2 md:max-w-none overflow-x-auto md:overflow-x-visible pb-1 md:pb-0">
      {chips.map((chip) => (
        <button
          key={chip}
          type="button"
          onClick={() => onInsert(chip)}
          className="
            inline-flex items-center gap-1 shrink-0
            rounded-full border border-neutral-200 bg-white
            px-3 py-1.5 text-xs font-medium text-neutral-600
            hover:border-[#2558A6] hover:text-[#2558A6] hover:bg-[#E8F1FF]
            focus:outline-none focus:ring-2 focus:ring-[#A3C7FF]
            transition-colors cursor-pointer
          "
        >
          <Plus size={12} strokeWidth={2} />
          {chip}
        </button>
      ))}
    </div>
  )
}
