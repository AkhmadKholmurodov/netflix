import React, { useEffect, useState } from 'react';
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () =>{
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  } 

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar)
    }
  })

  return <div className={`nav ${show && "nav_black"}`}>
    <div className='nav__contents'>
        
        
        
    </div>
    <div className='nav__content'>
      <img 
            className='nav__logo'
            src='https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5'
            alt=''
        />
    </div>
    <div className='nav__content'>
      <img
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
        />
    </div>
      
      

  </div>;
}

export default Nav;
