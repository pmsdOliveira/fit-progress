import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Help from "../components/Help";

class Login extends React.Component {
  render() {
    return (
      <div id="page-container">
        <Header />
        <Navbar />
        <LoginForm />
        <Footer />
        <Help />
      </div>
    );
  }
}

export default Login;
