import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer container'>
        <div className="footer-text">
                <h2>Contact us</h2>
                <p>+91 234 567 8900</p>
                <p>restaurant@gmail.com</p>
                <p>Visakhapatnam, India</p>  
            <p>SUNDAY - THURSDAY: 12:00 PM - 23:00 PM </p>
            <p>FRIDAY - SATURDAY: 12:00 PM - 00:00 AM</p>
            <p>{new Date().getFullYear()} &copy; copyrights reserved</p>
        </div>
    </div>
  )
}

export default Footer