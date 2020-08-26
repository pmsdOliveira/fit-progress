import React, { useState, useEffect } from "react";

import Slide from "./Slide";

import slide1 from "../assets/water.jpg";
import slide2 from "../assets/diet.jpg";
import slide3 from "../assets/workout.jpg";
import slide4 from "../assets/stretch.jpg";

const Slider = () => {
  let sliderArr = [
    <Slide
      n="1"
      src={slide1}
      title="Keeping hydrated is crucial for health, but many people do not consume enough fluids."
      text="Fit Progress helps you keeping track of how much water you drink, providing you with goals, reminders and statistics according to your daily fluid intake."
      btn="Start now!"
    />,
    <Slide
      n="2"
      src={slide2}
      title="A healthy diet is not about staying thin but feeling great and improving your health."
      text="Fit Progress allows you to store the nutritional info for your daily meals, helping you control your calorie intake."
      btn="Start now!"
    />,
    <Slide
      n="3"
      src={slide3}
      title="There are side effects when starting a new workout routine besides stronger muscles."
      text="Fit Progress has a collection of challenges that increase difficulty depending on your performance and goals."
      btn="Start now!"
    />,
    <Slide
      n="4"
      src={slide4}
      title="Stretching may not be the most exciting part of working out but will make your workouts more efficient and safe."
      text="Fit Progress comes with a routine of timed full body stretches to ensure you don't end up with tight muscles."
      btn="Start now!"
    />,
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

  useEffect(() => {
    const interval = setInterval(() => {
      goRight();
    }, 5000);

    return () => clearInterval(interval);
  }, [x]);

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
      <button className="goLeft" onClick={goLeft}>
        <i className="fa fa-chevron-left"></i>
      </button>
      <button className="goRight" onClick={goRight}>
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
