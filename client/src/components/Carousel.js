import React from "react";

import water from "../assets/drinking-water.jpg";

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.slideIndex = 1;
  }

  currentSlide = (n) => {
    this.showSlides((this.slideIndex = n));
  };

  changeSlide = (n) => {
    this.showSlides((this.slideIndex += n));
  };

  showSlides = (n) => {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dots");

    if (n > slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    slides[this.slideIndex - 1].className += " active";
  };

  render() {
    return (
      <div className="slideshow-container">
        <div className="slides fade">
          <div className="numbertext">1 / 3</div>
          <img src={water}></img>
          <div className="text">Caption Text</div>
        </div>

        <div className="slides fade">
          <div className="numbertext">2 / 3</div>
          <img src={water}></img>
          <div className="text">Caption Two</div>
        </div>

        <div className="slides fade">
          <div className="numbertext">3 / 3</div>
          <img src={water}></img>
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={this.changeSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={this.changeSlide(1)}>
          &#10095;
        </a>

        <div>
          <span className="dot" onClick=""></span>
          <span className="dot" onClick=""></span>
          <span className="dot" onClick=""></span>
        </div>
      </div>
    );
  }
}
