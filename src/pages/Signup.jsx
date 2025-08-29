import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpInput, setOtpInput] = useState('')
  const [otpCode, setOtpCode] = useState('')

  const handleOtpSend = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setOtpCode(code)
    setOtpSent(true)
    alert(`Your OTP code is ${code}`)
  }

  const handleOtpVerify = () => {
    if (otpInput === otpCode && otpCode) {
      localStorage.setItem('ttai_registered', 'true')
      navigate('/')
    } else {
      alert('Invalid OTP, please try again')
    }
  }

  const handleGoogleSuccess = () => {
    localStorage.setItem('ttai_registered', 'true')
    navigate('/')
  }

  const handleGoogleError = () => {
    alert('Google sign-in failed. Please try again or use email/OTP.')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#0f1525] border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Create your account</h1>

        <div className="mb-4">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} useOneTap={false} />
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-[#0f1525] text-neutral-500">or continue with email</span>
          </div>
        </div>

        <div className="space-y-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200" />
          <input value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="Mobile" className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200" />
          {!otpSent ? (
            <button onClick={handleOtpSend} className="w-full px-3 py-2 rounded-lg bg-primary-600 text-white">Send OTP</button>
          ) : (
            <div className="space-y-3">
              <input value={otpInput} onChange={e=>setOtpInput(e.target.value)} placeholder="Enter OTP" className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200" />
              <button onClick={handleOtpVerify} className="w-full px-3 py-2 rounded-lg bg-primary-600 text-white">Verify & Register</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup


