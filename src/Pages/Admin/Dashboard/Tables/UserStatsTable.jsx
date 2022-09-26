import React from 'react';
import DataTable from 'react-data-table-component';
import styles from '../dashboard.module.css';

const UserStatsTable = ({ stats }) => {
  const columns = [
    {
      name: 'Fullname',
      selector: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
  ];

  return (
    <div className="col-12 col-md-4">
      <div className="card text-center h-100">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Recent Users</h5>
        </div>
        <div className="card-body">
          <DataTable columns={columns} data={stats} highlightOnHover pagination responsive />
        </div>
      </div>
    </div>
  );
};

export default UserStatsTable;
