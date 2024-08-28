import React from "react";
import { useState } from "react";
import "../styles/BeginnersTrack.css";
import { Link } from "react-router-dom";
import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
// import ag from "../images/image4.png";
import { motion } from "framer-motion";
import back from "../images/goBack.png";

function IntermediateTrack() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const data = [
    {
      question: "Module 1: Unit Testing",
      answer: "Writing and validating tests for code",
      // buttons: [{ text: "Button 1", to: "/page1" }],
    },
    {
      question: "Module 2: Data Wrangling",
      answer: "Team tasks (2 students per task)",
      // buttons: [
      //   { text: "Button 1", to: "/page2-1" },
      //   { text: "Button 2", to: "/page2-2" },
      // ],
    },
    {
      question: "Module 3: Understanding ETL Pipelines",
      answer: "Understanding variations like ELT, LTE, and ETL",
      // buttons: [{ text: "Button 1", to: "/page3" }],
    },
    {
      question: "Module 4: Tool-specific Training",
      answer: "Python, SQL, Airflow, Docker, Polars, AWS, and more",
      // buttons: [{ text: "Button 1", to: "/page1" }],
    },
    {
      question: "Module 5: Backend Development",
      answer: "Introduction to Flask for serverless solutions",
      // buttons: [{ text: "Button 1", to: "/page1" }],
    },
    {
      question: "Module 6: Cloud Technologies",
      answer: "Basics and use-cases",
      // buttons: [{ text: "Button 1", to: "/page1" }],
    },
    {
      question: "Module 7: Capstone Projects",
      answer:
        " An intensive, cumulative project that brings together various concepts taught.",
      buttons: [{ text: "2 - 3 weeks", to: "/page2" }],
    },
  ];

  return (
    <div className="beginner_wrapper">
      <div className="beginner-container">
        <div className="beginner-content" id="intermediate-content">
          <div className="back_home">
            <Link
              className="scrolllink"
              to="/#beginnersPage"
              id="scroll_display"
            >
              <img src={back} alt="goback" className="goback" />
              <Link className="scrolllink" to="/#sectionToScroll">
                Back
              </Link>
            </Link>
          </div>

          <h1>
            Intermediate <span className="orange"> Modules</span>
          </h1>
          <motion.p
            id="intermediate_para"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Already familiar with the basics? The Intermediate Track is your
            pathway to elevating your data mastery to new heights. Perfect for
            those with some experience in data, this track is designed to refine
            your skills and prepare you for more complex challenges.
          </motion.p>

          <Link to="/FormInput" className="reserve-btns">
            <button>Reserve my spot</button>
          </Link>
        </div>
        {/* </div> */}

        <div className="faq-wrappers">
          <div className="faq-wrapper">
            <div className="faq_mentors_text">
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Track <span className="oranges"> Modules</span>
              </motion.h1>
            </div>
          </div>
        </div>

        <div className="faq_container">
          <div className="accordion_one">
            <div className="accordion_two">
              {data.map((item, i) => (
                <div className="item" key={i}>
                  <div className="accordion_three" onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span className="sign">{selected === i ? "-" : "+"} </span>
                  </div>
                  <div
                    className={
                      selected === i ? "accordion_four" : "accordion_five"
                    }
                  >
                    {item.answer}
                    {item.buttons && (
                      <div className="accordion_buttons">
                        {item.buttons.map((button, j) => (
                          <Link key={j} to={button.to}>
                            <button className={j % 2 === 0 ? "even" : "odd"}>
                              {button.text}
                            </button>
                            {j < item.buttons.length - 1 && (
                              <span className="button_gap" />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mentors">
            <div className="beginners_mentors_text">
              <h1>
                Meet your <span className="oranges"> Instructors </span>
              </h1>
              <p>These are your instructor for the next couple of weeks</p>
            </div>

            <div className="beginners_mentors_container">
              <div className="beginners_mentor_wraps">
                <div className="mentor_image_wrap ">
                  <img
                    src={sogo}
                    alt="Sogo"
                    className="beginners_mentor_images"
                  />
                </div>
                <div className="mentor_para">
                  <h3>Sogo Ogundowole</h3>
                  <p>Senior Data Engineer</p>
                </div>
              </div>

              <div className="beginners_mentor_wraps">
                <div className="mentor_image_wrap ">
                  <img
                    src={toba}
                    alt="Toba"
                    className="beginners_mentor_images"
                  />
                </div>
                <div className="mentor_para">
                  <h3>Oluwatoba Adesugba</h3>
                  <p>ML Engineer and Technical Writer</p>
                </div>
              </div>

              <div className="beginners_mentor_wraps">
                <div className="mentor_image_wrap ">
                  <img
                    src={eri}
                    alt="Eri"
                    className="beginners_mentor_images"
                  />
                </div>{" "}
                <div className="mentor_para">
                  <h3>Erioluwa Asiru</h3>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntermediateTrack;
