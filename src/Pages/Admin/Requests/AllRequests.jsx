import React, { useEffect, useState } from 'react';
import fetchRequests from '../../../Api/admins/requests/manageRequests';

const AllRequests = () => {
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
    <div />
  );
};

export default AllRequests;
