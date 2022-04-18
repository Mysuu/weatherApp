import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function LineChart({ weathers, active, toggle }) {
  console.log("toggle", toggle);
  const [showTemp, setShowTemp] = useState([]);

  console.log("showTemp", showTemp);
  useEffect(() => {
    const fullTemp =
      weathers && weathers.map((data) => Math.round(data.main.temp));
    setShowTemp(fullTemp);
  }, [weathers]);

  function alternatePointRadius(ctx, nbr) {
    const index = ctx.dataIndex;
    return index === nbr ? 7 : 0;
  }

  const data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: null,
        data: showTemp,
        fill: true,
        pointRadius: (ctx) => alternatePointRadius(ctx, active),
        borderColor: "dodgerblue",
        tension: 0.4,
        borderWidth: 2,
        pointStyle: toggle
          ? `${Math.round(showTemp[active] * 1.8 + 32)}°F`
          : `${Math.round(showTemp[active])}°C`,
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
      title: {
        display: true,
        text: (ctx) => `Temperature: ${ctx.chart.data.datasets[0].pointStyle}`,
      },
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
