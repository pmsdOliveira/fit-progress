import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default Home;
