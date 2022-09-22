/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import fetchRequests from '../../../Api/admins/requests/manageRequests';
import RequestModal from './RequestModal';

const ManageRequests = () => {
  const [requests, setRequests] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests(setError, setRequests);
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
    <div>
      <table className="table table-responsive text-center table-condensed mt-4">
        <thead className="align-middle table-headeri active">
          <tr>
            <th scope="col">Name</th>
            <th className="d-none d-lg-block" scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {requests.map((request) => request.status === 'Pending' && (
          <tr key={request.id}>
            <td>{request.user.first_name}</td>
            <td className="d-none d-lg-block mt-3 pb-3">{request.user.email}</td>
            <td>{request.reserve_date}</td>
            <td>
              <RequestModal request={request} />
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRequests;
