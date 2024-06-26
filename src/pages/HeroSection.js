import React from "react";
import { Link } from "react-router-dom";
import star1 from "../images/star-img.png";
import white_star from "../images/white_star.png";
import polygon_deep from "../images/Polygon_deep.png";
import "../styles/Home.css";
import { motion } from "framer-motion";
import TypeEffect from "../components/TypeEffect";

function HeroSection() {
  return (
    <div className="web_container">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="custom-heading">
            <div className="whitestar">
              {/* <img src={white_star} alt="" /> */}
            </div>
            <span className="hero_font">
              <TypeEffect className="custom-type-effect" />
            </span>
          </h1>
          
          <div>
            <div className="polygondeep">
              <img src={polygon_deep} alt="" />
            </div>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Whether you're a budding analyst or an intermediate data wizard,
              DataEpic <br />
              provides tailored mentorship to suit your needs
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Whether you're a budding analyst or an intermediate data wizard,
              DataEpic <br />
              provides tailored mentorship to suit your needs
            </motion.p>
          </div>
          <Link to="/FormInput" className="reserve-btns">
            <button>Reserve my spot</button>
          </Link>
          <div>
            <div className="bluestar">
              <img src={star1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
