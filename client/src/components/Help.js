import React, { useState } from "react";

const Help = () => {
  const [text, setText] = useState("Need help?");

  const helpClick = () => {
    const container = document.getElementById("help-container");
    if (container.style.display === "flex") {
      container.style.display = "none";
      setText("Need help?");
    } else {
      container.style.display = "flex";
      setText("Close");
    }
  };

  return (
    <aside id="help" className="help">
      <button id="help-button" className="help-button" onClick={helpClick}>
        {text}
      </button>
      <div id="help-container" className="help-container">
        <div className="help-description">
          <h3>Talk to me directly and put me to the test.</h3>
          <p>
            Enter your name and Discord username here, and be connected directly
            to me. I'll be on hand to answer your questions and ready to crunch
            your numbers to see how the programs would better fit you. Don't
            worry, I'll only use your username to call you back and not for any
            other marketing purposes.
          </p>
        </div>
        <div className="help-data">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="#Tag"></input>
          <button className="call-button">Call me now</button>
        </div>
      </div>
    </aside>
  );
};

export default Help;
