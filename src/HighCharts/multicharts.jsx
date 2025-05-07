import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './multiCharts.css';
// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

// Chart data
const data = {
  labels: ['Pending', 'initialized', 'Finished'],
  datasets: [
    {
      label: 'Grivences',
      data: [30, 50, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderColor: ['#fff', '#fff', '#fff'],
      borderWidth: 2
    }
  ]
};

// Chart options
const options = {
  responsive: true,
  cutout: '70%', // This makes it a donut
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Donut Chart Example'
    }
  }
};

const DonutChart = () => {
  return (
    <div className="dataChart">
        <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
