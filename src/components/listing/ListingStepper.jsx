import { Check } from 'lucide-react'

const steps = [
  { label: 'Property Overview', description: 'Basic property details' },
  { label: 'Space Details', description: 'Area, rooms, amenities' },
  { label: 'Location Details', description: 'Address and map' },
]

export default function ListingStepper({ currentStep = 0 }) {
  return (
    <nav aria-label="Listing progress">
      {/* Desktop: vertical */}
      <div className="hidden md:flex flex-col gap-0">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep

          return (
            <div key={step.label} className="flex gap-3">
              {/* Circle + connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0
                    ${isCompleted
                      ? 'bg-[#2558A6] text-white'
                      : isActive
                        ? 'bg-[#2558A6] text-white ring-4 ring-[#2558A6]/20'
                        : 'bg-neutral-100 text-neutral-400'
                    }
                  `}
                >
                  {isCompleted ? <Check size={16} /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-12 ${isCompleted ? 'bg-[#2558A6]' : 'bg-neutral-200'}`}
                  />
                )}
              </div>
              {/* Text */}
              <div className="pt-1">
                <p className={`text-sm font-medium ${isActive || isCompleted ? 'text-neutral-800' : 'text-neutral-400'}`}>
                  {step.label}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile: horizontal */}
      <div className="flex md:hidden items-center gap-2 overflow-x-auto pb-2">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep

          return (
            <div key={step.label} className="flex items-center gap-2 shrink-0">
              <div
                className={`
                  w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold
                  ${isCompleted
                    ? 'bg-[#2558A6] text-white'
                    : isActive
                      ? 'bg-[#2558A6] text-white'
                      : 'bg-neutral-100 text-neutral-400'
                  }
                `}
              >
                {isCompleted ? <Check size={14} /> : index + 1}
              </div>
              <span className={`text-xs font-medium ${isActive ? 'text-neutral-800' : 'text-neutral-400'}`}>
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className="w-6 h-0.5 bg-neutral-200 shrink-0" />
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
