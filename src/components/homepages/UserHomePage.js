import React, { useState, useEffect } from "react";
import "./userHomePage.css";
import axios from "axios";

const UserHomePage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch the list of available cars from the backend
    // Update the API endpoint to your backend server URL
    const fetchAllCars = async () => {
      const data = await axios.get("http://localhost:8000/cars");
      console.log(data);
      setCars(data.data);
    };
    fetchAllCars();
  }, []);

  return (
    <div className="user-home-container">
      <h2>Available Cars for Rent</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-item">
            <h3>{car.Model}</h3>
            <p>Brand: {car.Marque}</p>
            <p>Engine: {car.Moteur}</p>
            <p>Price: {car.Prix}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHomePage;
