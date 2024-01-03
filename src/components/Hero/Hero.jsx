import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imge from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Lastest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>

        </div>

        <div className="hero-right">
            <img src={hero_imge} alt="" />
        </div>
    </div>
   


  )
}
export default Hero;
