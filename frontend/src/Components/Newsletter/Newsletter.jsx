import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';
// import { baseURL } from '../../utils/contant.js'; // Ensure this is correctly imported

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}/api/subscriber/subscribe`, { email })
      .then(() => {
        window.alert('Thank you for subscribing! You will be getting the best offers possible from our side.');
        setEmail('');
      })
      .catch((err) => {
        window.alert(err.response ? err.response.data.message : 'Error subscribing');
        console.error(err);
      });
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content container py-5">
        <h2 className="text-center mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-center mb-4">Stay updated with the latest news, offers, and promotions from us.</p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;