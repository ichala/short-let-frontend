/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './MyReservationsModal.css';
import GetReservationStats from '../../Api/myReservations/MyReservationsAPI';
import MyReservationsTable from './MyReservationsTable';

const MyReservations = () => {
  const [reservations, setReservations] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState('');
  const [reservation, setReservation] = useState(0);
  const user = useSelector((state) => state.user);

  const hide = () => {
    const alert = (
      <div className="alert alert-success">You have successfully cancelled your reservation</div>
    );
    setTimeout(() => {
      setDeleted(false);
    }, 3000);
    return alert;
  };

  useEffect(() => {
    GetReservationStats(setError, setReservations);
  }, [reservation]);

  if (!reservations) {
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
      <h1 className="text-center mb-5 mt-3">
        {user.first_name}
        {' '}
        {user.last_name}
        {' '}
        Reservations
      </h1>
      <h4 className="text-center mb-5">
        Hi
        {' '}
        <strong>{user.first_name}</strong>
        {' '}
        Below you can find details about all your reservations
      </h4>
      <div>
        <MyReservationsTable
          reservations={reservations}
          setError={setError}
          setReservation={setReservation}
          setDeleted={setDeleted}
        />
        {deleted && hide()}
      </div>
    </div>
  );
};

export default MyReservations;
