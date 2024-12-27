import React from 'react';
import Logo from '../../assets/logo.png';
import './footer.css';
import { useNavigate } from "react-router-dom";

const Footer = () =>{

  const navigate = useNavigate();
  const handleSignUp = () =>{
    navigate("/signup");
  }

 return(
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Ready to step into the future of healthcare? Join UHI today!</h1>
    </div>

    <div >
      <button className="gpt3__footer-btn" onClick={handleSignUp}>Get Started</button>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>98765 43218</p>
        <p>uhi@health.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 All rights reserved.</p>
    </div>
  </div>
);
}

export default Footer;