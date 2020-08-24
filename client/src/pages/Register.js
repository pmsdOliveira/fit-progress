import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

class Register extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <RegisterForm />
        <Footer />
      </div>
    );
  }
}

export default Register;
