import React from 'react';
import './Founder.css';
 import Avatar from '../../assets/avatar.jpg'
const FounderSection = () => {
  return (
    <section className="founder-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={Avatar}
              alt="Jane Doe, Founder"
              className="img-fluid rounded founder-image"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title mb-3">Meet Our Founder</h2>
            <h3 className="founder-name mb-3">Jane Doe</h3>
            <p className="founder-subtitle mb-4">Visionary Leader & Philanthropist</p>
            <p className="founder-bio mb-4">
              Jane Doe has been at the forefront of charitable initiatives for over two decades.
              Her passion for helping others and creating sustainable solutions to community
              problems led her to establish our organization. Under her leadership, we've
              impacted thousands of lives and continue to grow our reach every day.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-facebook" size={24}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-twitter" size={24}></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-linkedin" size={24}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-instagram" size={24}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
