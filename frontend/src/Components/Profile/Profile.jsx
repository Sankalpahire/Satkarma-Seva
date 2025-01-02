import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import cover from '../../assets/cover.jpg';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('donations');
  const authToken = localStorage.getItem('authToken');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login'); // Redirect to login page if not logged in
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
    navigate('/login'); // Redirect to login page after logout
  };

  const fallbackDonations = [1, 2, 3];
  const fallbackClaimed = [4, 5];
  const fallbackBookings = [1, 2];

  const renderDonationCard = (item) => (
    <div className="col-12 col-sm-6 col-md-4 mb-4" key={item}>
      <div className="card h-100 shadow-sm">
        <img
          src={`https://source.unsplash.com/random/400x300?sig=${item}`}
          className="card-img-top"
          alt="Donated Item"
        />
        <div className="card-body">
          <h5 className="card-title">Donated Item Name</h5>
          <p className="card-text">Brief description of the donated item...</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-secondary">Claimed</span>
            <button className="btn btn-outline-primary btn-sm">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClaimedCard = (item) => (
    <div className="col-12 col-sm-6 col-md-4 mb-4" key={item}>
      <div className="card h-100 shadow-sm">
        <img
          src={`https://source.unsplash.com/random/400x300?sig=${item}`}
          className="card-img-top"
          alt="Claimed Item"
        />
        <div className="card-body">
          <h5 className="card-title">Claimed Item Name</h5>
          <p className="card-text">Brief description of the claimed item...</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-warning">
              <i className="bi bi-clock me-1"></i> Expires in 2d
            </span>
            <button className="btn btn-outline-primary btn-sm">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid py-5">
      <div className="position-relative mb-4">
        <img src={cover} alt="Cover" className="w-100" />
        <div className="position-absolute bottom-0 start-0 p-3 d-flex justify-content-between align-items-center text-white" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="d-flex align-items-end">
            <img
              src="https://source.unsplash.com/random/100x100"
              alt="Profile"
              className="rounded-circle border border-4 border-white me-3"
              style={{ height: '100px', width: '100px' }}
            />
            <div>
              <h1 className="fs-2 fw-bold mb-0">{userInfo?.name || 'Guest User'}</h1>
              <p className="mb-0">Passionate about helping others</p>
            </div>
          </div>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Items Donated</h5>
              <p className="display-4 fw-bold">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Items Claimed</h5>
              <p className="display-4 fw-bold">5</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">People Helped</h5>
              <p className="display-4 fw-bold">17</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <p>You are a hero on our platform</p>
        <button className="btn btn-primary btn-lg">
          <i className="bi bi-plus me-2"></i> List New Item for Donation
        </button>
      </div>

      <div className="mb-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'donations' ? 'active' : ''}`}
              onClick={() => setActiveTab('donations')}
            >
              Donations
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'claimed' ? 'active' : ''}`}
              onClick={() => setActiveTab('claimed')}
            >
              Claimed Items
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              Pickup Bookings
            </button>
          </li>
        </ul>
      </div>

      <div className="row">
        {activeTab === 'donations' &&
          (fallbackDonations.length ? fallbackDonations.map(renderDonationCard) : <p>No donations to show.</p>)}
        {activeTab === 'claimed' &&
          (fallbackClaimed.length ? fallbackClaimed.map(renderClaimedCard) : <p>No claimed items to show.</p>)}
        {activeTab === 'bookings' &&
          (fallbackBookings.length ? (
            fallbackBookings.map((booking) => (
              <div className="col-12 mb-3" key={booking}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Pickup Booking #{booking}</h5>
                        <p className="text-muted mb-0">Scheduled for: June 1{booking}, 2023 at 2:00 PM</p>
                      </div>
                      <span className="badge bg-primary">Upcoming</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No bookings to show.</p>
          ))}
      </div>
    </div>
  );
};

export default ProfilePage;
