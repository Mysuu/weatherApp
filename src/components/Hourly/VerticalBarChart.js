import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function VerticalBarChart({ weathers }) {
  const options = {
    responsive: true,
    plugins: {},
  };

  const labels =
    weathers &&
    weathers.map((item) => moment(item.dt_txt).format("MMM Do HH:mm"));
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: weathers.map((item) => item.main.temp),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Humidity",
        data: weathers.map((item) => item.main.humidity),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Wind speed",
        data: weathers.map((item) => item.wind.speed),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default VerticalBarChart;
