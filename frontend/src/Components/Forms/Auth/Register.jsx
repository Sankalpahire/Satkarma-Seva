import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../../../utils/utils";
import "./Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        name,
        email,
        phoneNumber: phone,
        password,
      });

      if (response.data.success) {
        toast.success("Registration successful!", { autoClose: 3000 });
        setEmail("");
        setPassword("");
        setName("");
        setPhone("");
      } else {
        toast.error(response.data.message || "Registration failed.", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during registration.",
        { autoClose: 3000 }
      );
    }
  };

  return (
    <div className="auth-wrapper">
      <ToastContainer />
      <div className="auth-inner animated fadeIn">
        <div className="auth-image-container">
          <img
            src="path_to_register_image.jpg"
            alt="Register"
            className="auth-image"
          />
        </div>
        <form
          onSubmit={handleRegister}
          className={`auth-form ${validated ? "was-validated" : ""}`}
          noValidate
        >
          <h3 className="text-center mb-4">Register</h3>

          <div className="mb-3">
            <label htmlFor="validationCustom01" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="validationCustom01"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide a valid name.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="validationCustom02" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="validationCustom02"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide a valid email.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="validationCustom03" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control form-control-lg"
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

          <div className="mb-3">
            <label htmlFor="validationCustom04" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="validationCustom04"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern=".{4,}"
              title="Password must be at least 4 characters long"
              required
            />
            <div className="invalid-feedback">
              Password must be at least 4 characters long.
            </div>
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
          <div className="text-center">
            <span className="auth-link-text">Already registered? </span>
            <Link to="/login" className="auth-link">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
