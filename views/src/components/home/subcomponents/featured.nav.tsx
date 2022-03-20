import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/featured.nav.css'
import BackBtn from './back-btn';

const NavFeatured = () => {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    window.sessionStorage.clear()
    navigate('/')
  }

  const handleNav = () => {
    if (!window.location.href.endsWith('discover')) {
      navigate('/discover')
    } else {
      navigate('/featured')
    }
  }

  return (
    <nav className='nav-bar-splash'>
        <section className='nav-items-left-auth'>
            <p className='spl-logo'>IGNITE</p>
            <button
              className='general-back-btn'
              onClick={() => handleNav()}
              >
              Back
          </button>
        </section>
        <button
          onClick={(e) => handleLogout(e)}
          className="nav-items-right-auth">Logout</button>
    </nav>
  );
}

export default NavFeatured;
