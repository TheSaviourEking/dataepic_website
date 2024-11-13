import React from "react";
import "../styles/Home.css";
import HeroSection from "./HeroSection";
import MainTrack from "./MainTrack";
import DataEpic from "./DataEpic";
import MentorSection from "./MentorSection";
// import TypeEffect from "../components/TypeEffect";
import FAQ from "./FAQ";
import polygondeep from "../images/Polygon_deep.png";
import polygonlight from "../images/Polygon_light.png";
import sogo from "../images/image1.png";
import toba from "../images/image2.png";
import eri from "../images/image3.png";
import bushro from "../images/image15.png";
import gbotemi from "../images/image11.jpeg";
import entrylevel1 from "../images/entrylevel1.png";
import entrylevel2 from "../images/entrylevel2.png";

const mentors = [
  { name: "Sogo Ogundowole", role: "Senior Data Engineer", image: sogo },
  { name: "Oluwatoba Adesugba", role: "ML Engineer and Technical Writer", image: toba },
  { name: "Erioluwa Asiru", role: "Backend Developer", image: eri },
  { name: "Hammed Bushira", role: "DataOps Engineer", image: bushro },
  { name: "Gbotemi Bolarinwa", role: "Data Engineer", image: gbotemi },

];

function Home() {
  return (
    <div className="container">
      <HeroSection />

      <div >
        <div className="main_wrapper" >
          <AboutSection />
        </div>

        <div className="red"> 
          <MainTrack />
        </div>
        <div className="main_wrapper" >
          <MentorSection mentors={mentors} />

        </div>
        <div className="main_wrapper">
          <DataEpic />

        </div>
        <PastSessions />
        <FAQ />
      </div>
    </div>
  );
}



function AboutSection() {
  return (
    <div className="about_scroll" id="about">
      <h1>
        We are <span className="orange">passionate</span> about providing a
        platform that empowers <span className="yellow">beginners</span> and{" "}
        <span className="blue">intermediate data specialists</span> to harness
        the full potential of <span className="orange">data</span>.
      </h1>

      <div className="deep">
        <img src={polygondeep} alt="Polygon Deep" />
      </div>

      <div className="mini-text">
        <div className="light">
          <img src={polygonlight} alt="Polygon Light" />
        </div>
        <p>
          Our curated mentorship programs, interactive challenges, and hands-on
          projects are crafted to propel you toward data mastery.
        </p>
      </div>
    </div>
  );
}

function PastSessions() {
  return (
    <div>
      <div className="session_container">
        <h1>
          Run a Play back on our <br />
          <span className="oranges">Past Sessions.</span>
        </h1>
      </div>
      <div className="play_session">
        <div className="playback_sessions">
          <div className="playback">
            <img src={entrylevel1} alt="Entry Level 1" className="entry_level" />
          </div>
          <div className="playback">
            <img src={entrylevel2} alt="Entry Level 2" className="entry_level" />
          </div>
          <div className="playback">
            <img src={entrylevel1} alt="Entry Level 1" className="entry_level" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;