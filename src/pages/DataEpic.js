import React from "react";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";

const dataEpicItems = [
  [
    {
      title: "World-Class Mentors",
      text: "Our Mentors are industry experts and they play a pivotal role in shaping the next generation of data enthusiasts and guide them on their journey to becoming a Data Specialists.",
      img: image5,
    },
    {
      title: "Hands-On Projects",
      text: "Apply your newfound knowledge to real-world scenarios through hands-on projects. These projects are designed to reinforce your learning and give you practical experience in working with data.",
      img: image6,
    },
    {
      title: "Collaborative Learning",
      text: "Mentors foster a collaborative learning culture, encouraging learners to engage with each other, share experiences, and work together on projects, creating a supportive community of data enthusiasts.",
      img: image7,
    },
  ],
  [
    {
      title: "Tailored Mentorship",
      text: "Tailoring their approach to the individual needs of each learner, mentors offer personalized guidance to ensure a meaningful and impactful learning experience.",
      img: image8,
    },
    {
      title: "Network Building",
      text: "Mentors foster a collaborative learning culture, encouraging learners to engage with each other, share experiences, and work together on projects, creating a supportive community of data enthusiasts.",
      img: image9,
    },
    {
      title: "Community Engagement",
      text: "Join a vibrant community of like-minded mentors dedicated to fostering a culture of learning and collaboration. Engage with fellow mentors, share insights, and collectively contribute to the success of our learners.",
      img: image10,
    },
  ],
];

const DataEpic = () => {
  return (
    <div className="data_epic">
      <div className="data_new">
        <div className="dataepic_mentors_text">
          <h1>
            Why <span className="oranges"> Data Epic? </span>
          </h1>
          <p>
            At DataEpic, our mentors are seasoned experts at the forefront of their respective fields, equipped with the knowledge and experience to guide learners through both the Beginner and Intermediate Tracks.
          </p>
        </div>

        {dataEpicItems.map((group, groupIndex) => (
          <div key={groupIndex} className="dataepic_container">
            {group.map((item, index) => (
              <div key={index} className="dataepic_wrap">
                <div className="dataepic_images">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="dataepic_para">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataEpic;
