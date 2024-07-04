import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherChart = ({ hourlyData }) => {
  const data = {
    labels: hourlyData.map((data) => new Date(data.dt * 1000).getHours()),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: hourlyData.map((data) => data.main.temp),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (Hours)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        ticks: {
          beginAtZero: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Hourly Temperature</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
