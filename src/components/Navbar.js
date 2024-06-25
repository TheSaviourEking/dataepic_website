import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Navbar.css";
import logo from "../../src/images/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <ScrollLink
            to="about_scroll"
            smooth={true}
            duration={500}
            onClick={closeMobileMenu}
            className="nav-links"
          >
            About
          </ScrollLink>
        </li>
        <li className="nav-item">
          <Link
            to="Tracks#about"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Tracks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Events" className="nav-links" onClick={closeMobileMenu}>
            Events
          </Link>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="faq-wrapper"
            smooth={true}
            duration={500}
            onClick={closeMobileMenu}
            className="nav-links"
          >
            FAQs
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
