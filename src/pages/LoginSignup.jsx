import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <div className="loginsignup-fields">
          <h1>Sign Up</h1>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
        </div>

        <p className="loginsignup-login">
          Already have an account? <Link to="/">Login Here</Link>
        </p>

        <div className="loginsignup-agree">
          <input type="CheckBox" name='' id='' />
          <p>By continuing, I agree to the terms and privacy policy.</p>
        </div>

        {/* Separate Back to Shop button with its own styles */}
        <button className="back-to-shop" onClick={handleBackClick}>Back to Shop</button>
      </div>
    </div>
  );
}

export default LoginSignup;
