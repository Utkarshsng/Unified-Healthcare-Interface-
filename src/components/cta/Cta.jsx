import React from 'react';
import './cta.css';
import { useNavigate } from "react-router-dom";

const CTA = () =>{ 
  const navigate = useNavigate();
  const handleSignUp = () =>{
    navigate("/signup");
  }
  return (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Unified, Secure, Transparent</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={handleSignUp}>Get Started</button>
    </div>
  </div>
);
}

export default CTA;