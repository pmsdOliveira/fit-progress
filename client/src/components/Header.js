import React from "react";

class Header extends React.Component {
  dietDropdown = () => {
    document.getElementById("dietDropdown").classList.toggle("extend");
  };

  workoutDropdown = () => {
    document.getElementById("workoutDropdown").classList.toggle("extend");
  };

  /* window.onClick = (e) => {
    if (!event.target.matches("."))
  }; */

  render() {
    return (
      <header id="header">
        <div className="title">
          <a href="#">
            <h1>Fit Progress</h1>
          </a>
          <p>
            Fit Progress is the best platform to help you track your nutrient
            intake along with your workouts.
          </p>
        </div>

        <div className="navbar">
          <a href="#water" className="bignav">
            Water
          </a>
          <div class="dropdown">
            <button className="dropdownBtn" onClick={this.dietDropdown}>
              Diet &#9660;
            </button>
            <div id="dietDropdown" className="dropdownContent">
              <a>Ingredients</a>
              <a>Dishes</a>
              <a>Meals</a>
            </div>
          </div>
          <div class="dropdown">
            <button className="dropdownBtn" onClick={this.workoutDropdown}>
              Workout &#9660;
            </button>
            <div id="workoutDropdown" className="dropdownContent">
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
          <a className="bignav signButton">Sign In</a>
          <a className="bignav signButton">Sign Up</a>
          {/* <a className="smallnav">&#9776;</a> */}
        </div>
      </header>
    );
  }
}

export default Header;
