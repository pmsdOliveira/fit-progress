import React from "react";
import icon from "../assets/icon.png";
import title from "../assets/title.png";

class Header extends React.Component {
  dropdown = () => {
    document.getElementById("topnav").classList.toggle("responsive");
  };

  render() {
    return (
      <header id="header">
        <div className="logo">
          <a href="#home">
            <img src={icon} alt="Fit Progress"></img>
            <img src={title} alt="Diet and Workout Progress"></img>
          </a>
        </div>
        <div id="topnav" className="topnav">
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
            </div>
          </div>
          <a href="#about">About</a>
          <a href="#about">Contact Us</a>
          <div className="topnav-right">
            <a href="#login">
              <i class="fa fa-user" aria-hidden="true"></i> Log In
            </a>
          </div>
          <a
            href="javascript:void(0);"
            className="menu"
            onClick={this.dropdown}
          >
            &#9776;
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
