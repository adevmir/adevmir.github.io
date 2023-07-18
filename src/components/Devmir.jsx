import React from 'react';
import logo from '../imgs/devmir.png';

function handleClick() {
    
}

function Devmir() {
  return (
    <div className='devmir'>
      <img src={logo} alt="devmir_logo" id="logo"></img>
      <button type="button" id="about"
        onClick={() => handleClick()}   
      > Sobre Mim
      </button>
    </div>   
    )
}

export default Devmir;