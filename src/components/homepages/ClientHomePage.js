import React, { useState, useEffect } from "react";
import "./userHomePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const [cars, setCars] = useState([]);
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Fetch the list of available cars from the backend
    // Update the API endpoint to your backend server URL
    const fetchAllCars = async () => {
      const data = await axios.get("http://localhost:8000/cars");
      console.log(data);
      setCars(data.data);
    };
    fetchAllCars();

    axios
      .get("http://localhost:8000")
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "Success") {
          setAuth(true);
          navigate("/home");
        } else {
          setAuth(false);
          alert("Error not authorized");
        }
      })
      .catch((err) => console.log(err));

    // axios.post('http://localhost:8000/client/:i')
  }, []);

  console.log(auth);

  const handleDelete = (e) => {
    axios
      .get("http://localhost:8000/logout")
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user-home-container">
      {auth ? (
        <div>
          {" "}
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
          <button onClick={handleDelete}>logout</button>
        </div>
      ) : (
        <div>you are not autorized</div>
      )}
    </div>
  );
};

export default UserHomePage;
