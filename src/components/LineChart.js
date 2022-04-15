import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function LineChart({ weathers, active }) {
  const [showTemp, setShowTemp] = useState([]);
  console.log("active", active);
  console.log("weathers", weathers);

  useEffect(() => {
    const fullTemp = weathers && weathers.map((data) => data.main.temp);
    setShowTemp(fullTemp);
    console.log("fullTemp", fullTemp);
  }, [active, weathers]);

  const data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: null,
        data: showTemp,
        fill: true,
        borderColor: "dodgerblue",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        min: -5,
        max: 40,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} height={160} />
    </div>
  );
}

export default LineChart;
