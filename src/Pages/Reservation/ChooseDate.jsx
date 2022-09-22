import React, { useState } from 'react';
import { checkDate } from '../../Api/reservation/reservationApi';
import styles from './reservation.module.css';

function ChooseDate({ setAvailableHalls, setDate, date }) {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  return (
    <section className={`vh-75 mt-5 ${styles.fade_in}`}>
      <div className="container py-5 mt-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
          <div className="col-md-12 col-lg-12 col-xl-12 mt-5">
            <div className={`${styles.card_bg} card text-white mt-md-5`}>
              <div className="card-body">
                <figure className="text-center text-sm">
                  <blockquote className="blockquote text-center">
                    <h3 className="display-4">Choose a date</h3>
                  </blockquote>
                  <figcaption className="blockquote-footer text-white">
                    <cite className="text-white">
                      Choose a date to see available halls
                    </cite>
                  </figcaption>
                </figure>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkDate(setError, setAvailableHalls, date, setloading);
                  }}
                  className="flex-nowrap d-flex justify-content-center align-items-center flex-column "
                >
                  <p className="text-danger mb-1 ">
                    {error && error.message}
                  </p>
                  <input
                    type="date"
                    className="form-control "
                    required
                    onChange={(e) => {
                      setError(null);
                      setDate(e.target.value);
                    }}
                  />
                  {loading ? (
                    <div
                      className="spinner-grow mt-3 text-md text-center text-success"
                      role="status"
                    />
                  ) : (
                    <button type="submit" className="btn btn-dark mt-3">
                      Next
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseDate;
