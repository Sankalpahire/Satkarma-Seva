import React, { useState } from 'react';
import './PostCreate.css'; 
const PostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryTime, setExpiryTime] = useState('');
  const [amPm, setAmPm] = useState('AM');
  const [otp, setOtp] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isOtpDisabled, setIsOtpDisabled] = useState(true);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'title') setTitle(value);
    if (id === 'description') setDescription(value);
    if (id === 'category') setCategory(value);
    if (id === 'location') setLocation(value);
    if (id === 'address') setAddress(value);
    if (id === 'expiryDate') setExpiryDate(value);
    if (id === 'expiryTime') setExpiryTime(value);
    if (id === 'otp') setOtp(value);
    if (id === 'amPm') setAmPm(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendOtp = () => {
    alert('OTP has been sent! Please check your mobile.');
    setShowOtpInput(true);
    setIsOtpDisabled(false);
  };

  const handleResendOtp = () => {
    alert('OTP has been resent!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Post Created Successfully!');
    setTitle('');
    setDescription('');
    setCategory('');
    setLocation('');
    setAddress('');
    setExpiryDate('');
    setExpiryTime('');
    setOtp('');
    setImage(null);
    setImagePreview(null);
    setIsOtpDisabled(true);
    setShowOtpInput(false);
  };

  return (
    <div className="add-post-container " style={{marginTop: '100px'}}>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Create a New Post</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={handleInputChange}
                    placeholder="Enter the title of your post"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Provide more details about your post or donation"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">Category</label>
                      <select
                        className="form-select"
                        id="category"
                        value={category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled selected>Select a category</option>
                        <option value="donation_request">Donation Request</option>
                        <option value="volunteer_opportunity">Volunteer Opportunity</option>
                        <option value="charity_event">Charity Event</option>
                        <option value="success_story">Success Story</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        value={location}
                        onChange={handleInputChange}
                        placeholder="Enter the location"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={handleInputChange}
                    placeholder="Enter the detailed address"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="expiryTime" className="form-label">Expiry Time</label>
                  <div className="d-flex">
                    <input
                      type="time"
                      className="form-control"
                      id="expiryTime"
                      value={expiryTime}
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      className="form-select ms-2"
                      id="amPm"
                      value={amPm}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">Verify OTP</label>
                  <div className="otp-section">
                    {showOtpInput ? (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          id="otp"
                          value={otp}
                          onChange={handleInputChange}
                          placeholder="Enter OTP"
                        />
                        <button
                          type="button"
                          className="btn btn-outline-success ms-2"
                          onClick={() => {
                            if (otp.trim()) {
                              alert('OTP Verified Successfully!');
                            } else {
                              alert('Please enter the OTP.');
                            }
                          }}
                        >
                          Verify OTP
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-primary ms-2"
                        onClick={handleSendOtp}
                      >
                        Send OTP
                      </button>
                    )}
                  </div>
                  <small className="d-block mt-2">
                    <button
                      type="button"
                      className="btn btn-link p-0 resend-btn"
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  </small>
                </div>

                <div className="mb-3">
                  <label htmlFor="image-upload" className="form-label">Upload Image</label>
                  <div className="image-upload-container">
                    <label htmlFor="image-upload" className="image-upload-label">
                      <span className="btn btn-outline-secondary">
                        <i className="bi bi-cloud-upload"></i> Click to Upload an Image
                      </span>
                    </label>
                    <input
                      type="file"
                      className="d-none"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                {imagePreview && (
                  <div id="imagePreview" className="text-center mt-3">
                    <img src={imagePreview} alt="Image Preview" className="img-fluid rounded image-thumbnail-preview" />
                  </div>
                )}

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary">
                    Create Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
