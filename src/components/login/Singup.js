import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./singup.css";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    Nom: "",
    Prenom: "",
    Cin: "",
    Adresse: "",
    Tel: 0,
    Password: "",
    Age: 0,
    Genre: "Male",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:8000/signup", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert("Error signing up");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-bg">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              id="name"
              onChange={(e) => setValues({ ...values, Nom: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              required
              id="lastname"
              onChange={(e) => setValues({ ...values, Prenom: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cin">CIN</label>
            <input
              type="text"
              required
              id="cin"
              onChange={(e) => setValues({ ...values, Cin: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="email"
              required
              id="address"
              onChange={(e) =>
                setValues({ ...values, Adresse: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telephone Number</label>
            <input
              type="tel"
              required
              id="tel"
              onChange={(e) => setValues({ ...values, Tel: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              onChange={(e) =>
                setValues({ ...values, Password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              required
              id="age"
              onChange={(e) => setValues({ ...values, Age: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              required
              onChange={(e) => setValues({ ...values, Genre: e.target.value })}
            >
              <option defaultChecked value="male">
                Male
              </option>
              <option value="female">Female</option>
            </select>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <div className="login-options">
          <p>
            Already have an account? <Link to="/">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
