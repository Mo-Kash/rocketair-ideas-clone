import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/images/logo_RocketAir.svg'
import menuicon from '../assets/images/four-dots.svg'

const Navbar = () => {
  return (
    <>
      <div className='top-bar'>
        <div className="logo">
          <a href="https://www.rocketair.com/" target='_blank'><img src={logo} alt="" /></a>
        </div>
        <div className="buttons">
          <a href="https://www.rocketair.com/contact" target='_blank'><button>Get in touch</button></a>
          <a href="https://www.rocketair.com/ideas#" target='_blank'><object className='menu-icon' data={menuicon} type="image/svg+xml">Menu Icon</object></a>
        </div>
      </div>
      <div className="page-title">
        <p>Ideas</p>
      </div>
    </>
  )
}

export default Navbar
