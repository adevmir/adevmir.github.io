import React from 'react';
import insta from '../imgs/Instagram.png';
import tel from '../imgs/tel.png';
import tt from '../imgs/twitter.png';

function handleClick() {
    
}

function handleMouse() {

}

function Footer() {
  return (
    <footer>
      <button
        className='mediaButton'
        onClick={() => handleClick()}
        onMouseOver={handleMouse}     
      >
        <img src="" alt="Linkedin" />
      </button>
      <button
        className='mediaButton'
        onClick={() => handleClick()}
        onMouseOver={handleMouse}     
      >
        <img src="" alt="Email" />
      </button>
      <button
        className='mediaButton'
        onClick={() => handleClick()}
        onMouseOver={handleMouse} 
      >
        <img src={tel} alt="Tel" width="100%"/>
      </button>
      <button
        className='mediaButton'
        onClick={() => handleClick()}
        onMouseOver={handleMouse} 
      >
        <img src={tt} alt="Twitter" width="100%"/>
      </button>
      <button
        className='mediaButton'
        onClick={() => handleClick()}
        onMouseOver={handleMouse}  
      >
        <img src={insta} alt="Instagram" width="100%"/>
      </button>
        </footer>   
    )
}

export default Footer;