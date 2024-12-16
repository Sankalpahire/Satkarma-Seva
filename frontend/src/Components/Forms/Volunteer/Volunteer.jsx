import React, { Component } from 'react';

import './Volunteer.css'; 

class VolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      preferredArea: 'Food Collection',
      reason: ''
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
      <div className="container " style={{marginTop: '100px'}}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2 className="text-primary">Join as a Volunteer</h2>
            <h4>Why Volunteer?</h4>
            <ul className="list-group mb-4">
              <li className="list-group-item">Make a difference in your community</li>
              <li className="list-group-item">Help those in need</li>
              <li className="list-group-item">Gain valuable experience</li>
              <li className="list-group-item">Meet like-minded individuals</li>
            </ul>
            <h4>Top Volunteers</h4>
            <ul className="list-group">
              <li className="list-group-item">Volunteer Name - 50 hours contributed</li>
              <li className="list-group-item">Volunteer Name - 50 hours contributed</li>
              <li className="list-group-item">Volunteer Name - 50 hours contributed</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Volunteer Application</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Preferred Area of Volunteering</label>
                <div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="preferredArea"
                      value="Food Collection"
                      checked={this.state.preferredArea === 'Food Collection'}
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label">Food Collection</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="preferredArea"
                      value="Item Distribution"
                      checked={this.state.preferredArea === 'Item Distribution'}
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label">Item Distribution</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="preferredArea"
                      value="Administrative Support"
                      checked={this.state.preferredArea === 'Administrative Support'}
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label">Administrative Support</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Why do you want to volunteer?</label>
                <textarea
                  className="form-control"
                  name="reason"
                  value={this.state.reason}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default VolunteerForm;
