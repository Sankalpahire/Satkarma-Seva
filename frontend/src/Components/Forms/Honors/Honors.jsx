import React, { Component } from 'react';
import './Honors.css'; 

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: '',
      yourEmail: '',
      honoreeName: '',
      honoreeEmail: '',
      donationAmount: '',
      personalMessage: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2 className="text-primary">Donate in Honor of a Loved One</h2>
            <h4>Why Donate in Honor?</h4>
            <p>Donating in honor of a loved one is a meaningful way to celebrate their life, commemorate a special occasion, or keep their memory alive. Your donation will make a lasting impact on those in need while paying tribute to someone special.</p>
            <h4>How it works:</h4>
            <ul className="list-group mb-4">
              <li className="list-group-item">Fill out the donation form</li>
              <li className="list-group-item">We'll send a personalized card to your honoree</li>
              <li className="list-group-item">Your donation helps those in need in your community</li>
            </ul>
            <h4>Recent Honorees:</h4>
            <ul className="list-group">
              <li className="list-group-item">In memory of John Doe</li>
              <li className="list-group-item">Celebrating Sarah's graduation</li>
              <li className="list-group-item">Honoring Dr. Smith's retirement</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Donation Form</h2>
            <p>Make a donation in honor of someone special</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="yourName"
                  value={this.state.yourName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="yourEmail"
                  value={this.state.yourEmail}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Honoree's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="honoreeName"
                  value={this.state.honoreeName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Honoree's Email (optional)</label>
                <input
                  type="email"
                  className="form-control"
                  name="honoreeEmail"
                  value={this.state.honoreeEmail}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Donation Amount ($)</label>
                <input
                  type="number"
                  className="form-control"
                  name="donationAmount"
                  value={this.state.donationAmount}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Personal Message (optional)</label>
                <textarea
                  className="form-control"
                  name="personalMessage"
                  value={this.state.personalMessage}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit Donation</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DonationForm;
