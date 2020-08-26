import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-tab">
        <h3>Contact Me</h3>
        <p>E-mail: pmsd.oliveira@gmail.com</p>
        <div className="contact-social">
          <a href="https://github.com/pmsdOliveira">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://stackoverflow.com/users/14142445/pedroliveira">
            <i className="fab fa-stack-overflow"></i>
          </a>
          <a href="https://www.instagram.com/yell_oh_idk/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-tab">
        <h3>Legal</h3>
        <p>
          Diet and Workout&#8482;
          <br />
          Copyright &#169; 2020 <br />
          Fit Progress. All rights reserved.
        </p>
      </div>
      <div className="footer-tab">
        <h3>Report error</h3>
        <p>
          Something didn't work as expected? Provide feedback and help us
          helping you.
        </p>
        <button className="report-button">Submit</button>
      </div>
    </footer>
  );
};

export default Footer;
