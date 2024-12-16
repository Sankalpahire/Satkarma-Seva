import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" style={{marginTop: '80px'}}>
      {/* Hero Section */}
      <div className="hero-section text-center text-white py-5">
        <h1 className="hero-heading">Fighting Hunger, One Meal at a Time</h1>
        <p className="hero-description">
          Our mission is to redistribute leftover food from people’s homes to those in need, promoting sustainability and social impact.
        </p>
        <button className="btn btn-light">Get Involved</button>
      </div>

      {/* Our Mission */}
      <div className="mission-section py-5">
        <div className="container text-center">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-description">
            We tackle the food waste problem and hunger by redistributing surplus food to those who need it most.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box">
                <i className="icon fas fa-donate"></i>
                <h4>Donate Food</h4>
                <p>Contribute your leftover food to help feed those in need.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <i className="icon fas fa-hands-helping"></i>
                <h4>Prepare and Collect</h4>
                <p>Our volunteers prepare and collect donated food for redistribution.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <i className="icon fas fa-truck"></i>
                <h4>Redistribute</h4>
                <p>The food is redistributed to those in need, minimizing waste and fighting hunger.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="founder-section py-5 bg-light text-center">
        <div className="container">
          <img src="path_to_founder_image.jpg" alt="Founder" className="img-fluid rounded-circle mb-4" />
          <h2 className="section-heading">Our Founder</h2>
          <p className="section-description">
            John Doe, with a passion for food security, started this charity to bridge the gap between food waste and hunger. His vision is a world where no food is wasted and everyone has enough to eat.
          </p>
          <button className="btn btn-dark">Join Us in Making a Difference</button>
        </div>
      </div>

      {/* How It Works */}
      <div className="how-it-works-section py-5">
        <div className="container text-center">
          <h2 className="section-heading">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box">
                <i className="icon fas fa-donate"></i>
                <h4>Donate Food</h4>
                <p>Contribute your leftover food to help feed those in need.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <i className="icon fas fa-hands-helping"></i>
                <h4>Prepare and Collect</h4>
                <p>Our volunteers prepare and collect donated food for redistribution.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <i className="icon fas fa-truck"></i>
                <h4>Redistribute</h4>
                <p>The food is redistributed to those in need, minimizing waste and fighting hunger.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section py-5 bg-light text-center">
        <div className="container">
          <h2 className="section-heading">Our Impact</h2>
          <p className="impact-stat">Over 100,000 meals saved</p>
          <p className="impact-stat">2 million pounds of food redistributed</p>
        </div>
      </div>

      {/* Contact & Social Proof */}
      <div className="contact-section py-5">
        <div className="container text-center">
          <h2 className="section-heading">Stay Connected</h2>
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

export default AboutUs;
