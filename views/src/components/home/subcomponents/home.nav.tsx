import React, { useState } from 'react';
import '../styles/home.nav.css'
// import LoginFormModal from './auth/LoginForm'
// import SignUpFormModal from './auth/SignUpForm';

const NavHome = () => {
  interface EventType {
       e: React.MouseEvent<HTMLDivElement, MouseEvent>
  }

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLogin = (e: EventType) => {
    setShowLoginModal(true)
  }

  const handleSignup = (e: EventType) => {
    setShowSignUpModal(true)
  }

  return (
    <nav className='nav-bar-splash'>
        <section className='nav-items-left'>
            <p className='spl-logo'>IGNITE</p>
        </section>
        <section className="nav-items-right">
            <button className="spl-login-btn">Log In</button>
            <button className="spl-signup-btn">Sign up</button>
        </section>
    </nav>
  );
}

export default NavHome;
