/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { allRequests } from '../../../Api/admins/requests/manageRequests';

const AllRequests = () => {
  const [requests, setRequests] = useState(null);
  const [error, setError] = useState('');

  const columns = [
    {
      name: 'Date',
      selector: (row) => row.reserve_date,
      sortable: (row) => row.reserve_date,
    },
    {
      name: 'Name',
      selector: (row) => row.user.first_name,
      sortable: (row) => row.user.first_name,
    },
    {
      name: 'Email',
      selector: (row) => row.user.email,
    },
    {
      name: 'Hall',
      selector: (row) => row.hall.name,
      sortable: (row) => row.hall.name,
    },
    {
      name: 'Cost',
      selector: (row) => row.hall.cost,
      sortable: (row) => row.hall.cost,
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

  useEffect(() => {
    allRequests(setError, setRequests);
  }, []);

  if (!requests) {
    return (
      <>
        {!error ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-lg text-center text-success" role="status" />
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="text-center">All Requests</h1>
          <h4 className="text-center mt-5 mb-5">Here you can see all requests</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <DataTable columns={columns} data={requests} highlightOnHover pagination responsive />
        </div>
      </div>
    </div>
  );
};

export default AllRequests;
