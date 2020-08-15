import React from "react";

class Header extends React.Component {
  menuDropdown = () => {
    document.getElementById("header").classList.toggle("responsive");
  };

  render() {
    return (
      <header id="header" className="">
        <div className="title">
          <a href="#logo">
            <h1>Fit Progress</h1>
          </a>
          <p>
            Fit Progress is the best platform to help you track your nutrient
            intake along with your workouts.
          </p>
        </div>

        <div id="navbar" className="navbar">
          <a>Water</a>
          <div className="dropdown">
            <button className="dropdownBtn">
              Diet <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdownContent">
              <a>Ingredients</a>
              <a>Dishes</a>
              <a>Meals</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdownBtn">
              Workout <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdownContent">
              <a>Running</a>
              <a>Pushups</a>
              <a>Dips</a>
              <a>Pullups</a>
              <a>Situps</a>
              <a>Plank</a>
              <a>Squats</a>
              <a>Lounges</a>
            </div>
          </div>
          <a className="signBtn">Sign In</a>
          <a className="signBtn">Sign Up</a>
          <a className="menu" onClick={this.menuDropdown}>
            <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
