import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
                    <div className="dropdown-header">
                      <p>Username</p>
                      <p>useremail@example.com</p>
                    </div>
                    <Link className="dropdown-item" to="/profile">
                      <FaUser size={20} /> Profile
                    </Link>
                    <Link className="dropdown-item" to="/logout">
                      <FaSignOutAlt size={20} /> Log out
                    </Link>
                    <Link className="dropdown-item" to="/share-platform">
                      <FaShareAlt size={20} /> Share platform
                    </Link>
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
