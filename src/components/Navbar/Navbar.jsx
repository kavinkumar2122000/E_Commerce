import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import  cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[meanu, setMeanu] = useState("shop");
  return (
    <div className="navbar">
        <div className="nav-logo">
        <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>



        <ul className="nav-meanu">
          <li onClick={()=>{setMeanu("shop")}}><Link  style={{textDecoration: 'none'}} to='/'>Shop</Link>{meanu==="shop"?<hr/>:<></>} </li>
          <li onClick={()=>{setMeanu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{meanu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMeanu("kids")}}><Link style={{textDecoration: 'none'}}  to ='/kids'>Kids</Link>{meanu==="kids"?<hr/>:<></>}</li>
          <li onClick={()=>{setMeanu("mens")}}><Link  style={{textDecoration: 'none'}} to = '/mens'>Mens</Link>{meanu==="mens"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-loggin-cart">
          <Link to={`/login`}><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
   
    </div>
  )
}
export default Navbar
