import React, { useState, useEffect } from 'react'
import "./Nav.css"

const Nav = () => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () =>{});
        }
    },[]);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img 
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
            className='nav__avatar'
        />
    </nav>
  )
}

export default Nav
