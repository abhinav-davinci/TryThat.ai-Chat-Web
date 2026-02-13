import ListingStepper from './ListingStepper'
import WhyPostBenefits from './WhyPostBenefits'
import SpotlightScore from './SpotlightScore'

export default function ListPropertyLayout({ children, spotlightScore = 0 }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Mobile: spotlight score banner */}
      <div className="md:hidden mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4 flex items-center gap-4">
          <div className="relative shrink-0" style={{ width: 60, height: 60 }}>
            <svg width={60} height={60} className="-rotate-90">
              <circle cx={30} cy={30} r={24} fill="none" stroke="#E5E7EB" strokeWidth={5} />
              <circle
                cx={30} cy={30} r={24} fill="none"
                stroke="#2558A6" strokeWidth={5} strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 24}
                strokeDashoffset={2 * Math.PI * 24 - (spotlightScore / 100) * 2 * Math.PI * 24}
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-neutral-800">{spotlightScore}</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-800">Spotlight Score</p>
            <p className="text-xs text-neutral-500">Fill in more details to improve visibility</p>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal stepper */}
      <div className="md:hidden mb-6">
        <ListingStepper currentStep={0} />
      </div>

      {/* 3-column grid */}
      <div className="flex gap-8">
        {/* Left column - stepper + benefits */}
        <aside className="hidden md:block w-[280px] shrink-0">
          <div className="sticky top-24">
            <ListingStepper currentStep={0} />
            <WhyPostBenefits />
          </div>
        </aside>

        {/* Center - form */}
        <main className="flex-1 min-w-0">
          {children}
        </main>

        {/* Right column - spotlight score */}
        <aside className="hidden md:block w-[260px] shrink-0">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-md border border-neutral-200 p-6">
              <h3 className="text-sm font-semibold text-neutral-800 text-center mb-4">
                Spotlight Score
              </h3>
              <SpotlightScore score={spotlightScore} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
