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
  const { userUid, userData, chartDate, chartBim } =
    useContext(FirebaseLoginContext);

  console.log(chartDate);
  console.log(chartBim);

  const data = {
    labels: chartDate,
    datasets: [
      {
        label: "Your recent BMI",
        data: chartBim,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  if (!userUid) {
    return (
      <div className="sm:w-6/12 w-full">
        <h1>Please log in to see your BMI history</h1>
      </div>
    );
  }

  return (
    <>
      {userData.length > 0 ? (
        <div
          className="flex-1 sm:w-6/12 w-full h-auto text-left border-solid border border-slate-300 rounded-xl shadow-md
        sm:p-8 p-2 mx-2"
        >
          <Line data={data} />
        </div>
      ) : (
        <div className="sm:w-6/12 w-full">
          <h1>You have no BMI history</h1>
        </div>
      )}
    </>
  );
}

export default Chart;
