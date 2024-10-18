import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Navbar.css";
import logo from "../images/logo.png";

const navItems = [
  {
    label: "About",
    type: "scroll",
    to: "about_scroll",
  },
  {
    label: "Tracks",
    type: "link",
    to: "Tracks#about",
  },
  {
    label: "Events",
    type: "link",
    to: "/Events",
  },
  {
    label: "FAQs",
    type: "scroll",
    to: "faq-wrapper",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            type={item.type}
            to={item.to}
            closeMobileMenu={closeMobileMenu}
          />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ label, type, to, closeMobileMenu }) => {
  return (
    <li className="nav-item">
      {type === "scroll" ? (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
          className="nav-links"
        >
          {label}
        </ScrollLink>
      ) : (
        <Link to={to} className="nav-links" onClick={closeMobileMenu}>
          {label}
        </Link>
      )}
    </li>
  );
};

export default Navbar;
