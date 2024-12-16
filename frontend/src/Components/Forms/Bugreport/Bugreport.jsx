import React, { useState } from 'react';

import './Bugreport.css';

const ReportBug = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bugTitle, setBugTitle] = useState('');
  const [bugDescription, setBugDescription] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Bug Report Submitted Successfully!');
    setName('');
    setEmail('');
    setBugTitle('');
    setBugDescription('');
    setScreenshot(null);
    setScreenshotPreview(null);
  };

  return (
    <div className="report-bug-wrapper" style={{marginTop: '60px'}}>
      <div className="report-bug-inner">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Report a Bug</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Bug Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter bug title"
              value={bugTitle}
              onChange={(e) => setBugTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Bug Description</label>
            <textarea
              className="form-control"
              placeholder="Describe the issue"
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="screenshot-upload" className="form-label">Attach Screenshot</label>
            <div className="screenshot-upload-container">
              <label htmlFor="screenshot-upload" className="screenshot-upload-label">
                <span className="btn btn-outline-secondary">
                  <i className="bi bi-cloud-upload"></i> Click to Upload a Screenshot
                </span>
              </label>
              <input
                type="file"
                className="d-none"
                id="screenshot-upload"
                accept="image/*"
                onChange={handleScreenshotUpload}
              />
            </div>
          </div>

          {screenshotPreview && (
            <div id="screenshotPreview" className="text-center mt-3">
              <img src={screenshotPreview} alt="Screenshot Preview" className="img-fluid rounded screenshot-thumbnail-preview" />
            </div>
          )}

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-dark">Submit Bug Report</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportBug;
