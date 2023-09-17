import React from "react";

function Results({ yearlyData, initialInvestment }) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.savingsEndOfYear}</td>
              <td>{data.yearlyInterest}</td>
              <td>
                {data.savingsEndOfYear -
                  initialInvestment -
                  data.yearlyContribution * data.year}{" "}
              </td>
              <td>
                {initialInvestment + data.yearlyContribution * data.year}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
