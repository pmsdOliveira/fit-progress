import React from "react";
import "./sass/App.sass";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
