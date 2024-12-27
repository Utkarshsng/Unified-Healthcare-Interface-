import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const navigate = useNavigate();
  
  

  const handleSignUp = () =>{
    navigate("/signup");
  }
  const handleClick = () => {
    navigate("/login"); // Replace '/new-page' with your desired route
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="#"><img src={logo} alt='logo'/></a>
          
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wuhi">Features</a></p>
          
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p onClick={handleClick}>Sign in</p>
        <button type="button" onClick={handleSignUp}>Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#">Features</a></p>
          
          <p><a href="#contact">Contact</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <p onClick={handleClick}>Sign in</p>
            <button type="button" onClick={handleSignUp}>Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;