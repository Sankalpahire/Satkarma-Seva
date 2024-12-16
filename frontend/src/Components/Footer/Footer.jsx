import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaFacebook, FaTwitter, FaInstagram ,FaYoutube } from "react-icons/fa"; // Import social icons
import './Footer.css';

// Import PNG images
import VisaIcon from '../../assets/visa.png';
import MastercardIcon from '../../assets/mastercard.png';
import RupayIcon from '../../assets/rupay.png';
import UpiIcon from '../../assets/upi.svg';
import RazorPay from '../../assets/razorpay.svg';

const Footer = () => {
  return (
    <footer className="custom-footer pt-5 pb-3">
      <div className="container">
        {/* First Row */}
        <div className="row text-center text-md-start">
          {/* Logo Section */}
          <div className="col-md-3 mb-4">
            <h4 className="footer-logo">Logo</h4>
            <p className="footer-slogan footer-text">Your slogan goes here</p>
            <Link to="/report-bug">
              <button className="btn-danger custom-button-outline btn-sm mt-2">Report Bug</button>
            </Link>
          </div>

          {/* Get Involved Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Get Involved</h5>
            <ul className="footer-list">
              <li><Link to="/donate" className="footer-link">Donate Now</Link></li>
              <li><Link to="/join" className="footer-link">Join Us</Link></li>
              <li><Link to="/impact" className="footer-link">Our Impact</Link></li>
              <li><Link to="/volunteer" className="footer-link">Volunteer Today</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-list">
              <li><Link to="/blog" className="footer-link">Blog Posts</Link></li>
              <li><Link to="/faqs" className="footer-link">FAQs</Link></li>
              <li><Link to="/stories" className="footer-link">Success Stories</Link></li>
              <li><Link to="/events" className="footer-link">Community Events</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Subscribe</h5>
            <p className="footer-text">Join our newsletter to stay updated.</p>
            <form>
              <div className="input-group">
                <input type="email" className="form-control custom-input" placeholder="Enter your email" />
                <button className="btn custom-button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* Second Row: Follow Us and We Accept */}
        <hr className="footer-divider" />
        <div className="row justify-content-center align-items-center mb-3">
          {/* Follow Us On */}
          <div className="col-md-6 d-flex justify-content-center align-items-center gap-3">
            <span className="footer-text">Follow Us On:</span>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon instagram" />
            </a>
             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> <FaYoutube className="footer-icon youtube" />
             </a>
          </div>

          {/* We Accept */}
          <div className="col-md-6 d-flex justify-content-center align-items-center gap-3">
            <span className="footer-text">We Accept:</span>
            <img src={VisaIcon} alt="Visa" className="we-accept-icon" />
            <img src={MastercardIcon} alt="Mastercard" className="we-accept-icon" />
            <img src={RupayIcon} alt="Rupay" className="we-accept-icon" />
            <img src={UpiIcon} alt="UPI" className="we-accept-icon" />
          </div>
        </div>

        {/* Payment Partners */}
        <div className="row justify-content-center align-items-center mb-3">
          <div className="col-md-6 d-flex justify-content-center align-items-center gap-3">
            <span className="footer-text">Payment Partners:</span>
            <img src={RazorPay} alt="RazorPay" className="razorpay-icon" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-3">
          <p className="footer-text">© All content on this website is used for fair use purposes; if you have any copyright concerns, please contact us at satkarma-seva@mail.com.</p>
          <p className="footer-text">
            Developed by <Link to="/" className="footer-link">Sankalp Ahire</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
