import React, { useContext } from "react";
import BmiContext from "../contexts/BmiContext";

function Diet() {
  const { bmiCategory, bmicolor } = useContext(BmiContext);

  if (bmiCategory === "Underweight") {
    return (
      <div
        className="bg-white flex-1 w-full h-auto text-left border-solid border border-slate-300 rounded-xl shadow-md
      sm:p-8 p-4 mx-2 mt-4"
      >
        <h1 className={`font-semibold mb-2 ${bmicolor} drop-shadow-sm`}>
          Risks associated with being underweight
        </h1>
        <p className="mb-2">
          Being underweight has its own associated risks, listed below:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Malnutrition, vitamin deficiencies, anemia (lowered ability to carry
            blood vessels)
          </li>
          <li>
            Osteoporosis, a disease that causes bone weakness, increasing the
            risk of breaking a bone
          </li>
          <li>A decrease in immune function</li>
          <li>
            Growth and development issues, particularly in children and
            teenagers
          </li>
          <li>
            Possible reproductive issues for women due to hormonal imbalances
            that can disrupt the menstrual cycle. Underweight women also have a
            higher chance of miscarriage in the first trimester
          </li>
          <li>Potential complications as a result of surgery</li>
          <li>
            Generally, an increased risk of mortality compared to those with a
            healthy BMI
          </li>
        </ul>
        <p className="mt-2">
          In some cases, being underweight can be a sign of some underlying
          condition or disease such as anorexia nervosa, which has its own
          risks. Consult your doctor if you think you or someone you know is
          underweight, particularly if the reason for being underweight does not
          seem obvious.
        </p>
      </div>
    );
  } else if (bmiCategory === "Overweight" || bmiCategory === "Obese") {
    return (
      <div
        className="bg-white flex-1 w-full h-auto text-left border-solid border border-slate-300 rounded-xl shadow-md
        sm:p-8 p-4 mx-2 mt-4"
      >
        <h1 className={`font-semibold mb-2 ${bmicolor} drop-shadow-sm`}>
          Risks associated with being overweight
        </h1>
        <p className="mb-2">
          Being overweight increases the risk of a number of serious diseases
          and health conditions. Below is a list of said risks, according to the
          Centers for Disease Control and Prevention (CDC):
        </p>
        <ul className="list-disc list-inside">
          <li>High blood pressure</li>
          <li>
            Higher levels of LDL cholesterol, which is widely considered "bad
            cholesterol," lower levels of HDL cholesterol, considered to be good
            cholesterol in moderation, and high levels of triglycerides
          </li>
          <li>Type II diabetes</li>
          <li>Coronary heart disease</li>
          <li>Stroke</li>
          <li>Gallbladder disease</li>
          <li>
            Osteoarthritis, a type of joint disease caused by breakdown of joint
            cartilage
          </li>
          <li>Sleep apnea and breathing problems</li>
          <li>
            Certain cancers (endometrial, breast, colon, kidney, gallbladder,
            liver)
          </li>
          <li>Low quality of life</li>
          <li>
            Mental illnesses such as clinical depression, anxiety, and others
          </li>
          <li>Body pains and difficulty with certain physical functions</li>
          <li>
            Generally, an increased risk of mortality compared to those with a
            healthy BMI
          </li>
        </ul>
        <p className="mt-2">
          As can be seen from the list above, there are numerous negative, in
          some cases fatal, outcomes that may result from being overweight.
          Generally, a person should try to maintain a BMI below 25 kg/m2, but
          ideally should consult their doctor to determine whether or not they
          need to make any changes to their lifestyle in order to be healthier.
        </p>
      </div>
    );
  } else if (bmiCategory === "Normal") {
    return (
      <div
        className="bg-white flex-1 w-full h-auto border-solid border border-slate-300 rounded-xl shadow-md
    sm:p-8 p-4 mx-2 mt-4 text-center"
      >
        <h1 className={`${bmicolor} font-semibold text-3xl drop-shadow-md`}>
          You are Perfect!
        </h1>
      </div>
    );
  }

  return null;
}

export default Diet;
