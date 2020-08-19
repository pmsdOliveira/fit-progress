import React, { useState } from "react";

import Slide from "./Slide";

import slide1 from "../assets/water.jpg";
import slide2 from "../assets/diet.jpg";
import slide3 from "../assets/workout.jpg";
import slide4 from "../assets/stretch.jpg";

const Slider = () => {
  let sliderArr = [
    <Slide src={slide1} />,
    <Slide src={slide2} />,
    <Slide src={slide3} />,
    <Slide src={slide4} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) setX(-100 * (sliderArr.length - 1));
    else setX(x + 100);
  };

  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) setX(0);
    else setX(x - 100);
  };

  return (
    <div id="slider" className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fa fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
