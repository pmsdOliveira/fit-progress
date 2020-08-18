import React from "react";

export default class Navbar extends React.Component {
  dropdown = () => {
    document.getElementById("web-nav-left").classList.toggle("visible");
  };

  render() {
    return (
      <nav id="navbar">
        <div className="mobile-nav">
          <a href="#login">
            <i className="fa fa-user" aria-hidden="true"></i> Log In
          </a>
          <a
            href="javascript:void(0);"
            className="menu"
            onClick={this.dropdown}
          >
            Menu &#9776;
          </a>
        </div>

        <div id="web-nav-left" className="web-nav-left">
          <a href="#water">Water</a>
          <div className="dropdown">
            <button className="dropbtn">Diet</button>
            <div class="dropdown-content">
              <a href="#">Ingredients</a>
              <a href="#">Dishes</a>
              <a href="#">Meals</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Workout</button>
            <div className="dropdown-content">
              <a>Running</a>
              <a>Pushups</a>
              <a>Dips</a>
              <a>Pullups</a>
              <a>Situps</a>
              <a>Plank</a>
              <a>Squats</a>
              <a>Lounges</a>
              <a>Weight Lifting</a>
            </div>
          </div>
          <a href="#about">About</a>
          <a href="#about">Contact Us</a>
          <div className="web-nav-right">
            <a href="#login">
              <i className="fa fa-user" aria-hidden="true"></i> Log In
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
