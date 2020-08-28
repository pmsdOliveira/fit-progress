import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WaterHero from "../components/WaterHero";
import WaterFacts from "../components/WaterFacts";
import Footer from "../components/Footer";
import Help from "../components/Help";

const Water = () => {
  return (
    <div id="page-container">
      <Header />
      <Navbar />
      <WaterHero />
      <WaterFacts />
      <Footer />
      <Help />
    </div>
  );
};

export default Water;
