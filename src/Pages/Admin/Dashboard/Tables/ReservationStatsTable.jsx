import React from 'react';
import styles from '../dashboard.module.css';

function ReservationStatsTable({ stats }) {
  return (
    <div className="col-12 col-md-8">
      <div className="card h-100 text-center">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Recent Reservations</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Hall</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((user, i) => (
                <tr key={i}>
                  <td>{user.user_name}</td>
                  <td>{user.hall_name}</td>
                  <td>{user.date}</td>
                  <td>
                    {user.status === 'Confirmed' && <span className="badge rounded-pill bg-success">Confirmed</span>}
                    {user.status === 'Pending' && <span className="badge rounded-pill bg-dark">Pending</span>}
                    {user.status === 'Refused' && <span className="badge rounded-pill bg-danger">Refused</span>}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default ReservationStatsTable;
