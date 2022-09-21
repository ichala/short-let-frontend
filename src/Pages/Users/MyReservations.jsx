/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './MyReservationsModal.module.css';
import GetReservationStats from '../../Api/myReservations/MyReservationsAPI';

const MyReservations = () => {
  const [reservations, setReservations] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const user = useSelector((state) => state.user);
  const btnRef = useRef();

  const handleModal = (reservation) => {
    setShowModal(!showModal);
    btnRef.current = reservation.id;
  };

  useEffect(() => {
    GetReservationStats(setError, setReservations);
  }, []);

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
        <table className={`table text-center table-responsive  ${classes.table}`}>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Hall</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.reserve_date}</td>
                <td>{reservation.hall.name}</td>
                <td>
                  {reservation.status === 'Pending' ? <span className="bg-warning text-white fw-semibold rounded m-2 py-1 px-1">{reservation.status}</span>
                    : reservation.status === 'Approved' ? <span className="bg-success text-white fw-semibold rounded m-2 py-1">{reservation.status}</span>
                      : <span className="bg-danger text-white fw-semibold rounded m-2 py-1">{reservation.status}</span>}
                </td>
                <td>
                  <button
                    type="button"
                    className={`btn btn-sm ${classes.button}`}
                    onClick={() => handleModal(reservation)}
                    id={reservation.id}
                    ref={btnRef}
                  >
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReservations;
