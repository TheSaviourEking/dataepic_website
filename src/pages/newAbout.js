import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/About.css";
import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
import ag from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import entrylevel1 from "../images/entrylevel1.png";
import entrylevel2 from "../images/entrylevel2.png";
import HeroSection from "./HeroSection";

function About() {
  return (
    <div className="newAbout_wrapper">
      {/* <HeroSection /> */}

      <div className="datamastery-container">
        <div className="datamastery-wrapper">
          <div className="datamastery-info">
            <h2>
              <span className="orange">Beginner and Intermediate</span> Paths to
              Data Mastery
            </h2>
            <p>
              Whether you're stepping into the realm of data for the first time
              or you're an
              <br /> intermediate explorer seeking to refine your skills, our
              dual tracks cater to <br />
              your specific needs and ambitions.
            </p>
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
                      Embark on your data adventure with our <br />
                      Beginner's Track
                    </h4>
                    <p>
                      This track is designed to refine your skills and <br />{" "}
                      prepare you for more complex challenges.
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
                      Elevate Your Data Mastery to New Heights
                      <br /> with our Intermediate Track
                    </h4>
                    <p className="paragraph-skills">
                      This track is designed to refine your skills and <br />
                      prepare you for more complex challenges.
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
        <div>
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
            <div className="mentor_wrap">
              <div className="mentor_images">
                <img src={sogo} alt="Img" />
              </div>
              <div className="mentor_para">
                <h3>Sogo Ogundowole</h3>
                <p>Senior Data Engineer</p>
              </div>
            </div>

            <div className="mentor_wrap">
              <div className="mentor_images">
                <img src={toba} alt="Img" />
              </div>
              <div className="mentor_para">
                <h3>Oluwatoba Adesugba</h3>
                <p>ML Engineer and Technical Writer</p>
              </div>
            </div>

            <div className="mentor_wrap">
              <div className="mentor_images">
                <img src={eri} alt="Img" />
              </div>
              <div className="mentor_para">
                <h3>Erioluwa Asiru</h3>
                <p>Backend Developer</p>
              </div>
            </div>

            <div className="mentor_wrap">
              <div className="mentor_images">
                <img src={ag} alt="Img" />
              </div>
              <div className="mentor_para">
                <h3>Amazing-Grace Olutomilayo</h3>
                <p>Data Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why data epic */}
      <div className="data_epic">
        <div className="data_new">
          <div className="mentors_text">
            <h1>
              Why <span className="oranges"> Data Epic? </span>
            </h1>
            <p>
              At DataEpic, our mentors are seasoned experts at the forefront of
              their respective <br /> fields, equipped with the knowledge and
              experience to guide learners through <br /> both the Beginner and
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
                  them on their journey to becoming a Data Specialists
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
                  meaningful and impactful learning experience.
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
                  collectively contribute to the success of our learners.
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
        <div className="playback_session">
          <div className="playback">
            <Link to="/" className="entry">
              <img src={entrylevel1} alt="" className="entry_level" />
            </Link>
          </div>
          <div className="playback">
            <Link to="/" className="entry">
              <img src={entrylevel2} alt="" className="entry_level" />
            </Link>
          </div>
          <div className="playback">
            <Link to="/" className="entry">
              <img src={entrylevel1} alt="" className="entry_level" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default About;
