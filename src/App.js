import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashPage from './components/SplashPage'
import Home from './components/Home'
// route to path='/home'

export default function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}
