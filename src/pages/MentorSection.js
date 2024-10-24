import React from "react";
import { motion } from "framer-motion";
import "../styles/MentorSection.css"

function MentorSection({ mentors }) {
    return (
        <div className="mentors">
            <div className="ment">
                <div className="new_mentor_para">
                    <h1>
                        Learn from <span className="oranges">The Best</span>
                    </h1>
                    <motion.p initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        At DataEpic, our mentors are seasoned experts at the forefront of their respective fields, equipped with the knowledge and experience to guide learners through both the Beginner and Intermediate Tracks.
                    </motion.p>
                </div>
                <div className="mentors_container">
                    {mentors.map((mentor) => (
                        <div key={mentor.name} className="mentor_wraps">
                            <div className="mentor_image_wrap">
                                <img src={mentor.image} alt={mentor.name} className="mentor_image" />
                            </div>
                            
                            <div className="mentor_para">
                                <h3>{mentor.name}</h3>
                                <p id="name">{mentor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MentorSection;
