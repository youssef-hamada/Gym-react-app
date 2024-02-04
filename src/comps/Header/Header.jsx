import React, { useState } from 'react'
import "./Header.css"
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

const Header = () => {


  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen,setMenuOpened]= useState(false);


  const handleMenu = () => {
    setMenuOpened((prev) => !prev )
  }

  const menu = (<ul className='header-menu'>
      <li onClick={handleMenu}>Home</li>
      <li>Programms</li>
      <li>Why Us</li>
      <li>Plans</li>
      <li>Testimonials</li>
        </ul>)
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo'/>
      {(menuOpen ===false && mobile === true) ? (
        <div className='bars-container'><img src={Bars} alt="" className='bars' onClick={handleMenu}/></div>
      ): menu}

      
    </div>
  )
}

export default Header
