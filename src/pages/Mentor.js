import React from "react";

function Mentor({ mentors }) {
  return (
    <div className="mentors">
      <div className="ment">
        <div className="new_mentor_para">
          <h1>
            Learn from <span className="oranges">The Best</span>
          </h1>
          <p>
            Our mentors are seasoned experts at the forefront of their
            respective fields.
          </p>
        </div>
        <div className="mentors_container">
          {mentors.map((mentor, index) => (
            <div className="mentor_wraps" key={index}>
              <div className="mentor_image_wrap">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor_images"
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
  );
}

export default Mentor;
