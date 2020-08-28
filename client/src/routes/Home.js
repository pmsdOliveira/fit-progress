import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Help from "../components/Help";

class Home extends React.Component {
  render() {
    return (
      <div id="page-container">
        <Header />
        <Navbar />
        <Slider />
        <Footer />
        <Help />
      </div>
    );
  }
}

export default Home;
