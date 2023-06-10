import React, { useState } from "react";
import "./user.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
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
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>User Login</h2>
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

        <Link to={"/home"}>
          <button type="submit">Submit</button>
        </Link>
        <Link to={"/adminlog"}>
          <button type="submit">log as admin</button>
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;
