import React, { useState, useContext, useEffect } from "react";
import FirebaseLoginContext from "../contexts/FirebaseLoginContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const { userUid, userData, chartDate, chartBmi } =
    useContext(FirebaseLoginContext);

  let arr = [...chartBmi];

  const data = {
    labels: chartDate,
    datasets: [
      {
        label: "Your recent BMI",
        data: arr,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  if (!userUid) {
    return (
      <div
        className="bg-white flex-1 sm:w-6/12 w-full h-96 text-left border-solid border border-slate-300 rounded-xl shadow-md
      sm:p-8 p-2 mx-2"
      >
        <h1>Please log in to see your BMI history</h1>
      </div>
    );
  }

  return (
    <>
      {userData.length > 0 ? (
        <div
          className="bg-white flex-1 flex items-center justify-center sm:w-6/12 w-full h-96 text-left border-solid border border-slate-300 rounded-xl shadow-md
        sm:p-8 p-2 mx-2"
        >
          <Line
            data={data}
            height="100%"
            width="100%"
            options={{ maintainAspectRatio: false }}
          />
        </div>
      ) : (
        <div
          className=" bg-white flex-1 sm:w-6/12 w-full h-96 text-left border-solid border border-slate-300 rounded-xl shadow-md
        sm:p-8 p-2 mx-2"
        >
          <h1>You have no BMI history</h1>
        </div>
      )}
    </>
  );
}

export default Chart;
