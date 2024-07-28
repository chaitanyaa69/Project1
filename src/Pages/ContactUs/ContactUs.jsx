import React from 'react';
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using the form below or find us at our office.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong>104, Greenwood, Hiranandani Estate, Patlipada, off Ghodbundar Road, Thane - 400607</p>
          <p><strong>Email:</strong> v.gopalakrishnan@foodintegrity.in</p>
          <p><strong>Phone:</strong>+91-9594941967</p>
          <h2>Find Us</h2>
          <div className="map">
           
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60263.84594514712!2d72.90956000850207!3d19.26102998717276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb336f8463a7%3A0x58b813e25e412379!2sHiranandani%20Estate!5e0!3m2!1sen!2sin!4v1721192625934!5m2!1sen!2sin" 
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps">
             </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
