import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <main className='main'>
            <div className='logo-header'>
                <p>Portfolio</p>
            </div>
            <div className='menu-page'>
                <Link to="/"><span>Home</span></Link>
                <Link to="/services"><span>Services</span></Link>
                <Link to="/portfolio"><span>Portfolio</span></Link>
                <Link to="/contact"><span>Contact</span></Link>
            </div>
        </main>
      </header>
    </div>
  )
}

export default Header
