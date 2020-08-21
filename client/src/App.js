import React from "react";
import "./sass/App.sass";
//import "./css/App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

export default class App extends React.Component {
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
