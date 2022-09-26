/* eslint-disable no-nested-ternary */
import React from 'react';
import DataTable from 'react-data-table-component';
import styles from '../dashboard.module.css';

function ReservationStatsTable({ stats }) {
  const columns = [
    {
      name: 'User',
      selector: (row) => row.user_name,
    },
    {
      name: 'Hall',
      selector: (row) => row.hall_name,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
    },
    {
      name: 'Status',
      button: true,
      cell: (data) => (
        <span className="d-none d-lg-block">
          {data.status === 'Pending' ? (
            <span className="bg-warning text-white fw-semibold rounded status">{data.status}</span>
          ) : data.status === 'Confirmed' ? (
            <span className="bg-success text-white fw-semibold rounded status">{data.status}</span>
          ) : (
            <span className="bg-danger text-white fw-semibold rounded status">{data.status}</span>
          )}
        </span>
      ),
    },
  ];

  return (
    <div className="col-12 col-md-8">
      <div className="card h-100 text-center">
        <div className={`card-header text-white ${styles.card_bg}`}>
          <h5>Recent Reservations</h5>
        </div>
        <div className="card-body">
          <DataTable columns={columns} data={stats} highlightOnHover pagination responsive />
        </div>
      </div>
    </div>
  );
}

export default ReservationStatsTable;
