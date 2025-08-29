import React from 'react'
import Modal from '../ui/Modal'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const CreditsModal = ({ open, onCancel, onRegister }) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">You have used all your free credits</h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">Register now to get complete access to AI Chat</p>

        <div className="rounded-lg border border-amber-100 bg-amber-50/60 dark:border-neutral-800 dark:bg-neutral-900/40 p-4 mb-5">
          <div className="space-y-2 text-sm">
            {[
              'Unlimited Credits for AI Chat',
              'Access to TryThat.ai B2B platform with free points',
              'Access to premium support',
              'View transaction data of 700000+ properties',
              'Search and compare unlimited properties'
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span className="text-neutral-800 dark:text-neutral-200">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/40">Cancel</button>
          <button onClick={onRegister} className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:opacity-90">Register Now</button>
        </div>
      </div>
    </Modal>
  )
}

export default CreditsModal


