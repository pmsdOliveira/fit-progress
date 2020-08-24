import React from "react";
import icon from "../assets/icon.png";
import title from "../assets/title.png";

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="logo">
          <a href="/">
            <img src={icon} alt="Fit Progress"></img>
            <img src={title} alt="Diet and Workout Progress"></img>
          </a>
        </div>
      </header>
    );
  }
}
