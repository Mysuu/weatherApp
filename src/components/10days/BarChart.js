import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function BarChart({ weathers }) {
  const now = moment(new Date()).format("MMM D");
  const day =
    weathers && weathers.map((item) => moment(item.datetime).format("MMM D"));

  const options = {
    responsive: true,
    plugins: {},
  };

  const labels = day.map((label) => {
    return moment(label).format("MMM D") === now ? "Today" : label;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: weathers.map((item) => item.temp),
        backgroundColor: "#FF6666",
      },
      {
        label: "Humidity",
        data: weathers.map((item) => item.rh),
        backgroundColor: "#3366FF",
      },
      {
        label: "Wind speed",
        data: weathers.map((item) => item.wind_spd),
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

export default BarChart;
