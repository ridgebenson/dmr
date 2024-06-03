import './Navbar.css'
import logo from '../../assets/srtlogo.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to = '/'><img src={logo} alt="" className='logo'/> </Link>
      <div className='logo-text'>SRT <span>Emergency Response</span></div> 
      <ul>
        <li><Link to = '/' className='link' >Home</Link></li>
        <li><Link to = '/login' className='link'>Login</Link></li>
        <li><Link to = '/about' className='link'>About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;