import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/back.btn.css'

const BackBtn = (props:string) => {
  const navigate = useNavigate();

  const handleNav = () => {
    
  }

  return (
    <button
        className='general-back-btn'
        onClick={() => handleNav()}
        >
        Back
    </button>
  );
}

export default BackBtn;
