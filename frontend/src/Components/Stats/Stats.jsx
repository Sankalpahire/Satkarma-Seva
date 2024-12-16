import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Stats.css'; 

const Stats = () => {
  const [helpingHands, setHelpingHands] = useState(0);
  const [contributors, setContributors] = useState(0);
  const [availableItems, setAvailableItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        const data = response.data;

        const animateValue = (start, end, duration, setValue) => {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setValue(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        };

        animateValue(0, data.helpingHands, 2000, setHelpingHands);
        animateValue(0, data.contributors, 2000, setContributors);
        animateValue(0, data.availableItems, 2000, setAvailableItems);

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="stats-container container-fluid text-center shadow-lg bg-white rounded">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h3>Welcome to SATKARMA-SEVA</h3>
        
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-4 mb-5 bg-white rounded fixed-height">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Helping Hands</h5>
              <h2 className="card-text">{helpingHands}</h2>
              <p className="card-text">People helped by donations</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-4 mb-5 bg-white rounded fixed-height">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Contributors</h5>
              <h2 className="card-text">{contributors}</h2>
              <p className="card-text">Active donors</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-4 mb-5 bg-white rounded fixed-height">
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Available Items</h5>
              <h2 className="card-text">{availableItems}</h2>
              <p className="card-text">Items ready for pickup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
