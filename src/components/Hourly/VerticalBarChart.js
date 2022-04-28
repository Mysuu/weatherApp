import React from "react";

import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
        data: weathers && weathers.map((item) => item.main.temp),
        backgroundColor: "#FF6666",
      },
      {
        label: "Humidity",
        data: weathers && weathers.map((item) => item.main.humidity),
        backgroundColor: "#3366FF",
      },
      {
        label: "Wind speed",
        data: weathers && weathers.map((item) => item.wind.speed),
        backgroundColor: "#996666",
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
