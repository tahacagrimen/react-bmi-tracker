import React, { useContext } from "react";
import BmiContext from "../contexts/BmiContext";

function BmiForm() {
  const {
    weight,
    height,
    bmi,
    handleWeight,
    handleHeight,
    handleBmi,
    handleReset,
    bmitext,
  } = useContext(BmiContext);

  return (
    <div className="sm:w-6/12 w-full h-auto text-left">
      <h1>BMI Calculator</h1>
      <br />
      <form>
        <p>Height (m)</p>
        <input
          defaultValue={height}
          onChange={handleHeight}
          type="number"
          placeholder="Height"
        />
        <p>Weight (kg)</p>
        <input onChange={handleWeight} type="number" placeholder="Weight" />
        <button onClick={handleBmi}>Calculate</button>
      </form>
      <h2>Your BMI :</h2>
      <h1>{bmi}</h1>
    </div>
  );
}

export default BmiForm;
