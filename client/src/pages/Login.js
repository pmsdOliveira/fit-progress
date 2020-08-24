import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;
