import entrylevel1 from "../images/entrylevel1.png";
import entrylevel2 from "../images/entrylevel2.png";

const sessionImages = [
  { src: entrylevel1, alt: "Entry Level 1" },
  { src: entrylevel2, alt: "Entry Level 2" },
  { src: entrylevel1, alt: "Entry Level 1" },
];

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
          {sessionImages.map((session, index) => (
            <div key={index} className="playback">
              <img
                src={session.src}
                alt={session.alt}
                className="entry_level"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastSessions;
