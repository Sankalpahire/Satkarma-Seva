import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Tabs, Tab } from 'react-bootstrap';
import './Profile.css'; 
import cover from '../../assets/cover.jpg'
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('donations');

  const renderDonationCard = (item) => (
    <Col xs={12} sm={6} md={4} key={item} className="profile__donation-card-wrapper mb-4">
      <Card className="profile__donation-card">
        <Card.Img variant="top" src={`https://source.unsplash.com/random/400x300?sig=${item}`} alt="Donated Item" />
        <Card.Body>
          <Card.Title className="profile__card-title">Donated Item Name</Card.Title>
          <Card.Text className="profile__card-description">Brief description of the donated item...</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Badge bg="secondary" className="profile__badge">Claimed</Badge>
            <Button variant="outline-primary" size="sm" className="profile__button">View Details</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderClaimedCard = (item) => (
    <Col xs={12} sm={6} md={4} key={item} className="profile__claimed-card-wrapper mb-4">
      <Card className="profile__claimed-card">
        <Card.Img variant="top" src={`https://source.unsplash.com/random/400x300?sig=${item}`} alt="Claimed Item" />
        <Card.Body>
          <Card.Title className="profile__card-title">Claimed Item Name</Card.Title>
          <Card.Text className="profile__card-description">Brief description of the claimed item...</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Badge bg="secondary" className="profile__badge">
              <i className="bi bi-clock me-1"></i>
              Expires in 2d
            </Badge>
            <Button variant="outline-primary" size="sm" className="profile__button">View Details</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container fluid className="py-5 profile__page">
      <div className="profile__cover-photo position-relative mb-4">
        <img
          src={cover}
          alt="Cover"
          className="w-100"

        />
        <div className="position-absolute bottom-0 start-0 p-3 text-white profile__gradient-overlay">
          <div className="d-flex align-items-end">
            <img
              src="https://source.unsplash.com/random/100x100"
              alt="Profile"
              className="rounded-circle border border-4 border-white me-3"
             style={{height: '100px', width: '100px'}}
            />
            <div>
              <h1 className="fs-2 fw-bold mb-0 profile__name">John Doe</h1>
              <p className="mb-0 profile__tagline">Passionate about helping others</p>
            </div>
          </div>
        </div>
      </div>

      <Row className="mb-4">
        <Col xs={12} md={4}>
          <Card className="text-center profile__stats-card">
            <Card.Body>
              <Card.Title className="profile__stats-title">Items Donated</Card.Title>
              <div className="display-4 fw-bold profile__stats-count">12</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center profile__stats-card">
            <Card.Body>
              <Card.Title className="profile__stats-title">Items Claimed</Card.Title>
              <div className="display-4 fw-bold profile__stats-count">5</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center profile__stats-card">
            <Card.Body>
              <Card.Title className="profile__stats-title">People Helped</Card.Title>
              <div className="display-4 fw-bold profile__stats-count">17</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mb-4">
        <p className="profile__hero-text">You are a hero on our platform</p>
        <Button size="lg" className="profile__cta-button">
          <i className="bi bi-plus me-2"></i>
          List New Item for Donation
        </Button>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="profile__tabs mb-4"
      >
        <Tab eventKey="donations" title="Donations">
          <Row>
            {[1, 2, 3].map(renderDonationCard)}
          </Row>
        </Tab>
        <Tab eventKey="claimed" title="Claimed Items">
          <Row>
            {[4, 5].map(renderClaimedCard)}
          </Row>
        </Tab>
        <Tab eventKey="bookings" title="Pickup Bookings">
          <Row>
            {[1, 2].map((booking) => (
              <Col xs={12} key={booking} className="mb-3">
                <Card className="profile__booking-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="fs-5 fw-bold mb-1 profile__booking-title">Pickup Booking #{booking}</h3>
                        <p className="text-muted mb-0 profile__booking-date">Scheduled for: June 1{booking}, 2023 at 2:00 PM</p>
                      </div>
                      <Badge bg="primary" className="profile__badge">Upcoming</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProfilePage;
