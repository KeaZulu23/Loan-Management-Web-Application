// src/pages/Contact.js
import React from "react";
import './Contact.css'; // Importing the CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us using the form below.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1005429889034!2d-122.40147868468216!3d37.79213797975573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858091abf90f53%3A0xb51a0cf84d067510!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1620612540820!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
