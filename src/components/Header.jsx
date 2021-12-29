import React from 'react'
import { Link } from 'react-router-dom'

function Header({ text }) {
  return (
    <header style={{ backgroundColor: 'grey', color: 'orange' }}>
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

export default Header
