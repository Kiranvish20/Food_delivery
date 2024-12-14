import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Delicious meals delivered right to your doorstep! We are committed to bringing you fresh, flavorful, and thoughtfully prepared dishes that suit your lifestyle. Whether you're craving comfort food or looking for a healthy bite, we’ve got you covered. 
                    Explore our menu and enjoy fast, reliable delivery every time. Your satisfaction is our recipe for success!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 6958741237</li>
                    <li>contact@etatoo.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024  © Eatoo.com - All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
