import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar () {
  return (
    <nav class='container'>
      <div class='nav'>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}
