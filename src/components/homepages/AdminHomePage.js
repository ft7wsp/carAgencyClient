import React, { useState, useEffect } from "react";
import "./userHomePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const [showForm, setShowForm] = useState(false);
  const [carData, setCarData] = useState({
    ID_voiture: Math.random() * (999999 - 8 + 1) + 8,
    Matricule: "",
    Modele: "",
    Marque: "",
    Moteur: "",
    Prix: 0,
  });

  const navigate = useNavigate();

  const handleAddCarClick = () => {
    setShowForm(true);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and save car data
    console.log("Car data:", carData);
    // Clear the form inputs
    setCarData({
      ID_voiture: Math.random() * (999999 - 8 + 1) + 8,
      Matricule: carData.Matricule,
      Modele: carData.Modele,
      Marque: carData.Marque,
      Moteur: carData.Moteur,
      Prix: carData.Prix,
    });
    setShowForm(false);
    axios.post("http://localhost:8000/admin/addcar", carData);
    navigate("/admin");
  };

  const handleFormChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="user-home-container">
      <h2>Available Cars for Rent to the users</h2>
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

      <button onClick={handleAddCarClick}>Add Car</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="Matricule">Matricule:</label>
            <input
              type="text"
              id="Matricule"
              name="Matricule"
              value={carData.Matricule}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Modele">Modele:</label>
            <input
              type="text"
              id="Modele"
              name="Modele"
              value={carData.Modele}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Marque">Marque:</label>
            <input
              type="text"
              id="Marque"
              name="Marque"
              value={carData.Marque}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Moteur">Moteur:</label>
            <input
              type="string"
              id="Moteur"
              name="Moteur"
              value={carData.Moteur}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Prix">Prix:</label>
            <input
              type="number"
              id="Prix"
              name="Prix"
              value={carData.Prix}
              onChange={handleFormChange}
              required
            />
          </div>
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default UserHomePage;
