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
      console.log(response.data); // Log the response to check the data

      if (response.data.success) {
        const token = response.data.jwtToken; // Token from API response
        const userInfo = {
          name: response.data.name,
          email: response.data.email
        };
        console.log('Token:', token); // Log the token to verify it
        console.log('User Info:', userInfo); // Log the user info to verify it

        // Check if localStorage is available and working
        if (typeof Storage !== "undefined") {
          // Save auth token and user info in local storage
          localStorage.setItem('authToken', token);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          console.log('AuthToken:', localStorage.getItem('authToken')); // Log to confirm it's saved
          console.log('UserInfo:', localStorage.getItem('userInfo')); // Log to confirm it's saved

          toast.success('Login successful!', { autoClose: 3000 }); // Show success toast

          // Delay navigation to ensure localStorage is updated
          setTimeout(() => {
            console.log('Navigating to dashboard...');
            navigate('/dashboard');
          }, 1000);
          
        } else {
          console.error('Local storage is not supported or accessible');
          toast.error('Local storage is not supported or accessible.', { autoClose: 3000 });
        }
      } else {
        toast.error('Invalid credentials, please try again.', { autoClose: 3000 }); // Show error toast
      }
    } catch (error) {
      console.error('Login error:', error); // Log the error for debugging
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
        const errorMessage = error.response.data.message || 'An unknown error occurred.';
        toast.error('An error occurred: ' + errorMessage, { autoClose: 3000 });
      } else if (error.request) {
        console.error('Request error:', error.request);
        toast.error('No response received from the server. Please try again later.', { autoClose: 3000 });
      } else {
        console.error('Error message:', error.message);
        toast.error('An error occurred. Please try again later.', { autoClose: 3000 });
      }
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
