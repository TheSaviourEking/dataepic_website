import React, { useState } from "react";
import "../styles/BeginnersTrack.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
import back from "../images/back.png"

const BeginnersTrack = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => setSelected((prev) => (prev === i ? null : i));

  const data = [
    {
      question: "Module 1: Introduction to Git Crash Course",
      answer:
        "Introduction to version control and collaborative software development.",
      buttons: [{ text: "Videos", to: "/page1" }],
    },
    {
      question: "Module 2: Advanced Git Techniques",
      answer:
        "Advanced Git techniques such as branching, merging, and rebasing.",
      buttons: [
        { text: "Videos", to: "/page2-1" },
        { text: "2 Months", to: "/page2-2" },
      ],
    },
    {
      question: "Module 3: Git Best Practices",
      answer:
        "Best practices for using Git in a team environment and avoiding common pitfalls.",
      buttons: [{ text: "2 Months", to: "/page3" }],
    },
  ];

  const mentors = [
    {
      name: "Sogo Ogundowole",
      role: "Senior Data Engineer",
      image: sogo,
    },
    {
      name: "Oluwatoba Adesugba",
      role: "ML Engineer and Technical Writer",
      image: toba,
    },
    {
      name: "Erioluwa Asiru",
      role: "Backend Developer",
      image: eri,
    },
  ];

  return (
    <div className="beginner_wrapper" id="beginnersPage">
      <div className="beginner-container">
        <div className="beginner-content">
          <div className="back_home">
            <Link className="scrolllink" to="/#sectionToScroll">
              <img src={back} alt="goback" className="goback" />
              {/* <span>Back</span> */}
            </Link>
          </div>

          <h1>
            Beginners <span className="orange">tracks</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Embark on your data adventure with our Beginner's Track. Designed
            for those taking their first strides into the world of data, this
            track provides a structured roadmap to transform novices into savvy
            analysts.
          </motion.p>

          <Link to="/FormInput" className="reserve-btns">
            <button>Reserve my spot</button>
          </Link>
        </div>

        <div className="faq_mentors_text">
          <h1>
            Track <span className="oranges">Modules</span>
          </h1>
        </div>

        <div className="faq_container">
          <div className="accordion_one">
            <div className="accordion_two">
              {data.map((item, i) => (
                <div className="item" key={i}>
                  <div className="accordion_three" onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span className="sign">{selected === i ? "-" : "+"}</span>
                  </div>
                  <div
                    className={
                      selected === i ? "accordion_four" : "accordion_five"
                    }
                  >
                    {item.answer}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mentors">
          <div className="beginners_mentors_text">
            <h1>
              Meet your <span className="oranges">Instructors</span>
            </h1>
            <p>These are your instructors for the next couple of weeks</p>
          </div>

          <div className="beginners_mentors_container">
            {mentors.map((mentor, i) => (
              <div className="beginners_mentor_wraps" key={i}>
                <div className="mentor_image_wrap">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="beginners_mentor_images"
                  />
                </div>
                <div className="mentor_para">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnersTrack;
