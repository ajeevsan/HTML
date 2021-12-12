import React, { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState("");

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <>
      <div className="calculator">
        <h1 className="heading">BMI Calculator</h1>
        <div className="input">
          <p className="text">Height</p>
          <input
            type="text"
            placeholder="in cm's"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          ></input>
          <p>Weight</p>
          <input
            type="text"
            placeholder="in kg's"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          ></input>
        </div>

        <div className="button">
          <button onClick={calculateBMI}>Calculate BMI</button>
        </div>
      </div>
      <div className="output">
        {bmiResult && (
          <div>
            <h2>Your BMI is: {bmiResult}</h2>
            <p>You are {status}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BMI;
