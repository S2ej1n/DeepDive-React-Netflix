import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    // 이걸로 경로 이동시켜줌.
    const navigate = useNavigate();

    const handelChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

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

        {/* 검색 */}
        <input 
        value={searchValue} 
        onChange={handelChange} 
        className='nav__input' type="text"
        placeholder="영화를 검색해주세요" />

        <img
            alt="User logged"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
            className='nav__avatar'
        />
    </nav>
  )
}

export default Nav
