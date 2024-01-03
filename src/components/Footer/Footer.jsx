import React from 'react'
import './Footer.css'
import fooder_log from '../Assets/logo_big.png'
import instagram_icom  from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-log">
            <img src={fooder_log} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icom} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
<div className="footer-copyright">
    <hr />
    <p>Copyright @2023 - All Right Resversed</p>
</div>
    </div>
  )
}
export default Footer
