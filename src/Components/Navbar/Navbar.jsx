import React from 'react'
import './Navbar.css'
import logo from '../../assets/university.jpg'
import menu_icon from '../../assets/menu-icon.jpg'
import { Link } from 'react-scroll';

const Navbar = () => {

    
  return (
    <nav className='container'>
        <img src={logo}  alt="" className='logo' />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Program</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>About us</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Building</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Reporter</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon'/>
    </nav>
  )
}

export default Navbar