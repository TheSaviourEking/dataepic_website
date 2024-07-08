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
          <TypeEffect />
          <div className="typewriter-container">
            <div className="whitestar">
              <img src={white_star} alt="" />
            </div>
          </div>

          <div className="maintext_para">
            <div className="polygondeep">
              <img src={polygon_deep} alt="" />
            </div>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Whether you're a budding analyst or an intermediate data wizard,
              DataEpic provides tailored mentorship to suit your needs
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Whether you're a budding analyst or an intermediate data wizard,
              DataEpic provides tailored mentorship to suit your needs
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
