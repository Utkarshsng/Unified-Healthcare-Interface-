import React,{useRef, useState} from 'react'
import './contact.css'

const Contact = () => {
  const formRef = useRef(null); 
  const [isFormValid, setIsFormValid] = useState(false); 

  
  const handleInputChange = () => {
    if (formRef.current.checkValidity()) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };


  return (
    <article className="contact" data-page="contact" id = "contact">

        <header>
          <div />
          <h2 className="h2 article-title gradient__text" >CONTACT</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe title='mapBox'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d77.50873889944678!3d28.480215637743623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour%20Custom%20Location!5e0!3m2!1sen!2sbd!4v!5m2!1sen!2sbd"
              width="400" height="300" loading="lazy"></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <div className='uline'/>
          <h3 className="h3 form-title ">Contact Form</h3>

          <form action="https://formspree.io/f/xyzgkoyj" method="post" className="form" ref={formRef}  data-form>

            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input onChange={handleInputChange}></input>

              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input onChange={handleInputChange} ></input>
            </div>

            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input onChange={handleInputChange} ></textarea>

            <button className="form-btn" type="submit" data-form-btn disabled={!isFormValid}>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>

          </form>

        </section>

      </article>

  )
}

export default Contact