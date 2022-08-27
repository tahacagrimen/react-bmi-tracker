import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";

import FirebaseLoginContext from "./FirebaseLoginContext";
import { db } from "../firebase";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { async } from "@firebase/util";

import moment from "moment";

const BmiContext = createContext();

export function BmiProvider({ children }) {
  const { userUid } = useContext(FirebaseLoginContext);

  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);
  const [bmicolor, setBmicolor] = useState(null);

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const calculateBmi = async () => {
    setBmi(
      (Number(weight) / (Number(height) * Number(height)))
        .toString()
        .substring(0, 5)
    );
  };

  useEffect(() => {
    if (bmi !== 0 && bmi < 18.5) {
      setBmiCategory("Underweight");
      setBmicolor("text-lime-200");
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiCategory("Normal");
      setBmicolor("text-lime-400");
    } else if (bmi >= 25 && bmi < 30) {
      setBmiCategory("Overweight");
      setBmicolor("text-yellow-300");
    } else if (bmi >= 30) {
      setBmiCategory("Obese");
      setBmicolor("text-yellow-300");
    }
  }, [bmi]);

  const handleReset = () => {
    firstRef.current.value = null;
    secondRef.current.value = null;
    setWeight(null);
    setHeight(null);
    setBmi(null);
    setBmiCategory(null);
    setBmicolor(null);
  };

  const saveBmi = () => {
    let date = Date.now().toString();
    let randomId = nanoid();

    let dateString = moment().format("YYYY-MM-DD");

    setDoc(doc(db, userUid, dateString), {
      id: randomId,
      date: dateString,
      bmi: bmi,
    })
      .then(() => {
        handleReset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BmiContext.Provider
      value={{
        weight,
        height,
        bmi,
        handleWeight,
        handleHeight,
        handleReset,
        calculateBmi,
        saveBmi,
        bmiCategory,
        bmicolor,
        firstRef,
        secondRef,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
}

export default BmiContext;
