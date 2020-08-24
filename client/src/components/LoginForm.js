import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div id="login-form" className="login-form">
        <h2>
          <i className="fa fa-user" aria-hidden="true"></i> Log In
        </h2>
        <div className="login-data">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
        </div>
        <div className="remember-me">
          <input type="checkbox"></input>
          <label>Remember me</label>
          <a href="#forgot">Forgotten details?</a>
        </div>
        <button className="signin-button">Sign In</button>
        <a className="signup">Don't have an account? Sign Up now!</a>
      </div>
    );
  }
}

export default LoginForm;
