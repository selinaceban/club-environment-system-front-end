import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkCredentials(username, password)) {
      navigate("/TemperatureComponent");
    } else {
      alert("Invalid username or password");
    }
  };

  const checkCredentials = (username, password) => {
    return username === "Ben Dover" && password === "lmao";
  };

  return (
    <form onSubmit={handleSubmit} className="login-wrapper">
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
