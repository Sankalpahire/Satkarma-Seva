import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner animated fadeIn">
        <div className="auth-image-container">
          <img src="path_to_login_image.jpg" alt="Login" className="auth-image" />
        </div>
        <form onSubmit={handleLogin} className="auth-form">
          <h3 className="text-center mb-4">Login</h3>
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
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div className="text-center">
            <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </div>
          <div className="text-center">
            <span className="auth-link-text">Don't have an account? </span>
            <Link to="/register" className="auth-link">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
