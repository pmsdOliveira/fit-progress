import React from "react";

import water from "../assets/water-hero.png";

const WaterHero = () => {
  return (
    <div id="water-hero" className="water-hero">
      <div className="water-not-logged">
        <h2>You are not logged in!</h2>
        <p>
          Sign in or create a new account if you don't have one, so you can
          start controlling your fluid intake now!
        </p>
        <a href="/login" className="hero-login">
          START NOW <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <img src={water}></img>
    </div>
  );
};

export default WaterHero;
