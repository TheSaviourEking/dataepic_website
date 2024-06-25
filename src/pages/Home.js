import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
import ag from "../images/image4.png";
import bushro from "../images/image15.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import entrylevel1 from "../images/entrylevel1.png";
import entrylevel2 from "../images/entrylevel2.png";
import polygondeep from "../images/Polygon_deep.png";
import polygonlight from "../images/Polygon_light.png";
// import Footer from "../pages/Footer";
import "../styles/Tracks.css";
import "../styles/Home.css";
import { motion } from "framer-motion";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const data = [
  {
    question: "What is the data epic mentorship program?",
    answer:
      "It's a program designed to help learners better understand beginner and advanced concepts in the data sphere",
  },

  {
    question: "What are the benefits of this mentorship program?",
    answer:
      "There are many benefits to participating in the mentorship program: Increased knowledge and skills, Improved career development, Enhanced confidence and self-esteem, Stronger professional networks",
  },

  {
    question: "Who can participate in a mentorship program?",
    answer:
      "It's a program Anyone can participate in this mentorship program, regardless of their age, experience, or background. The program can be beneficial for people in all stages of their lives, from students and young professionals to experienced executives looking to switch career tracks. to help learners better understand beginner and advanced concepts in the data sphere",
  },
  {
    question: "How does the mentorship program work?",
    answer:
      "There are two tracks in the mentorship (Beginner and Intermediate). Mentors and mentees meet on a weekly basis to discuss their goals, challenges, progress and give tasks depending on their tracks. Mentors also provide mentees with feedback, advice, and resources.",
  },
  {
    question: "What is expected of mentees in the program?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
];

function Home() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="container">
      <HeroSection />

      <div className="main_wrapper">
        <div className="about_scroll" id="about">
          <h1>
            We are <span className="orange"> passionate </span> about providing
            a platform that empowers <span className="yellow"> beginners </span>{" "}
            and
            <span className="blue"> intermediate data specialists </span>
            to harness the full potential of{" "}
            <span className="orange"> data </span>
          </h1>

          <div className="deep">
            <img src={polygondeep} alt="" />
          </div>

          <div>
            <div className="light">
              <img src={polygonlight} alt="" />
            </div>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Our curated mentorship programs, interactive challenges, and
              hands-on projects are crafted to propel you toward data mastery.
              We're here to fuel your aspirations and propel you to new heights
              in the data landscape.
            </motion.p>
          </div>
        </div>

        <div className="datamastery-container">
          <div className="datamastery-wrapper">
            <div className="datamastery-info">
              <h2>
                <span className="orange">Beginner and Intermediate</span> Paths
                to Data Mastery
              </h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Whether you're stepping into the realm of data for the first
                time or you're an intermediate explorer seeking to refine your
                skills, our dual tracks cater to your specific needs and
                ambitions.
              </motion.p>
            </div>

            <div className="track-type">
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

                      <div>
                        <Link to="/BeginnersTrack" className="track_select_btn">
                          <button>View track modules</button>
                        </Link>
                      </div>
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

                      <div>
                        <Link
                          to="/IntermediateTrack"
                          className="track_select_btn2"
                        >
                          <button> View track modules </button>
                        </Link>
                      </div>
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
                      <Link
                        to="/IntermediateTrack"
                        className="track_select_btn2"
                      >
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
            <div className="new_mentor_para">
              <h1>
                Learn from <span className="oranges"> The Best </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                At DataEpic, our mentors are seasoned experts at the forefront
                of their respective fields, equipped with the knowledge and
                experience to guide learners through both the Beginner and
                Intermediate Tracks.
              </motion.p>
            </div>

            <div className="mentors_container">
              <div className="mentor_wraps">
                <img src={sogo} alt="Sogo" className="mentor_images" />

                <div className="mentor_para">
                  <h3>Sogo Ogundowole</h3>
                  <p>Senior Data Engineer</p>
                </div>
              </div>

              <div className="mentor_wraps">
                <img src={toba} alt="Toba" className="mentor_images" />
                <div className="mentor_para">
                  <h3>Oluwatoba Adesugba</h3>
                  <p>ML Engineer and Technical Writer</p>
                </div>
              </div>

              <div className="mentor_wraps">
                <img src={eri} alt="Eri" className="mentor_images" />
                <div className="mentor_para">
                  <h3>Erioluwa Asiru</h3>
                  <p>Backend Developer</p>
                </div>
              </div>

              <div className="mentor_wraps">
                <img src={ag} alt="Ag" className="mentor_images" />
                <div className="mentor_para">
                  <h3>Amazing-Grace Olutomilayo</h3>
                  <p>Data Engineer</p>
                </div>
              </div>

              <div className="mentor_wraps">
                <img src={bushro} alt="Bushro" className="mentor_images" />
                <div className="mentor_para">
                  <h3>Hammed Bushira</h3>
                  <p>DataOps Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why data epic */}
        <div className="data_epic">
          <div className="data_new">
            <div className="dataepic_mentors_text">
              <h1>
                Why <span className="oranges"> Data Epic? </span>
              </h1>
              <p>
                At DataEpic, our mentors are seasoned experts at the forefront
                of their respective fields, equipped with the knowledge and
                experience to guide learners through both the Beginner and
                Intermediate Tracks.
              </p>
            </div>

            <div className="dataepic_container">
              <div className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={image5} alt="Img" />
                </div>
                <div className="dataepic_para">
                  <h3>World-Class Mentors</h3>
                  <p>
                    Our Mentors are industry experts and they
                    <br />
                    play a pivotal role in shaping the next
                    <br /> generation of data enthusiasts and guide
                    <br />
                    them on their journey to becoming a Data <br />
                    Specialists
                  </p>
                </div>
              </div>

              <div className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={image6} alt="Img" />
                </div>
                <div className="dataepic_para">
                  <h3>Hands - On - Project</h3>
                  <p>
                    Apply your newfound knowledge to <br />
                    real-world scenarios through hands-on
                    <br /> projects. These projects are designed to <br />
                    reinforce your learning and give you
                    <br /> practical experience in working with data.
                  </p>
                </div>
              </div>

              <div className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={image7} alt="Img" />
                </div>
                <div className="dataepic_para">
                  <h3>Collaborative Learning</h3>
                  <p>
                    Mentors foster a collaborative learning
                    <br /> culture, encouraging learners to engage
                    <br /> with each other, share experiences, and
                    <br />
                    work together on projects, creating a <br />
                    supportive community of data enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="dataepic_container">
              <div className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={image8} alt="Img" />
                </div>
                <div className="dataepic_para">
                  <h3>Tailored Mentorship</h3>
                  <p>
                    Tailoring their approach to the individual <br />
                    needs of each learner, mentors offer <br />
                    personalized guidance to ensure a <br />
                    meaningful and impactful learning
                    <br /> experience.
                  </p>
                </div>
              </div>

              <div className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={image9} alt="Img" />
                </div>
                <div className="dataepic_para">
                  <h3>Network Building</h3>
                  <p>
                    Mentors foster a collaborative learning <br />
                    culture, encouraging learners to engage <br />
                    with each other, share experiences, and
                    <br /> work together on projects, creating a <br />
                    supportive community of data enthusiasts.
                  </p>
                </div>
              </div>

              <div className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={image10} alt="Img" />
                </div>
                <div className="dataepic_para">
                  <h3>Community Engagement</h3>
                  <p>
                    Join a vibrant community of like-minded <br />
                    mentors dedicated to fostering a culture of
                    <br /> learning and collaboration. Engage with <br />
                    fellow mentors, share insights, and <br />
                    collectively contribute to the success of
                    <br /> our learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* play session */}
        <div className="session_container">
          <h1>
            Run a Play back on our
            <br />
            <span className="oranges"> Past Sessions. </span>
          </h1>
        </div>

        <div className="play_session">
          <div className="playback_sessions">
            <div className="playback">
              <img src={entrylevel1} alt="" className="entry_level" />
            </div>
            <div className="playback">
              <img src={entrylevel2} alt="" className="entry_level" />
            </div>

            <div className="playback">
              <img src={entrylevel1} alt="" className="entry_level" />
            </div>
          </div>
        </div>

        <div className="main_faqwrapper">
          <div className="faq-wrappers">
            <div className="faq-wrapper">
              <div className="mentors_textt">
                <h1>
                  Some of our
                  <span className="oranges"> Frequently <br /> Asked Questions
                  </span>
                </h1>
              </div>
            </div>
          </div>


          <div className="accordion_one">
            <div className="accordion_two">
              {data.map((item, i) => (
                <div className="item">
                  <div className="accordion_three" onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span className="sign">{selected === i ? "-" : "+"} </span>
                  </div>
                  <div
                    className={
                      selected === i ? "accordion_four" : "accordion_five"
                    }
                  >
                    <p> {item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
