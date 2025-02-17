import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
       mobileMenu ? setMobileMenu(false) : setMobileMenu(true); 
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <div className='logo'>Rest.</div>
        <ul className={mobileMenu ? '':'hide-mobile-menu'}>            
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/menu`}>Menu</Link></li>
            <li><Link to={`/gallery`}>Gallery</Link></li>
            <li><Link to={`/booktable`}><button className='btn'>Book a Table</button></Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  )
}


export default Navbar