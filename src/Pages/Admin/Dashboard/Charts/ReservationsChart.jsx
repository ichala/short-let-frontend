import React from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from '../dashboard.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);
function ReservationsChart() {
  const data = {
    labels: ['Confirmed', 'Refused', 'Pending'],
    datasets: [
      {
        label: 'Reservations stats',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(63, 175, 78, 0.3)',
          'rgba(0, 153, 113, 0.3)',
          'rgba(0, 82, 81, 0.3)',
        ],
        borderColor: [
          'rgba(63, 175, 78, 1)',
          'rgba(0, 153, 113, 1)',
          'rgba(0, 82, 81, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="col-12 col-md-6">
      <div className="card text-center">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Reservations Stats</h5>
        </div>
        <div className="card-body">
          <Pie className={styles.pie_chart_container} data={data} />
        </div>
      </div>

    </div>
  );
}

export default ReservationsChart;
