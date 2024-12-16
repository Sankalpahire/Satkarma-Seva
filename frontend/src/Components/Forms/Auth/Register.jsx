import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner animated fadeIn">
        <div className="auth-image-container">
          <img src="path_to_register_image.jpg" alt="Register" className="auth-image" />
        </div>
        <form onSubmit={handleRegister} className="auth-form">
          <h3 className="text-center mb-4">Register</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
          <div className="text-center">
            <span className="auth-link-text">Already registered? </span>
            <Link to="/login" className="auth-link">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
