import React from 'react';
import styles from '../dashboard.module.css';

function ReservationStatsTable() {
  const DummyReservartions = [{
    id: 1,
    user: 'Ali',
    hall: 'Hall 1',
    date: '22/05/2022',
    status: 'Confirmed',
  },
  {
    id: 12,
    user: 'Eid',
    hall: 'Hall 2',
    date: '11/11/2022',
    status: 'Pending',
  }, {
    id: 13,
    user: 'Aimal',
    hall: 'Hall 3',
    date: '11/01/2022',
    status: 'Refused',
  },
  {
    id: 14,
    user: 'Lekan',
    hall: 'Hall 2',
    date: '23/02/2022',
    status: 'Pending',
  }];
  return (
    <div className="col-12 col-md-8">
      <div className="card text-center">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Recent Reservations</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead className={styles.card_bg}>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Hall</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {DummyReservartions.map((user) => (
                <tr key={user.id}>
                  <td>{user.user}</td>
                  <td>{user.hall}</td>
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
