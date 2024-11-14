import React from "react";
import { Link } from "react-router-dom";
import "../styles/Events.css";
import frame7 from "../images/Rectangle 7.png";
import entrylevel1 from "../images/entrylevel1.png";
import entrylevel2 from "../images/entrylevel2.png";

const sessionData = [
  {
    title: "High Level Technical Sessions",
    description:
      "Sharpen your skills and delve deeper into the technical realm with our high-level intermediate sessions, held every Wednesday at 10:15 AM.",
    linkText: "Join Session",
  },
  {
    title: "Weekly Async Sessions",
    description:
      "Join our weekly asynchronous learning sessions, available for intermediates on Saturdays and beginners on Sundays.",
    linkText: "Join Session",
  },
];

const playbackSessions = [
  { src: entrylevel1, alt: "Entry Level 1" },
  { src: entrylevel2, alt: "Entry Level 2" },
  { src: entrylevel1, alt: "Entry Level 1" },
];

function Events() {
  return (
    <div className="events_div">
      <div className="event_wrapper">
        <div className="event-container">
          <div className="event-wrapper">
            <div className="event-frame">
              <img src={frame7} alt="Event" />
            </div>

            <div className="event-content">
              <EventText
                title="About Session"
                content="By submitting this application, you agree to allow us to send you updates on your application and other relevant information. You also consent to potential contact for project and employment opportunities."
              />
              <EventText
                title="Date & Time"
                content="24th - 26th November, 2023"
              />
              <EventText title="Venue" content="Zoom or Google Meet" />

              <Link to="/FormInput" className="reserve-btn">
                <button>Register here</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Session area */}
        <div className="replay_session_container">
          <h3 className="text">
            Our <span className="oranges">Weekly Sessions</span>
          </h3>

          <div className="session_main">
            {sessionData.map((session, index) => (
              <SessionCard
                key={index}
                title={session.title}
                description={session.description}
                linkText={session.linkText}
              />
            ))}
          </div>
        </div>

        <div className="replay">
          <div className="replay_playback_container">
            <p className="past_para">OUR PAST EVENTS</p>
            <h1>
              Run a Play back on our
              <br />
              Past Sessions.
            </h1>
          </div>

          <div className="play_sessions">
            <div className="playback_session">
              {playbackSessions.map((session, index) => (
                <div key={index} className="playback">
                  <Link to="/" className="entry" style={{ display: 'block' }} >
                    <img
                      src={session.src}
                      alt={session.alt}
                      className="entry_level"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const EventText = ({ title, content }) => (
  <div className="event_text">
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

const SessionCard = ({ title, description, linkText }) => (
  <div className="first_session">
    <div className="ses-content">
      <h3>{title}</h3>
      <div className="ses_paragraph">
        <p>{description}</p>
      </div>
      <button className="session_link">
        <a href="#form">{linkText}</a>
      </button>
    </div>
  </div>
);

export default Events;
