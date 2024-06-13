import React, { useState } from "react";
import "../styles/Footer.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import logo from "../../src/images/logo.png";

const Footer = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="footer">
      <div>
        <Link to="" className="nabvar-logo">
          <img src={logo} alt="" className="footer-logo" />
        </Link>
      </div>

      {/* second part of navbar for footer */}
      <div className="middle-menu">
        <ul className={click ? "nav-menu active" : "nav-menuuu"}>
          <li className="nav-item">
            <Link
              to="/About"
              className="nav-link"
              // onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="Tracks" className="nav-link">
              Tracks
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Events"
              className="nav-link"
              // onClick={closeMobileMenu}
            >
              Events
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Faqform"
              className="nav-link"
              // onClick={closeMobileMenu}
            >
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
                className="social-icon-link twitter"
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
    </nav>
  );
};

export default Footer;
