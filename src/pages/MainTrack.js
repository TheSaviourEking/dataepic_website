import React from "react";
import { Link } from "react-router-dom";

const MainTrack = () => {
  return (
    <div className="datamastery-container">
      <div className="datamastery-wrapper">
        <div className="datamastery-info">
          <h2>
            <span className="orange">Beginner and Intermediate</span> Paths to Data Mastery
          </h2>
          <p>
            Whether you're stepping into the realm of data for the first time or you're an intermediate explorer seeking to refine your skills, our dual tracks cater to your specific needs and ambitions.
          </p>
        </div>
        
        <div className="track-type">
          <div className="wrapper">
            <div className="track" id="track">
              <div className="track_info">
                <div className="beginner-type">
                  <h2>Beginners Track</h2>
                </div>
                <div className="notes">
                  <h4>Embark on your data adventure with our Beginner's Track</h4>
                  <p>This track is designed to refine your skills and prepare you for more complex challenges.</p>
                </div>
              </div>
              <div to="" className="track_btn">
                <div className="track_modules">
                  <div className="week-button">
                    <button>3 to 4 weeks</button>
                  </div>
                  <div className="click_button">
                    <Link to="/BeginnersTrack" className="track_select_btn">
                      <button>View track modules</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Intermediate Track */}
            <div className="track" id="track_second">
              <div className="track_info">
                <div className="intermediate-type">
                  <h2>Beginners with Experience Track</h2>
                </div>
                <div className="notes">
                  <h4>Elevate Your Data Mastery to New Heights with our Intermediate Track</h4>
                  <p>This track is designed to refine your skills and prepare you for more complex challenges.</p>
                </div>
              </div>
              <div to="" className="track_btn">
                <div className="track_modules">
                  <div className="week-button">
                    <button>3 to 4 weeks</button>
                  </div>
                  <div className="click_button">
                    <Link to="/IntermediateTrack" className="track_select_btn2">
                      <button>View track modules</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Last Intermediate Track */}
            <div className="track" id="last_track">
              <div className="track_info">
                <div className="intermediate-type">
                  <h2>Intermediate Track</h2>
                </div>
                <div className="notes">
                  <h4>Elevate Your Data Mastery to New Heights with our Intermediate Track</h4>
                  <p>This track is designed to refine your skills and prepare you for more complex challenges.</p>
                </div>
              </div>
              <div to="" className="track_btn">
                <div className="track_modules">
                  <div className="week-button">
                    <button>3 to 4 weeks</button>
                  </div>
                  <div className="click_button">
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
    </div>
  );
};

export default MainTrack;
