import React from "react";

class Help extends React.Component {
  helpClick = () => {
    if (document.getElementById("help-container").style.display === "block")
      document.getElementById("help-container").style.display = "none";
    else document.getElementById("help-container").style.display = "block";
  };

  render() {
    return (
      <aside id="help" className="help">
        <button className="help-button" onClick={this.helpClick}>
          Need help?
        </button>
        <div id="help-container" className="help-container">
          BLABLABLA
        </div>
      </aside>
    );
  }
}

export default Help;
