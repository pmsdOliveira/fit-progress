import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="header">
          <a href="#">
            <h1 className="pageTitle">Fit Progress</h1>
          </a>
          <p className="pageSlogan">
            Fit Progress is the best platform to help you track your <br />
            nutrient intake along with your regular workouts.
          </p>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">Water</a>
              </li>
              <li>
                <a href="#">Ingredients</a>
              </li>
              <li>
                <a href="#">Dishes</a>
              </li>
              <li>
                <a href="#">Meals</a>
              </li>
              <li>
                <a href="#">Exercises</a>
              </li>
              <li>
                <a href="#">
                  <button class="signin">Sign In</button>
                </a>
              </li>
              <li>
                <a href="#">
                  <button class="signup">Sign Up</button>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
