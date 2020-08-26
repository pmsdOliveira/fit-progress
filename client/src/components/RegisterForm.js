import React from "react";

const RegisterForm = () => {
  return (
    <div id="sign-form" className="sign-form">
      <h2>Register</h2>
      <div className="sign-data">
        <input type="text" placeholder="Username"></input>
        <input type="text" placeholder="Real name (optional)"></input>
        <input type="text" placeholder="E-mail"></input>
        <input type="text" placeholder="Password"></input>
        <input type="text" placeholder="Confirm password"></input>
      </div>
      <div className="remember-me">
        <input type="checkbox"></input>
        <label>Receive e-mail notifications from Fit Progress</label>
      </div>
      <button className="sign-button">Sign Up</button>
      <a href="/login" className="sign-switch">
        Already have an account? Sign In now!
      </a>
    </div>
  );
};

export default RegisterForm;
