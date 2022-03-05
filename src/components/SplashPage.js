import React from 'react'
import { Link } from 'react-router-dom'

export default function SplashPage () {
  return (
    <div class='img-fluid'>
      <div class='splash-page'>
        <Link to='/home' style={{ color: 'white', textDecoration: 'none' }}>
          <span>Welcome</span>
        </Link>
      </div>
    </div>
  )
}
