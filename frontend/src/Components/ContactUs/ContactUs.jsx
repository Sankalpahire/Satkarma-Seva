import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-description">We'd love to hear from you! Reach out to us with any questions, comments, or feedback.</p>
        </div>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h4 className="contact-title">Email Us</h4>
              <p className="contact-info">info@charityplatform.org</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <h4 className="contact-title">Call Us</h4>
              <p className="contact-info">+1 234 567 890</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h4 className="contact-title">Visit Us</h4>
              <p className="contact-info">123 Charity St, New York, NY 10001</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="follow-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
