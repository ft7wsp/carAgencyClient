import React, { useState } from "react";
import "./client.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("User Login:", username, password);
    // Clear the input fields
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container-bg">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Adminame:</label>
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
          <Link to="/admin">
            <button type="submit">Login</button>
          </Link>
        </form>
        <div className="login-options">
          <ul>
            <li>
              <Link to="/login">Client Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
