import React, { useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import Help from "../components/Help";

const Register = () => {
  return (
    <div id="page-container">
      <Header />
      <Navbar />
      <RegisterForm />
      <Footer />
      <Help />
    </div>
  );
};

export default Register;
