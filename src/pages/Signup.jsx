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
      localStorage.setItem('free_tier_used', '0')
      navigate('/')
    } else {
      alert('Invalid OTP, please try again')
    }
  }

  const handleGoogleSuccess = () => {
    localStorage.setItem('ttai_registered', 'true')
    localStorage.setItem('free_tier_used', '0')
    navigate('/')
  }

  const handleGoogleError = () => {
    alert('Google sign-in failed. Please try again or use email/OTP.')
  }

  const clientIdAvailable = !!import.meta.env.VITE_GOOGLE_CLIENT_ID

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#0f1525] border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Create your account</h1>

        <div className="mb-4">
          {clientIdAvailable ? (
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} useOneTap={false} />
          ) : (
            <button onClick={handleGoogleSuccess} className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303C33.126,32.332,28.005,36,22,36c-7.18,0-13-5.82-13-13  s5.82-13,13-13c3.313,0,6.325,1.235,8.598,3.252l5.657-5.657C32.676,3.042,27.566,1,22,1C9.85,1,0,10.85,0,23s9.85,22,22,22  s22-9.85,22-22C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.35,16.108,17.882,14,22,14c3.313,0,6.325,1.235,8.598,3.252l5.657-5.657 C32.676,3.042,27.566,1,22,1C14.284,1,7.69,5.338,4.243,11.5L6.306,14.691z"/>
                <path fill="#4CAF50" d="M22,45c5.874,0,11.205-2.246,15.253-5.904l-7.036-5.953C28.005,36,23.126,38,18,38c-6.004,0-11.126-3.668-13.303-8.917  l-6.557,5.047C4.568,40.632,12.618,45,22,45z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-1.04,3.045-3.243,5.616-6.09,7.143l7.036,5.953  C38.812,38.272,44,31.5,44,23C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <span className="text-neutral-800 dark:text-neutral-100">Sign up with Google</span>
            </button>
          )}
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


