import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';
import backgroundImage from '../../assets/news-letter-background.jpg'; 

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      // Make POST request to your server
      const response = await axios.post('https://sh-solution-backend.onrender.com/', { email });

      // Check response and update message accordingly
      if (response.data.success) {
        setMessage('Thank you for subscribing!');
      } else {
        setError('Something went wrong, please try again.');
      }

      // Clear the email field
      setEmail('');
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to subscribe. Please check your email and try again later.');
    }
  };

  return (
    <section className="newsletter-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Stay Updated with Our Latest News</h2>
        <p className="newsletter-subtitle">
          Subscribe to our newsletter to get the latest updates and exclusive offers straight to your inbox.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
        {message && <p className="newsletter-message success">{message}</p>}
        {error && <p className="newsletter-message error">{error}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
