import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Card, ProgressBar } from 'react-bootstrap';
import './Banner.css';
import BannerImage from '../../assets/Banner.jpg';

const Banner = () => (
  <div className="banner-container">
    <div className="container">
      <div className="row banner-row">
        {/* Left Section */}
        <div className="col-lg-6">
          <h4 className="text-uppercase">Donate</h4>
          <h1 className="banner-text">
            Discover Local Donations and Make a Difference
          </h1>
          <p className="banner-subtext">
            Join our community to find and share available donations. Every contribution counts in helping those in need.
          </p>
          <div className="d-flex gap-3">
            <Card className="banner-card">
              <Card.Body className="banner-card-body">
                <h5 className="banner-card-title">Available Donations</h5>
                <p className="text-muted mb-3">
                  Browse through our latest donations and help someone in your community today.
                </p>
              </Card.Body>
            </Card>
            <Card className="banner-card">
              <Card.Body className="banner-card-body">
                <h5 className="banner-card-title">Countdown Timers</h5>
                <p className="text-muted mb-3">
                  Stay informed with real-time countdowns on food and item availability.
                </p>
              </Card.Body>
            </Card>
          </div>
          <Link to="/timers" className="btn banner-btn">
                  Learn More <AiOutlineDoubleRight />
                </Link>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 text-center">
          <img
            src={BannerImage}
            alt="Banner"
            className="banner-img"
          />
        <div className="mt-4 banner-cta-btns ">
          <Link to="/donate" className="btn btn-dark">
            Donate Now
          </Link>
          <Link to="/volunteer" className="btn btn-outline-dark">
            Join as Volunteer
          </Link>
        </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-5 text-center banner-progress">
       
        <Card className="mt-4 shadow-sm border-0">
          <Card.Body>
            <h5>Our Goal: Help 1,000 People by Year End</h5>
            <ProgressBar now={33} label={`${33}%`} className="my-3 banner-progress-bar" />
            <p className="text-muted">330 people helped so far</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default Banner;
