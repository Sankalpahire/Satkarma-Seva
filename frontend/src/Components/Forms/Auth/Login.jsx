import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import { API_BASE_URL } from '../../../utils/utils'; 
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 
    setLoading(true); 

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token); 
        navigate('/dashboard'); 
      } else {
        setError('Invalid credentials, please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner animated fadeIn">
        <div className="auth-image-container">
          <img src="path_to_login_image.jpg" alt="Login" className="auth-image" />
        </div>
        <form onSubmit={handleLogin} className="auth-form">
          <h3 className="text-center mb-4">Login</h3>
          
          {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}
          
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>
          
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
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
