import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import "../styles/sass/Home.sass";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default Home;
