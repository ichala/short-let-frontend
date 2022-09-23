/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { allRequests } from '../../../Api/admins/requests/manageRequests';
import classes from '../../Users/MyReservationsModal.module.css';

const AllRequests = () => {
  const [requests, setRequests] = useState(null);
  const [error, setError] = useState('');

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
          <table className="table table-responsive text-center table-condensed mt-4 mb-5">
            <thead className="align-middle table-headeri active">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th className="d-none d-lg-block" scope="col">Email</th>
                <th scope="col" className="d-none d-lg-table-cell">Hall</th>
                <th scope="col" className="d-none d-lg-table-cell">Cost</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="align-middle bg-light">
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.reserve_date}</td>
                  <td className="d-none d-lg-block mt-3 pb-3">{request.user.email}</td>
                  <td>{request.user.first_name}</td>
                  <td className="d-none d-lg-table-cell">{request.hall.name}</td>
                  <td className="d-none d-lg-table-cell">{request.hall.cost}</td>
                  <td>
                    {request.status === 'Pending' ? <span className={`bg-warning text-white fw-semibold rounded ${classes.status}`}>{request.status}</span>
                      : request.status === 'Confirmed' ? <span className={`bg-success text-white fw-semibold rounded ${classes.status}`}>{request.status}</span>
                        : <span className={`bg-danger text-white fw-semibold rounded ${classes.status}`}>{request.status}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRequests;
