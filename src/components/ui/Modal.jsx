import React from 'react'

const Modal = ({ open, onClose, children }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white dark:bg-[#0f1525] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 w-[92%] max-w-md">
        {children}
      </div>
    </div>
  )
}

export default Modal


