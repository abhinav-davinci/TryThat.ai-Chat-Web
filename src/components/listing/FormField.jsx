export default function FormField({ label, required, error, children, htmlFor }) {
  return (
    <div className="form-group mb-4">
      {label && (
        <label
          htmlFor={htmlFor}
          className="form-label block text-sm font-medium text-neutral-700 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}
