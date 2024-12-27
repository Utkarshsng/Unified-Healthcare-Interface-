import React from 'react';
import patients from '../../assets/patients.png';
import './patients.css';
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const navigate = useNavigate();
  const handleSignUp = () =>{
    navigate("/signup");
  }
  return (
  <div className="patients section__padding" id="possibility">
    
    <div className="patients-content">
      <h1 className="gradient__text">FOR  PATIENTS!</h1>
      <p>Join the Unified Health Interface (UHI) platform for effortless access to your health information. Empower yourself to manage your care with easy communication to healthcare providers, streamlined appointment scheduling, and a secure, centralized location for your health records. Enhance your healthcare experience and take charge of your health journey today!</p>
      <button type="button" onClick={handleSignUp}>Get Started</button>
    </div>
    <div className="patients-image">
      <img src={patients} alt="patients" />
    </div>
  </div>
);
}

export default Patients;