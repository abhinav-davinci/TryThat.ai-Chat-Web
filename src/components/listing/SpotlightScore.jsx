import { useMemo } from 'react'

function getScoreLabel(score) {
  if (score >= 80) return { text: 'Excellent', color: 'text-green-600' }
  if (score >= 50) return { text: 'Good', color: 'text-[#2558A6]' }
  if (score >= 20) return { text: 'Needs Improvement', color: 'text-amber-500' }
  return { text: 'Get Started', color: 'text-neutral-400' }
}

export default function SpotlightScore({ score = 0 }) {
  const SIZE = 120
  const STROKE = 10
  const RADIUS = (SIZE - STROKE) / 2
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE

  const { text: label, color: labelColor } = useMemo(() => getScoreLabel(score), [score])

  return (
    <div className="flex flex-col items-center">
      {/* Circular progress */}
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} className="-rotate-90">
          <defs>
            <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2558A6" />
              <stop offset="100%" stopColor="#6B63F6" />
            </linearGradient>
          </defs>
          {/* Background ring */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={STROKE}
          />
          {/* Progress ring */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="url(#score-gradient)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        {/* Center number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-neutral-800">{score}</span>
        </div>
      </div>

      {/* Label */}
      <p className={`mt-3 text-sm font-semibold ${labelColor}`}>{label}</p>

      {/* Description */}
      <p className="mt-1 text-xs text-neutral-500 text-center max-w-[200px]">
        {score < 50
          ? 'Fill in more details to improve your listing visibility'
          : score < 80
            ? 'Good progress! Add a catchy title and highlights for best results'
            : 'Great listing! Your property will get maximum visibility'
        }
      </p>
    </div>
  )
}
