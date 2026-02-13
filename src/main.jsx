import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'
import Signup from './pages/Signup.jsx'
import ListProperty from './pages/ListProperty.jsx'
const ExplainerScreen = lazy(() => import('../react/src/pages/ExplainerScreen.jsx'))
import './styles/global.css'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

const AppTree = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/list-property" replace />} />
      <Route path="/chat" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/list-property" element={<ListProperty />} />
      <Route path="/explainer" element={<Suspense fallback={<div>Loading...</div>}><ExplainerScreen /></Suspense>} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {googleClientId ? (
      <GoogleOAuthProvider clientId={googleClientId}>{AppTree}</GoogleOAuthProvider>
    ) : (
      AppTree
    )}
  </React.StrictMode>,
)