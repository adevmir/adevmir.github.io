import React from 'react';

function handleClick() {
    
}

function handleMouse() {

}

function Footer() {
  return (
    <footer>
      <button
        onClick={handleClick()}
        onMouseOver={handleMouse}     
      >
        <img src="" alt="Linkedin" />
      </button>
      <button
        onClick={handleClick()}
        onMouseOver={handleMouse}     
      >
        <img src="" alt="Email" />
      </button>
      <button
        onClick={handleClick()}
        onMouseOver={handleMouse} 
      >
        <img src="" alt="Tel" />
      </button>
      <button
        onClick={handleClick()}
        onMouseOver={handleMouse} 
      >
        <img src="" alt="Twitter" />
      </button>
      <button
        onClick={handleClick()}
        onMouseOver={handleMouse}  
      >
        <img src="" alt="Instagram" />
      </button>
        </footer>   
    )
}

export default Footer;