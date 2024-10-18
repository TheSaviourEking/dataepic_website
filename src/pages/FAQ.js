import React, { useState } from "react";

const faqData = [
  {
    question: "What is the data epic mentorship program?",
    answer:
      "It's a program designed to help learners better understand beginner and advanced concepts in the data sphere.",
  },
  {
    question: "What are the benefits of this mentorship program?",
    answer:
      "Increased knowledge, improved career development, enhanced confidence, stronger professional networks.",
  },
  {
    question: "Who can participate in a mentorship program?",
    answer:
      "Anyone, regardless of age, experience, or background. It is beneficial for people at all stages.",
  },
  {
    question: "How does the mentorship program work?",
    answer:
      "Mentors and mentees meet weekly to discuss goals, challenges, and progress based on their tracks.",
  },
  {
    question: "What is expected of mentees in the program?",
    answer:
      "Mentees should attend weekly sessions and perform tasks. They are expected to engage in team conversations.",
  },
];

function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => setSelected(selected === i ? null : i);

  return (
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
          {faqData.map((item, i) => (
            <div className="item" key={i}>
              <div className="accordion_three" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span className="sign">{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={selected === i ? "accordion_four" : "accordion_five"}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
