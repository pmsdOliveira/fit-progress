import React, { useState } from "react";

import useInput from "../hooks/useInput";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    console.log(username, name, mail, password, confirmPassword);
  };

  return (
    <div id="sign-form" className="sign-form">
      <h2>Register</h2>
      <div className="sign-data">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <input
          type="text"
          placeholder="Real name (optional)"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        ></input>
      </div>
      <div className="remember-me">
        <input type="checkbox"></input>
        <label>Receive e-mail notifications from Fit Progress</label>
      </div>
      <button className="sign-button" onClick={onSubmit}>
        SIGN UP
      </button>
      <a href="/login" className="sign-switch">
        Already have an account? Sign In now!
      </a>
    </div>
  );
};

export default RegisterForm;
