import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "../styles/Navbar.css";
import logo from "../../src/images/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nabvar-logo">
            <img
              src={logo}
              alt=""
              className="navbar-logo"
              onClick={closeMobileMenu}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* second part of navbar */}
          <div className="nav-ses-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                {/* <Link to="About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link> */}
                <ScrollLink
                  to="about_scroll"
                  smooth={true}
                  duration={500}
                  onClick={closeMobileMenu}
                  className="nav-links"
                >
                  About{" "}
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
                <Link
                  to="/Events"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                {/* <Link
                to="/Faqform"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                FAQs
              </Link> */}
                <ScrollLink
                  to="faq-wrapper"
                  smooth={true}
                  duration={500}
                  onClick={closeMobileMenu}
                  className="nav-links nav-links-last"
                >
                  FAQs
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import "../styles/Navbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../src/images/logo.png";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="nabvar-logo">
//           <img src={logo} alt="" className="navbar-logo" />
//         </Link>
//       </div>

//       <ul className="nav-menu">
//         <li className="">
//           <ScrollLink
//             to="about_scroll"
//             smooth={true}
//             duration={500}
//             onClick={closeMobileMenu}
//             className="nav-links"
//           >
//             About
//           </ScrollLink>
//         </li>

//         <li className="">
//           <Link
//             to="Tracks#about"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Tracks
//           </Link>
//         </li>

//         <li className="">
//           <Link to="/Events" className="nav-links" onClick={closeMobileMenu}>
//             Events
//           </Link>
//         </li>

//         <li className="">
//           <ScrollLink
//             to="faq-wrapper"
//             smooth={true}
//             duration={500}
//             onClick={closeMobileMenu}
//             className="nav-links"
//           >
//             FAQs
//           </ScrollLink>
//         </li>

//         <div className="mobile-menu">
//           {/* <Link to="/" className="nabvar-logo">
//             <img src={logo} alt="" className="navbar-logo" />
//           </Link> */}

//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//         </div>
//       </ul>

//       {/* <ul className="nav-menu hide">

//         <li className="">
//           <ScrollLink
//             to="about_scroll"
//             smooth={true}
//             duration={500}
//             onClick={closeMobileMenu}
//             className="nav-links"
//           >
//             About
//           </ScrollLink>
//         </li>

//         <li className="">
//           <Link
//             to="Tracks#about"
//             className="nav-links"
//             onClick={closeMobileMenu}
//           >
//             Tracks
//           </Link>
//         </li>

//         <li className="">
//           <Link to="/Events" className="nav-links" onClick={closeMobileMenu}>
//             Events
//           </Link>
//         </li>

//         <li className="">
//           <ScrollLink
//             to="faq-wrapper"
//             smooth={true}
//             duration={500}
//             onClick={closeMobileMenu}
//             className="nav-links"
//           >
//             FAQs
//           </ScrollLink>
//         </li>

//       </ul> */}

//       <div className="hamburger">
//         <FaBars />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
