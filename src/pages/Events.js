import React from "react";
import { Link } from "react-router-dom";
import "../styles/Events.css";
import frame7 from "../images/Rectangle 7.png";
import entrylevel1 from "../images/entrylevel1.png";
import entrylevel2 from "../images/entrylevel2.png";

function Events() {
  return (
    <div className="eventmain_container">
      <div className="event_wrapper">
        <div>
          <Link to="/#sectionToScroll" className="reroute_link">
            Go back to Page One
          </Link>
        </div>

        <div className="event-container">
          <div className="event-wrapper">
            <div className="event-frame">
              <img src={frame7} alt="Img" />
            </div>

            <div className="event-content">
              <div className="event_text">
                <h4>About Session</h4>
                <p>
                  By submitting this application, you agree to allow us to send
                  you updates on your application and other relevant
                  information. You also consent to potential contact for project
                  and employment opportunities.
                </p>
              </div>

              <div className="event_text">
                <h4>Date & Time</h4>
                <p>24th - 26th November, 2023</p>
              </div>

              <div className="event_text">
                <h4>Venue</h4>
                <p>Zoom or Google Meet</p>
              </div>

              <Link to="/FormInput" className="reserve-btn">
                <button>Register here</button>
              </Link>

              {/* <button className="event-btn">
                <a href="#">Register here</a>
              </button> */}
            </div>
          </div>
        </div>

        {/* Session area */}
        <div className="replay_session_container">
          <h3 className="text">
            Our <span className="oranges"> Weekly Sessions </span>
          </h3>

          <div className="session_main">
            <div className="first_session">
              <div className="ses-content">
                <h3>High Level Technical Sessions</h3>
                <p>
                  Sharpen your skills and delve deeper into the technical realm
                  with our high-level intermediate sessions, held every
                  Wednesday at 10:15 AM.
                </p>
                <button className="session_link">
                  <a href="#">Join Session</a>
                </button>
              </div>
            </div>

            <div className="second_session">
              <div className="ses-content">
                <h3>Weekly Async Sessions</h3>
                <p>
                  Join our weekly asynchronous learning sessions, available for
                  intermediates on Saturdays and beginners on Sundays.
                </p>
                <button className="session_link">
                  <a href="#">Join Session</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="replay">
          <div className="replay_playback_container">
            <p className=" past_para">OUR PAST EVENTS</p>
            <h1>
              Run a Play back on our
              <br />
              Past Sessions.
            </h1>
          </div>
          <div className="play_sessions">
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
        </div>
      </div>
    </div>
  );
}

export default Events;
