import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { IoShareSocialSharp } from "react-icons/io5";

// Dummy data
const dummyData = [
  {
    id: 1,
    name: "Item 1",
    description: "This is a description for item 1. It has more text to show how the card adjusts in size.",
    timeLeft: "2 hours",
    distance: "5 miles",
    image: "https://via.placeholder.com/150",
    category: "Category 1",
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is a description for item 2.",
    timeLeft: "4 hours",
    distance: "10 miles",
    image: "https://via.placeholder.com/150",
    category: "Category 2",
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
  }
];

// Item Card Component
const ItemCard = ({ item, isEmpty }) => (
  <Card className="cards__card mb-3 shadow-sm" style={{ height: '350px' }}>
    {isEmpty ? (
      <Card.Body className="text-center">
        <h5 className="cards__card-title">Items Not Available</h5>
        <p className="cards__card-text">Currently no items to display</p>
      </Card.Body>
    ) : (
      <>
        <Card.Img variant="top" className="cards__card-img" src={item.image} alt={item.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div className="cards__card-content">
            <Card.Title className="cards__card-title">{item.name}</Card.Title>
            <Card.Text className="cards__card-description">{item.description}</Card.Text>
            <div className="d-flex justify-content-between">
              <span className="badge cards__badge">
                <FaClock style={{ marginRight: '5px' }} /> {item.timeLeft} left
              </span>
              <span className="badge cards__badge">
                <FaMapMarkerAlt style={{ marginRight: '5px' }} /> {item.distance} away
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <Button variant="dark" className="cards__claim-button" style={{ width: '55%' }}>Claim</Button>
            <div className="d-flex cards__social-icons">
              <a href={item.share} className="cards__social-icon"><IoShareSocialSharp /></a>
            </div>
          </div>
        </Card.Body>
      </>
    )}
  </Card>
);

// Item List Component
const ItemList = ({ items, fetchMoreItems, activeCategory }) => {
  const filteredItems = activeCategory === 'All' ? items : items.filter(item => item.category === activeCategory);

  const totalItems = 4; // Adjusted to 4 cards per row
  const emptyCardsCount = totalItems - filteredItems.length;

  return (
    <div className="cards__container">
      <div className="row justify-content-center">
        {filteredItems.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}> {/* Adjusted to 4 cards per row */}
            <ItemCard item={item} isEmpty={false} />
          </div>
        ))}
        {Array.from({ length: emptyCardsCount }).map((_, index) => (
          <div className="col-md-3 mb-4" key={index + filteredItems.length}> {/* Adjusted to 4 cards per row */}
            <ItemCard isEmpty={true} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="#" className="btn btn-link" onClick={fetchMoreItems}>View More</a>
      </div>
    </div>
  );
};

const Cards = () => {
  const [items, setItems] = useState(dummyData);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Expected an array but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    // Uncomment to fetch data from the API if needed
    // fetchData();
  }, []);

  const fetchMoreItems = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('YOUR_API_ENDPOINT_FOR_MORE_ITEMS');
      if (Array.isArray(response.data)) {
        setItems(prevItems => [...prevItems, ...response.data]);
      } else {
        console.error('Expected an array but received:', response.data);
      }
    } catch (error) {
      console.error('Error fetching more items', error);
    }
  };

  const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

  return (
    <div>
      <div className="cards__container-fluid mt-5 shadow-lg p-4 bg-white rounded">
        <div className="d-flex flex-column align-items-center mb-4">
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control cards__search-input me-2"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-dark cards__search-button" onClick={() => console.log('Search for:', searchQuery)}>
              Search
            </button>
          </div>
          <p className="mt-3 text-center" style={{ maxWidth: '500px' }}>
            Search items as per your convenience and find what you're looking for easily!
          </p>
        </div>

        <Tabs
          id="controlled-tab-example"
          activeKey={activeCategory}
          onSelect={(k) => setActiveCategory(k)}
          className="nav-pills mb-3"  // Use Bootstrap's nav-pills class for pill-like tabs
          fill  // Optional: Spread tabs across the entire width
        >
          {categories.map((category) => (
            <Tab 
              eventKey={category} 
              title={category} 
              key={category}
              className={`nav-item ${activeCategory !== category ? 'bg-dark text-white' : ''}`} // Dark background for inactive tabs
            >
              <ItemList items={items} fetchMoreItems={fetchMoreItems} activeCategory={activeCategory} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Cards;
