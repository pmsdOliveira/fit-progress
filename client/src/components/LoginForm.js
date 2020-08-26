import React from "react";

const LoginForm = () => {
  return (
    <div id="sign-form" className="sign-form">
      <h2>
        <i className="fa fa-user" aria-hidden="true"></i> Log In
      </h2>
      <div className="sign-data">
        <input type="text" placeholder="Username"></input>
        <input type="text" placeholder="Password"></input>
      </div>
      <div className="remember-me">
        <input type="checkbox"></input>
        <label>Remember me</label>
        <a href="#forgot">Forgotten details?</a>
      </div>
      <button className="sign-button">Sign In</button>
      <a href="/register" className="sign-switch">
        Don't have an account? Sign Up now!
      </a>
    </div>
  );
};

export default LoginForm;
