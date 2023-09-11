import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

function Form({ setYearlyData }) {
  const [userInput, setUserInput] = useState({});

  const inputHandler = (e) => {
    console.log(
      "🚀 ~ file: Form.js:12 ~ inputHandler ~ e:",
      JSON.stringify(e.currentTarget.id)
    );
    setUserInput({ ...userInput, [e.currentTarget.id]: e.target.value });
    console.log("userInput - " + JSON.stringify(userInput));
  };

  const calculateHandler = (e) => {
    e.preventDefault();

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={inputHandler} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={inputHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={inputHandler} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={inputHandler} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" onClick={calculateHandler} className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default Form;
