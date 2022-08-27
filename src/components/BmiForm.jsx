import React, { useContext } from "react";
import BmiContext from "../contexts/BmiContext";
import { IoSaveOutline, IoReload } from "react-icons/io5";
import FirebaseLoginContext from "../contexts/FirebaseLoginContext";

function BmiForm() {
  const {
    firstRef,
    secondRef,
    bmi,
    handleWeight,
    handleHeight,
    calculateBmi,
    handleReset,
    saveBmi,
    bmiCategory,
    bmicolor,
  } = useContext(BmiContext);

  const { userUid } = useContext(FirebaseLoginContext);

  return (
    <div
      className="bg-white flex-1 flex  justify-between flex-col sm:w-6/12 w-full h-96 text-left border-solid border border-slate-300 rounded-xl shadow-md
    sm:p-8 p-4 mx-4 mb-2"
    >
      <h1 className="font-medium text-xl mb-2">BMI Calculator</h1>
      <div className="flex flex-row items-center justify-between my-4">
        <div className="w-6/12 mr-4">
          <div className="relative my-4">
            <input
              type="number"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none outline outline-1  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleHeight}
              ref={firstRef}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Height (cm)
            </label>
          </div>

          <div className="relative my-4">
            <input
              type="number"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer outline outline-1"
              placeholder=" "
              onChange={handleWeight}
              ref={secondRef}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Weight (kg)
            </label>
          </div>
        </div>
        <div className="w-6/12 flex flex-col items-center justify-start">
          {bmi ? (
            <div className="flex flex-col items-center justify-start">
              <h1
                className={`text-5xl ${bmicolor} font-semibold drop-shadow-md`}
              >
                {bmi}
              </h1>
              <h2 className={`text-lg ${bmicolor} font-semibold`}>
                {bmiCategory}
              </h2>
            </div>
          ) : null}
        </div>
      </div>

      {/* Buttons */}
      {userUid ? (
        <div className="flex items-center">
          <button
            className="h-10 w-full p-2 border-solid border-slate-500 border rounded-md mx-1 font-medium"
            onClick={calculateBmi}
          >
            Calculate
          </button>
          <button
            className="h-10 p-2 border-solid border-slate-500 border rounded-md mx-1"
            onClick={saveBmi}
          >
            <IoSaveOutline className="text-xl" />
          </button>
          <button
            className="h-10 p-2 border-solid border-slate-500 border rounded-md mx-1"
            onClick={handleReset}
          >
            <IoReload className="text-xl" />
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <button
            className="h-10 w-full p-2 border-solid border-slate-500 border rounded-md mx-1 font-medium"
            onClick={calculateBmi}
          >
            Calculate
          </button>
          <button
            className="h-10 p-2 border-solid border-slate-500 border rounded-md mx-1"
            onClick={handleReset}
          >
            <IoReload className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
}

export default BmiForm;
