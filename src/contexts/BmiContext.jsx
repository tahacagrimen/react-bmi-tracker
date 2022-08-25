import React, { createContext, useState, useContext } from "react";

import FirebaseLoginContext from "./FirebaseLoginContext";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const BmiContext = createContext();

export function BmiProvider({ children }) {
  const { userUid } = useContext(FirebaseLoginContext);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleBmi = (e) => {
    e.preventDefault();
    setBmi(weight / (height * height));
    if (userUid) {
      setDoc(doc(db, userUid), {
        weight: weight,
        height: height,
        bmi: bmi,
      });
    }
  };

  const handleReset = () => {
    setWeight(0);
    setHeight(0);
    setBmi(0);
  };

  const bmitext = () => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    }
  };

  return (
    <BmiContext.Provider
      value={{
        weight,
        height,
        bmi,
        handleWeight,
        handleHeight,
        handleBmi,
        handleReset,
        bmitext,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
}

export default BmiContext;
