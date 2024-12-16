import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add forgot password logic here
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner animated fadeIn">
        <div className="auth-image-container">
          <img src="path_to_forgot_password_image.jpg" alt="Forgot Password" className="auth-image" />
        </div>
        <form onSubmit={handleForgotPassword} className="auth-form">
          <h3 className="text-center mb-4">Forgot Password</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className="text-center">
            <Link to="/login" className="forgot-password-link">Remembered? Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
