import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [validated, setValidated] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Add registration logic here
    }
    setValidated(true);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner animated fadeIn">
        <form onSubmit={handleRegister} className={`auth-form ${validated ? 'was-validated' : ''}`} noValidate>
          <h3 className="text-center mb-4">Register</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom01">User Name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid name.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom02">Email address</label>
              <input
                type="email"
                className="form-control"
                id="validationCustom02"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom03">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="validationCustom03"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid 10-digit phone number.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom04">Password</label>
              <input
                type="password"
                className="form-control"
                id="validationCustom04"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}"
                title="Password must be at least 6 characters long and contain at least 2 numbers"
                required
              />
              <div className="invalid-feedback">
                Password must be at least 6 characters long and contain at least 2 numbers.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom05">Security Question</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                placeholder="Enter security question"
                value={securityQuestion}
                onChange={(e) => setSecurityQuestion(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a security question.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom06">Security Answer</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom06"
                placeholder="Enter security answer"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a security answer.
              </div>
            </div>
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

