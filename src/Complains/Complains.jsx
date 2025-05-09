import React, { useState } from 'react';
import './Complains.css';
import axios from 'axios';

const Complains = () => {
  const [location, setLocation] = useState([]);
  const [address, setAddress] = useState({ address: {} });

  // Get user's geolocation and reverse geocode to address
  function geoLocation() {
    console.log("📍 Location function invoked");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const accuracy = pos.coords.accuracy;

        console.log("✅ Latitude:", lat);
        console.log("✅ Longitude:", lon);
        console.log("🎯 Accuracy (meters):", accuracy);

        setLocation([lat, lon]);

        axios(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
          .then((res) => {
            console.log("🏠 Reverse Geocode Result:", res.data);
            setAddress(res.data);
          })
          .catch((err) => {
            console.error("❌ Reverse geocoding failed:", err);
            setAddress({ address: {} });
          });
      },
      (err) => {
        alert("Can't access location. Please allow location access.");
        console.error("❌ Geolocation error:", err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }

  return (
    <div className="complainMain">
      <h1><b>Upload Grievance</b></h1>
      <div style={{ marginLeft: '5vw', marginTop: '2vw' }} className="g-4">
        <h2>Subject :</h2>
        <input type='text' placeholder="Enter Subject of Problem" className="inputTextComplains" />

        <h2>Description :</h2>
        <textarea placeholder="Enter Description of Problem" className="inputTextComplains"></textarea>

        <h2>Address :</h2>
        <input
          type='text'
          value={
            address?.address
              ? `${address.address.road || ''}, ${address.address.city || address.address.town || address.address.village || ''}, ${address.address.state || ''}`
              : ""
          }
          placeholder="Detected Address"
          className="inputTextComplains"
          readOnly
        />

        <p className="buttonCommon" onClick={geoLocation}>
          <i className="fa-solid fa-location-dot"></i> Use My Location
        </p>
{/* 
        {location.length > 0 && (
          <>
            <p>Latitude: {location[0]?.toFixed(6)}</p>
            <p>Longitude: {location[1]?.toFixed(6)}</p>
          </>
        )}        
  */}
        <button className="button1 buttonCommon button1-Complains">Submit Request &nbsp;<i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
  );
};

export default Complains;
