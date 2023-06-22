import React, { useState, useEffect } from "react";
import "./userHomePage.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UserHomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [dateTake, setDateTake] = useState("");
  const [dateReturn, setDateReturn] = useState("");
  const [activeCar, setActiveCar] = useState("");

  const [cars, setCars] = useState([]);
  const [auth, setAuth] = useState(false);

  let id = useParams().id;
  console.log(id);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Fetch the list of available cars from the backend
    // Update the API endpoint to your backend server URL
    const fetchAllCars = async () => {
      const data = await axios.get("http://localhost:8000/cars");
      setCars(data.data);
    };
    fetchAllCars();

    axios
      .get("http://localhost:8000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          navigate(
            `/home/hey${id.substring(
              0,
              Math.floor(id.length / 2)
            )}hoo${id.substring(Math.floor(id.length / 2, -1))}`
          );
        } else {
          setAuth(false);
          alert("Error not authorized");
        }
      })
      .catch((err) => console.log(err));

    // axios.post('http://localhost:8000/client/:i')
  }, []);

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

  const handleBox = (idCar) => {
    setShowForm(!showForm); // Set showForm state to true when the button is clicked

    // const usr = user.split("@")[0];
    axios
      .get(`http://localhost:8000/client/${id}`)
      .then((res) => {
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8000/car/${idCar}`)
      .then((res) => {
        setActiveCar(res.data[0]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendRequest = (e) => {
    console.log(activeCar);
    console.log(id.replace(/hey|hoo/g, "") + "@gmail.com");
    e.preventDefault();
    axios
      .post("http://localhost:8000/client/req", {
        msg: ` take ${dateTake} return ${dateReturn} car ${JSON.stringify(
          activeCar[0]
        )}`,
        id: id.replace(/hey|hoo/g, "") + "@gmail.com",
      })
      .then((rsp) => {
        console.log(rsp);
      })
      .catch((err) => console.log(err));
  };

  const handleReq = () => {
    axios
      .get(`http://localhost:8000/client/${id}`)
      .then((res) => {
        setRequests(res.data[0].demandes.split("end"));
        setShowRequests(true);
        console.log(res.data[0].demandes.split("end"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputTake = (e) => {
    setDateTake(e.target.value);
  };

  const handleInputReturn = (e) => {
    setDateReturn(e.target.value);
  };

  return (
    <div className="user-home-container">
      {auth ? (
        <div>
          {" "}
          <h2>Available Cars for Rent</h2>
          {showForm && (
            <form className="form-container">
              <input
                type="datetime-local"
                name="name"
                placeholder="date to take"
                className="form-input"
                onChange={(e) => handleInputTake(e)}
              />
              <input
                type="datetime-local"
                name="email"
                placeholder="date to return"
                className="form-input"
                onChange={(e) => handleInputReturn(e)}
              />
              <button
                onClick={(e) => sendRequest(e)}
                type="submit"
                className="form-submit-button"
              >
                Submit
              </button>
            </form>
          )}
          <div className="car-list">
            {cars.map((car) => (
              <div key={car.ID_voiture} className="car-item">
                <h3>{car.Model}</h3>
                <p>Brand: {car.Marque}</p>
                <p>Engine: {car.Moteur}</p>
                <p>Price: {car.Prix}</p>
                <button onClick={(e) => handleBox(car.ID_voiture)}>
                  click
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleReq}>see msgs </button>
          {showRequests && requests.map((req) => <>{req + " "}</>)}
          <button onClick={handleDelete}>logout</button>
        </div>
      ) : (
        <div>you are not autorized</div>
      )}
    </div>
  );
};

export default UserHomePage;
