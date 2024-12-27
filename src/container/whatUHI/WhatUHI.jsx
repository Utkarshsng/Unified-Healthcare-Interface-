import React from 'react';
import Feature from '../../components/features/Features';
import './whatUHI.css';

const WhatUHI = () => (
  <div className="whatUHI section__margin" id="wuhi">
    <div className="whatUHI-feature">
      <Feature title="What is UHI?" text="The Unified Health Interface (UHI) is a transformative platform that integrates advanced technology like blockchain and AI to streamline healthcare services. It offers secure, accessible, and personalized care, connecting patients, healthcare providers, and medical data on a single platform to enhance overall health outcomes and efficiency." />
    </div>
    <div className="whatUHI-heading">
      <h1 className="gradient__text">Core Offerings</h1>
      <p>Explore the Features</p>
    </div>
    <div className="whatUHI-container">
      <Feature title="Secure & Transparent Healthcare" text="Utilizing blockchain technology, UHI ensures the secure exchange of medical data while maintaining transparency and trust between patients and healthcare providers." />
      <Feature title="Personalized & Accessible Care" text="UHI connects patients with healthcare professionals through a unified platform, offering tailored healthcare services and improving accessibility to medical support anytime, anywhere." />
      <Feature title="Advanced Technology Integration" text="The platform leverages AI and data analytics to enhance diagnosis accuracy, streamline healthcare workflows, and provide smarter healthcare solutions for improved patient outcomes." />
    </div>
  </div>
);

export default WhatUHI;