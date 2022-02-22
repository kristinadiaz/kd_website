import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashPage from './components/SplashPage'

export default function App() {
  return(
    <div>
      <Routes>
      <Route path='/' element={<SplashPage />} />      
      </Routes>
    </div>
  )
}