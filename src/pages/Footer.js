import React, { useState } from "react";
import "../styles/Footer.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import logo from "../../src/images/logo.png";

const Footer = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <footer className="footer navbar foot">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-logo" onClick={handleClick}>
            <img src={logo} alt="" className="footer-logo" />
          </Link>
        </div>
        <div className="middle-menu">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/About" className="nav-link" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Tracks" className="nav-link" onClick={handleClick}>
                Tracks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Events" className="nav-link" onClick={handleClick}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Faqform" className="nav-link" onClick={handleClick}>
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <div className="social-media-wrap">
            <div className="social-icons">
              <div className="media-wrap">
                <Link
                  className="social-icon-link twitter"
                  to="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </Link>
              </div>
              <div className="media-wrap">
                <Link
                  className="social-icon-link instagram"
                  to="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </Link>
              </div>
              <div className="media-wrap">
                <Link
                  className="social-icon-link linkedin"
                  to="/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
