import React from 'react';
import Feature from '../../components/features/Features';
import './features.css';

const featuresData = [
  {
    title: 'Comprehensive Healthcare Platform',
    text: 'UHI connects patients, doctors, and healthcare providers, streamlining access to medical services',
  },
  {
    title: 'Decentralized & Secure',
    text: "By integrating blockchain technology, UHI guarantees the security and privacy of sensitive medical data. Blockchain's decentralized nature ensures that patient records and healthcare transactions are immutable, reducing risks of fraud, data breaches, and unauthorized access.",
  },
  {
    title: 'Efficient Communication',
    text: 'The platform enables real-time interaction between patients and healthcare professionals through a user-friendly interface.',
  },
  {
    title: 'Modern, Scalable Technology',
    text: 'UHI delivers a seamless and user-friendly experience. The platform is designed for scalability, ensuring it can evolve and integrate with future healthcare innovations and services.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">Unlock Personalized Healthcare Solutions: Why Joining Us Benefits Your Health!</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;