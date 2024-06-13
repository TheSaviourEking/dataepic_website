import React, { useState } from "react";
import "../styles/Form.css";
import FormInput from "../pages/FormInput";
import FormSuccess from "../pages/FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="forms-container">
        <span className="close-btn">×</span>
        <div className="forms-content-left">
          <img className="forms-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormInput submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
