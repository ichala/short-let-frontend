import React from 'react';
import styles from '../dashboard.module.css';

function UserStatsTable() {
  const DummyUsers = [{
    name: 'Ali',
    last_name: 'Jendoubi',
    email: 'Ali@dev.to',
  },
  {
    name: 'Eid',
    last_name: 'Hachem',
    email: 'Hachem@dev.to',
  }, {
    name: 'Aimal',
    last_name: 'Amiri',
    email: 'Aimal@dev.to',
  },
  {
    name: 'Lekan',
    last_name: 'Jimoh',
    email: 'Lekan@dev.to',
  }];
  return (
    <div className="col-12 col-md-4">
      <div className="card text-center">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Recent Users</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {DummyUsers.map((user) => (
                <tr key={user.email}>
                  <td>
                    {user.name}
                    {' '}
                    {user.last_name}
                  </td>
                  <td>{user.email}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default UserStatsTable;
