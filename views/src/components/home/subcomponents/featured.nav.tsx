import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.nav.css'

const NavHome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/signup')
  }

  return (
    <nav className='nav-bar-splash'>
        <section className='nav-items-left'>
            <p className='spl-logo'>IGNITE</p>
        </section>
        <section className="nav-items-right">
            <button
              className="spl-login-btn"
              onClick={() => handleLogin()}
              >Log In</button>
            <button
              className="spl-signup-btn"
              onClick={() => handleSignup()}
              >Sign up</button>
        </section>
    </nav>
  );
}

export default NavHome;
