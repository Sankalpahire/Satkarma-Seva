import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUser, FaSignOutAlt, FaShareAlt } from "react-icons/fa";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const toggleHamburger = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent dropdown from closing due to outside clicks
    setShowDropdown((prevState) => !prevState);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = () => setShowDropdown(false);

    if (showDropdown) {
      document.addEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  const handleProfileClick = () => {
    if (authToken) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Hamburger Menu */}
        <button
          className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`}
          type="button"
          aria-expanded={isCollapsed}
          onClick={toggleHamburger}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/volunteer">
                Volunteer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            {/* Profile Dropdown */}
            <li className="nav-item">
              <div className="nav-link profile-dropdown" onClick={toggleDropdown}>
                <BsFillPersonFill size={30} />
                {showDropdown && (
                  <div className="dropdown-menu show">
                    {authToken ? (
                      <>
                        <div className="dropdown-header">
                          <p>{userInfo.name}</p>
                          <p>{userInfo.email}</p>
                        </div>
                        <button className="dropdown-item" onClick={handleProfileClick}>
                          <FaUser size={20} /> Profile
                        </button>
                        <Link className="dropdown-item" to="/share-platform">
                          <FaShareAlt size={20} /> Share platform
                        </Link>
                        <button className="dropdown-item" onClick={handleLogout}>
                          <FaSignOutAlt size={20} /> Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="dropdown-item" onClick={handleProfileClick}>
                          <FaUser size={20} /> Profile
                        </button>
                        <Link className="dropdown-item" to="/share-platform">
                          <FaShareAlt size={20} /> Share platform
                        </Link>
                        <Link className="dropdown-item" to="/login">
                          Sign In / Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
