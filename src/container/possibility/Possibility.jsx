import React from 'react';
import docImage from '../../assets/doc3.png';
import './possibility.css';
import { useNavigate } from "react-router-dom";

const Possibility = () => {
  const navigate = useNavigate();

  const handleSignUp = () =>{
    navigate("/signup");
  }
  return(
  <div className="doctors section__padding" id="possibility">
    <div className="doctors-image">
      <img src={docImage} alt="possibility" />
    </div>
    <div className="doctors-content">
      <h1 className="gradient__text">FOR  DOCTORS!</h1>
      <p>Doctors should join the platform to expand their patient reach, streamline daily operations, and enhance patient engagement with real-time communication tools. The platform ensures secure data management through blockchain technology while fostering professional growth through collaboration with other healthcare professionals.</p>
      <button type="button" onClick={handleSignUp}>Get Started</button>

    </div>
  </div>
);
}

export default Possibility;