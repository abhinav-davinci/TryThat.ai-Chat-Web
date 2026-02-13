export default function GhostTextOverlay({ value, ghostText, multiline, className = '' }) {
  if (!ghostText) return null

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none absolute inset-0
        ${multiline ? 'whitespace-pre-wrap overflow-hidden' : 'whitespace-nowrap overflow-hidden'}
        ${className}
      `}
    >
      {/* Invisible text matching user input to position ghost */}
      <span className="invisible">{value}</span>
      {/* Visible ghost completion */}
      <span className="text-neutral-400">{ghostText}</span>
    </div>
  )
}
