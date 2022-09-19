import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from '../dashboard.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function HallsChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },

    },
  };

  const labels = ['Halls 1', 'Halls 2', 'Halls 3', 'Halls 4', 'Halls 5'];

  const data = {

    labels,
    datasets: [
      {
        label: 'total',
        data: [250, 156, 300, 232, 100],
        backgroundColor: 'rgba(63, 175, 78, 0.3)',
      },
      {
        label: 'Pending',
        data: [100, 70, 90, 25, 50],
        backgroundColor: 'rgba(0, 153, 113, 0.3)',
      },
      {
        label: 'Confirmed',
        data: [22, 22, 22, 22, 22],
        backgroundColor: 'rgba(0, 82, 81, 0.3)',
      },
    ],
  };
  return (
    <div className="col-12 col-md-6">
      <div className="card text-center">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Top Halls Stats</h5>
        </div>
        <div className="card-body">
          <Bar className={styles.pie_chart_container} options={options} data={data} />
        </div>
      </div>

    </div>

  );
}

export default HallsChart;
