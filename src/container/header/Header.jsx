import React from 'react';
import banner from '../../assets/banner2.png';
import './header.css';
import { useNavigate } from "react-router-dom";

const Header = () =>{

  const navigate = useNavigate();

  const handleSignUp = () =>{
    navigate("/signup");
  }
  return (
    <div className="uhi_header section__padding" id="home">
    <div className="uhi_header-content">
      <h1 className="gradient__text">Innovative Solutions for Smarter Healthcare</h1>
      <p>Integrating advanced technology, secure blockchain systems, and personalized care to enhance patient outcomes, improve accessibility, and streamline healthcare services—building a future where healthcare is smarter, faster, and more reliable.</p>

      <div className="uhi_header-content__input">
        <button type="button" onClick={handleSignUp}>Get Started</button>
      </div>

      {/* <div className="uhi_header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="uhi_header-image">
      <img src={banner} />
    </div>
  </div>
  )
} 

export default Header;