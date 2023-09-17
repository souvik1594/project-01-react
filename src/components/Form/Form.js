import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

function Form(props) {
  const initialInput = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initialInput);

  const inputHandler = (e) => {
    console.log(
      "🚀 ~ file: Form.js:12 ~ inputHandler ~ e:",
      JSON.stringify(e.currentTarget.id)
    );
    setUserInput({ ...userInput, [e.currentTarget.id]: e.target.value });
    console.log("userInput - " + JSON.stringify(userInput));
  };

  const resetHandler = () => {
    setUserInput(initialInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  return (
    <div>
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={inputHandler}
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={inputHandler}
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={inputHandler}
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={inputHandler}
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" onClick={submitHandler} className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default Form;
