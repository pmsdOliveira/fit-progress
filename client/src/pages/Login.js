import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

import "../styles/sass/Login.sass";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <LoginForm />
      </div>
    );
  }
}

export default Login;
