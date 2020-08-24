import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="about">
          <h3>About Us</h3>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
        </div>
        <div className="report">
          <h3>Report Error</h3>
        </div>
        <div className="copyright">
          <h3>Copyright</h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
