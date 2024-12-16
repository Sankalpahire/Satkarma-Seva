import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaSearch } from "react-icons/fa";
import './Map.css'

const mapStyles = {
  height: "300px",
  width: "100%",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060
};

const DonationMap = () => {
  const [markers, setMarkers] = useState([
    { id: 1, name: "Food Donation", position: { lat: 40.7282, lng: -73.9942 } },
    { id: 2, name: "Clothing Donation", position: { lat: 40.7099, lng: -74.0047 } },
    { id: 3, name: "Furniture Donation", position: { lat: 40.7484, lng: -73.9857 } },
  ]);

  return (
    <div className="container" style={{marginTop: '100px'}}>
      <h3 className="mt-4">Donation Map</h3>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder= "Enter your location" />
        <button className="btn btn-dark" type="button">Search</button>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Available Donations Near You</h5>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={12}
              center={defaultCenter}
            >
              {markers.map(marker => (
                <Marker key={marker.id} position={marker.position} title={marker.name} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <div className="row">
        {markers.map(marker => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={marker.id}>
            <div className="card donation-card">
              <div className="card-body">
                <h5 className="card-title">{marker.name}</h5>
                <p className="card-text">Location: {marker.position.lat}, {marker.position.lng}</p>
                <button className="btn btn-dark">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationMap;
