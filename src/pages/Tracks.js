import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
import ag from "../images/image4.png";
import "../styles/Tracks.css";
import "../styles/Home.css";
import "../styles/BeginnersTrack.css";
import {motion} from "framer-motion"

const Tracks = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="trackmain_container">
      <div className="track-container">
        <div className="track-content">
          <Link className="scrolllink" to="/#sectionToScroll">
            Go back
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Elevate your data career with <br /> our well curated
              <span className="orange"> dual tracks </span>
            </h1>

            <p>
              Our dual tracks, designed for both beginners and intermediates,
              are the gateways
              <br /> to a transformative learning experience. Pick a track to
              join and go through the <br />
              curriculum planned out and be part of the cohorts
            </p>
          </motion.div>
          <Link to="/FormInput" className="reserve-btns">
            <button>Reserve my spot</button>
          </Link>
        </div>
      </div>

      <div className="datamastery-container">
        <div className="datamastery-wrapper">
          <div className="datamastery-infos">
            <h2>
              Tracks & Program <span className="orange"> Modules </span>
            </h2>
            <p>
              Here is a list of all the tracks you will be exposed to for every
              cohort <br />
              Click to view on any you will consider taking this cohort.
            </p>
          </div>

          <div className="track-types">
            <div className="wrapper">
              <div className="track">
                <div className="track_info">
                  <div className="beginner-type">
                    <h2> Beginners Track</h2>
                  </div>

                  <div className="notes">
                    <h4>
                      Embark on your data adventure with our Beginner's Track
                    </h4>
                    <p>
                      This track is designed to refine your skills and prepare
                      you for more complex challenges.
                    </p>
                  </div>
                </div>

                <div to="" className="track_btn">
                  <div className="track_modules">
                    <div className="week-button">
                      <button>3 to 4 weeks</button>
                    </div>

                    <Link to="/BeginnersTrack" className="track_select_btn">
                      <button>View track modules</button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* intermediate track */}

              <div className="track">
                <div className="track_info">
                  <div className="intermediate-type">
                    <h2> Intermediate Track</h2>
                  </div>
                  <div className="notes">
                    <h4>
                      Elevate Your Data Mastery to New Heights with our
                      Intermediate Track
                    </h4>
                    <p className="paragraph-skills">
                      This track is designed to refine your skills and prepare
                      you for more complex challenges.
                    </p>
                  </div>
                </div>

                <div to="" className="track_btn">
                  <div className="track_modules">
                    <div className="week-button">
                      <button>3 to 4 weeks</button>
                    </div>
                    <Link to="/IntermediateTrack" className="track_select_btn2">
                      <button>View track modules</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="track">
                <div className="track_info">
                  <div className="intermediate-type">
                    <h2> Intermediate Track</h2>
                  </div>
                  <div className="notes">
                    <h4>
                      Elevate Your Data Mastery to New Heights with our
                      Intermediate Track
                    </h4>
                    <p className="paragraph-skills">
                      This track is designed to refine your skills and prepare
                      you for more complex challenges.
                    </p>
                  </div>
                </div>

                <div to="" className="track_btn">
                  <div className="track_modules">
                    <div className="week-button">
                      <button>3 to 4 weeks</button>
                    </div>
                    <Link to="/IntermediateTrack" className="track_select_btn2">
                      <button>View track modules</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mentors">
        <div className="ment">
          <div className="mentors_text">
            <h1>
              Learn from <span className="oranges"> The Best </span>
            </h1>
            <p>
              At DataEpic, our mentors are seasoned experts at the forefront of
              their respective <br /> fields, equipped with the knowledge and
              experience to guide learners through <br /> both the Beginner and
              Intermediate Tracks.
            </p>
          </div>

          <div className="mentors_container">
            <div className="mentor_wraps">
              <img src={sogo} alt="Sogo Image" className="mentor_images" />

              <div className="mentor_para">
                <h3>Sogo Ogundowole</h3>
                <p>Senior Data Engineer</p>
              </div>
            </div>

            <div className="mentor_wraps">
              <img src={toba} alt="Toba Image" className="mentor_images" />
              <div className="mentor_para">
                <h3>Oluwatoba Adesugba</h3>
                <p>ML Engineer and Technical Writer</p>
              </div>
            </div>

            <div className="mentor_wraps">
              <img src={eri} alt="Eri Image" className="mentor_images" />
              <div className="mentor_para">
                <h3>Erioluwa Asiru</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
