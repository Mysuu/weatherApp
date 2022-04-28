import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function LineChart({ weathers, active, toggle }) {
  const [showTemp, setShowTemp] = useState([]);
  useEffect(() => {
    const fullTemp =
      weathers &&
      weathers.map((data) =>
        toggle
          ? Math.round(data.main.temp)
          : Math.round(data.main.temp * 1.8 + 32)
      );
    setShowTemp(fullTemp);
  }, [weathers, toggle]);

  function alternatePointRadius(ctx, nbr) {
    const index = ctx.dataIndex;
    return index === nbr ? 5 : 0;
  }

  const data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: null,
        data: showTemp,
        pointRadius: (ctx) => alternatePointRadius(ctx, active),
        borderColor: "dodgerblue",
        backgroundColor: "dodgerblue",
        tension: 0.4,
        borderWidth: 2,
        pointStyle: toggle ? `${showTemp[active]}°C` : `${showTemp[active]}°F`,
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
        min: -20,
        max: 120,
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
