import React, { useState } from "react";
import "./client.css";
import logo from "./logo.jpeg"; // Replace with the path to your logo image
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginClient = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/client", { username, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate(`/home`);
        } else {
          alert("Error loging in");
        }
      })
      .catch((err) => console.log(err));

    // Add login logic here
    console.log("Client Login:", username, password);
    // Clear the input fields
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container-bg">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Client Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <div className="login-options">
          <ul>
            <li>
              <Link className="red" to="/adminlog">
                Admin login
              </Link>
            </li>
            <li>
              <Link className="red" to="/login-user1">
                User Type 1
              </Link>
            </li>
            <li>
              <Link className="red" to="/login-user2">
                User Type 2
              </Link>
            </li>
            <p>
              <strong>or create new account</strong>
            </p>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
