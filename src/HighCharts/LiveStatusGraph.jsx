import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);

const generateRandomUpdate = (prev) => ({
  Pending: Math.max(0, prev.Pending + Math.floor(Math.random() * 3 - 1)),       // -1 to +1
  Initialized: Math.max(0, prev.Initialized + Math.floor(Math.random() * 2)),  // +0 to +1
  Finished: prev.Finished + Math.floor(Math.random() * 2)                      // +0 to +1
});

const StatusLineGraph = () => {
  const [timestamps, setTimestamps] = useState([]);
  const [dataPoints, setDataPoints] = useState({
    Pending: [],
    Initialized: [],
    Finished: []
  });

  const chartRef = useRef(null);
  const statusRef = useRef({ Pending: 5, Initialized: 3, Finished: 2 });

  useEffect(() => {
    const interval = setInterval(() => {
      const newStatus = generateRandomUpdate(statusRef.current);
      statusRef.current = newStatus;

      const time = new Date().toLocaleTimeString();

      setTimestamps(prev => [...prev.slice(-9), time]);
      setDataPoints(prev => ({
        Pending: [...prev.Pending.slice(-9), newStatus.Pending],
        Initialized: [...prev.Initialized.slice(-9), newStatus.Initialized],
        Finished: [...prev.Finished.slice(-9), newStatus.Finished]
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getGradient = (ctx, color) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    return gradient;
  };

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Pending',
        data: dataPoints.Pending,
        borderColor: '#f39c12',
        backgroundColor: (ctx) => getGradient(ctx.chart.ctx, 'rgba(243, 156, 18, 0.4)'),
        fill: true,
        tension: 0.4,
        pointRadius: 4
      },
      {
        label: 'Initialized',
        data: dataPoints.Initialized,
        borderColor: '#3498db',
        backgroundColor: (ctx) => getGradient(ctx.chart.ctx, 'rgba(52, 152, 219, 0.4)'),
        fill: true,
        tension: 0.4,
        pointRadius: 4
      },
      {
        label: 'Finished',
        data: dataPoints.Finished,
        borderColor: '#2ecc71',
        backgroundColor: (ctx) => getGradient(ctx.chart.ctx, 'rgba(46, 204, 113, 0.4)'),
        fill: true,
        tension: 0.4,
        pointRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: '500'
          }
        }
      },
      title: {
        display: true,
        text: 'Live Grievance Status Tracker',
        color: '#111',
        font: {
          size: 20,
          weight: 'bold',
          family: 'Segoe UI'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ddd',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#666' },
        grid: { color: '#eee' }
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#666' },
        grid: { color: '#f5f5f5' }
      }
    }
  };

  return (
    <div style={{
      padding: '1rem',
      margin: '2rem auto',
      maxWidth: '900px',
      borderRadius: '20px',
      background: '#fff',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
    }}>
      <div style={{ height: '400px' }}>
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default StatusLineGraph;
