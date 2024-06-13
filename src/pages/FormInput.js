import React from "react";
// import 'useForm' from '../../src/useForm';
import "../styles/FormInput.css";
import useForm from "./useForm";
import "../styles/Form.css";
import validate from "../pages/validateInfo";

function FormInput({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-info" noValidate>
        <div className="main-container">
          <h3>
            Fill in the details below to book a spot
            for the next cohort
          </h3>
          <div className="forminput-container">
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Full Name:
              </label>
              <br />
              <input
                id="email"
                type="text"
                name="fullname"
                className="font-input"
                placeholder="Enter your full name"
                value={values.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p>{errors.fullname}</p>}
            </div>

            <div className="form-inputs">
              <label htmlFor="fullname" className="form-label">
                Email address:
              </label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                className="font-input"
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-inputs">
              <label htmlFor="fullname" className="form-label">
                Github Username:
              </label>
              <br />
              <input
                id="github"
                type="text"
                name="github"
                className="font-input"
                placeholder="Enter your github username"
                value={values.github}
                onChange={handleChange}
              />
              {errors.github && <p>{errors.github}</p>}
            </div>

            <div className="form-inputs">
              <label htmlFor="fullname" className="form-label">
                What is your area of interest?
              </label>
              <br />
              <input
                id="interest"
                type="text"
                name="interest"
                className="font-input"
                placeholder="Select interest"
                value={values.interest}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-text">
            <h3>Agreement with DataEpic</h3>

            <p>
              By submitting this application, you agree to allow us to send you
              updates on your 
              application and other relevant information. <br /> You also consent to
              potential contact for project and employment opportunities.
            </p>
          </div>
          <div className="btn-container">
            <button className="form-input-btn" type="submit">
              Submit
            </button>
            <br />
            
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormInput;
