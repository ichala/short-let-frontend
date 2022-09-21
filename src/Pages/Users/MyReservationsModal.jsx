/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MyReservationsModal.module.css';

const MyReservationsModal = ((props) => {
  const { reservation, setShowModal, cancelReservation } = props;
  const {
    hall: {
      capacity, cost, image, name, description,
    }, reserve_date: reserveDate, status,
  } = reservation;
  return ReactDOM.createPortal(
    <div>
      <div className={classes.overlay} onClick={setShowModal} role="presentation" />

      <div className={classes.popup}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text fw-semibold">{description}</p>
        </div>
        <div className="card-body d-flex flex-column flex-lg-row justify-content-center gap-lg-5 mt-3 align-items-center">
          <div>
            <p className="card-text mb-1">
              <span className="fw-bold text-secondary">Status:</span>
              {' '}
              {status === 'Pending' ? <span className="text-warning fw-semibold">{status}</span>
                : status === 'Approved' ? <span className="text-success fw-semibold">{status}</span>
                  : <span className="text-danger fw-semibold">{status}</span>}
            </p>
            <p className="card-text mb-1">
              <span className="fw-bold text-secondary">Capacity:</span>
              {' '}
              <span className="fw-semibold">{capacity}</span>
            </p>
          </div>
          <div>
            <p className="card-text mb-1">
              <span className="fw-bold text-secondary">Amount: </span>
              <span className="fw-semibold">
                $
                {cost}
              </span>
            </p>
            <p className="card-text">
              <span className="fw-bold text-secondary">Date:</span>
              {' '}
              <span className="fw-semibold">{reserveDate}</span>
            </p>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          {status === 'Pending' && (
            <button type="button" className="btn btn-danger m-2 btn-sm" onClick={cancelReservation(reservation.id)} id={reservation.id}>Cancel Reservation</button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
});

export default MyReservationsModal;
