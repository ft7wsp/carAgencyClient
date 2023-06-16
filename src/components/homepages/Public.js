import React, { useState, useEffect } from "react";
// import './PublicPage.css'; // Import the CSS file for styling
import axios from "axios";
import Slideshow from "./Sideshow";
import styles from "./public.module.css";

const Public = () => {
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

  console.log(cars);

  const handleBox = (id) => {
    console.log(id);

    axios
      .get(`http://localhost:8000/car/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.publicPage}>
      <section className={styles.signButtons}>
        <button className={styles.signInButton}>Sign In</button>
        <button className={styles.signUpButton}>Sign Up</button>
      </section>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>the title</h1>
      </div>
      <header className={styles.sideshow}>
        <Slideshow />
      </header>
      <section className={styles.carOffers}>
        <h2>Car Offers for you</h2>
        {/* Display car offers */}
        {/* Add your car offer component or implement your own logic here */}
      </section>

      <section className={styles.carOffers}>
        <div className={styles.carList}>
          {cars.map((car) => (
            <div className="forclick">
              <div key={car.ID_voiture} className={styles.carItem}>
                <h3>{car.Model}</h3>
                <p>Brand: {car.Marque}</p>
                <p>Engine: {car.Moteur}</p>
                <p>Price: {car.Prix}</p>
                <button onClick={(e) => handleBox(car.ID_voiture)}>
                  click
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Display car boxes */}
        {/* Add your car box component or implement your own logic here */}
      </section>
    </div>
  );
};

export default Public;
