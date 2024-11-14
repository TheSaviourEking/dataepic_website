import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
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
    to: "/Tracks",
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

const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (section) => {
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -70
      });
    } else {
      navigate('/', { replace: true });
      sessionStorage.setItem('scrollTo', section);
    }
  };

  return { scrollToSection };
};

const NavItem = ({ label, type, to, closeMobileMenu }) => {
  const location = useLocation();
  const { scrollToSection } = useScrollNavigation();
  const isHomePage = location.pathname === '/';

  const handleClick = (e) => {
    e.preventDefault();

    closeMobileMenu();
    if (type === "scroll") {
      scrollToSection(to);
    }
  };

  return (
    <li className="nav-item">
      {type === "scroll" ? (
        isHomePage ? (
          <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMobileMenu}
            className="nav-links"
          >
            {label}
          </ScrollLink>
        ) : (
          <Link
            to={to}
            className="nav-links"
            onClick={handleClick}
          >
            {label}
          </Link>
        )
      ) : (
        <Link
          to={to}
          className="nav-links"
          onClick={closeMobileMenu}
        >
          {label}
        </Link>
      )}
    </li>
  );
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo && location.pathname === '/') {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 500,
          smooth: true,
          offset: -70
        });
        sessionStorage.removeItem('scrollTo');
      }, 100);
    }
  }, [location]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
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
      </div>
    </nav>
  );
};

export default Navbar;
