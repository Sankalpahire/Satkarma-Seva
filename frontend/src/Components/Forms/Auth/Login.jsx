import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import { API_BASE_URL } from '../../../utils/utils'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token); 
        toast.success('Login successful!', { autoClose: 3000 }); // Show success toast
        navigate('/dashboard'); 
      } else {
        toast.error('Invalid credentials, please try again.', { autoClose: 3000 }); // Show error toast
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { autoClose: 3000 }); // Show error toast
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="auth-wrapper">
      <ToastContainer /> {/* Toastify Container */}
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
            <span className="auth-link-text"> Don't have an account? </span>
            <Link to="/register" className="auth-link">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

