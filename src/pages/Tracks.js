import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
import "../styles/Tracks.css";
import "../styles/Home.css";
import "../styles/BeginnersTrack.css";

const Tracks = () => {
  const trackDetails = [
    {
      title: "Beginners Track",
      description: {
        heading: "Embark on your data adventure with our Beginner's Track",
        text: "This track is designed to refine your skills and prepare you for more complex challenges.",
      },
      buttonText: "View track modules",
      link: "/BeginnersTrack",
      className: "beginner-type",
    },
    {
      title: "Intermediate Track",
      description: {
        heading: "Elevate Your Data Mastery to New Heights with our Intermediate Track",
        text: "This track is designed to refine your skills and prepare you for more complex challenges.",
      },
      buttonText: "View track modules",
      link: "/IntermediateTrack",
      className: "intermediate-type",
    },
    {
      title: "Intermediate Track",
      description: {
        heading: "Elevate Your Data Mastery to New Heights with our Intermediate Track",
        text: "This track is designed to refine your skills and prepare you for more complex challenges.",
      },
      buttonText: "View track modules",
      link: "/IntermediateTrack",
      className: "intermediate-type",
    },
  ];

  const mentors = [
    { image: sogo, name: "Sogo Ogundowole", role: "Senior Data Engineer" },
    { image: toba, name: "Oluwatoba Adesugba", role: "ML Engineer and Technical Writer" },
    { image: eri, name: "Erioluwa Asiru", role: "Backend Developer" },
  ];


  const TrackCard = ({ title, description, buttonText, link, className }) => (
    <div className="track">
      <div className="track_info">
        <div className={className}>
          <h2>{title}</h2>
        </div>
        <div className="notes">
          <h4>{description.heading}</h4>
          <p>{description.text}</p>
        </div>
      </div>

      <div className="track_btn">
        <div className="track_modules">
          <div className="week-button">
            <button>3 to 4 weeks</button>
          </div>
          <div className="click_button">
            <Link to={link} className="track_select_btn">
              <button>{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );


  const MentorCard = ({ image, name, role }) => (
    <div className="mentor_wraps">
      <div className="mentor_image_wrap">
        <img src={image} alt={name} className="mentor_images" />
      </div>
      <div className="mentor_para">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );

  return (
    <div className="trackmain_container">
      <div className="track-container">
        <div className="track-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="track-textarea"
          >
            <h1>
              Elevate your data career with our well curated
              <span className="orange"> dual tracks </span>
            </h1>
            <p>
              Our dual tracks, designed for both beginners and intermediates, are the gateways to a transformative learning experience. Pick a track to join and go through the curriculum planned out and be part of the cohorts.
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
              Here is a list of all the tracks you will be exposed to for every cohort. Click to view on any you will consider taking this cohort.
            </p>
          </div>
          <div className="track-types">
            <div className="wrapper">
              {trackDetails.map((track, index) => (
                <TrackCard key={index} {...track} />
              ))}
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
              At DataEpic, our mentors are seasoned experts at the forefront of their respective fields, equipped with the knowledge and experience to guide learners through both the Beginner and Intermediate Tracks.
            </p>
          </div>
          <div className="mentors_container">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
