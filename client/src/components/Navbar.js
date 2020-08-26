import React from "react";

const Navbar = () => {
  const animateDropdown = () => {
    document.getElementById("page-container").classList.toggle("menu-open");
    document.getElementById("web-nav").classList.toggle("visible");
    document.getElementById("menu").classList.toggle("animate");
  };

  return (
    <nav id="navbar">
      <div className="mobile-nav">
        <a href="/login">
          <i className="fa fa-user" aria-hidden="true"></i> Log In
        </a>
        <a
          href="javascript:void(0);"
          id="menu"
          className="menu"
          onClick={animateDropdown}
        >
          <div className="menu-container">
            <div className="menu-bar-1"></div>
            <div className="menu-bar-2"></div>
            <div className="menu-bar-3"></div>
          </div>
        </a>
      </div>

      <div id="web-nav" className="web-nav">
        <a href="#water">Water</a>
        <div className="dropdown">
          <button className="dropbtn">Diet</button>
          <div className="dropdown-content">
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
            <a>Weight lifting</a>
            <a>Pullups</a>
            <a>Situps</a>
            <a>Plank</a>
            <a>Squats</a>
            <a>Lounges</a>
          </div>
        </div>
        <a href="#stretch">Stretch</a>
        <div className="web-nav-right">
          <a href="/login">
            <i className="fa fa-user" aria-hidden="true"></i> Log In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
