import React, { useState } from 'react';
import { PostReservation } from '../../Api/reservation/reservationApi';
import styles from './reservation.module.css';

function ChooseHall({ availableHalls, date, setSaved }) {
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [hall, setHall] = useState(availableHalls[0]);
  function ChooseHall(id) {
    availableHalls.forEach((hall) => {
      if (hall.id === Number(id)) {
        setHall(hall);
      }
    });
  }
  return (
    <section className="vh-75 mt-5 ">
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
                      Choose your date and we will list the available halls
                      for you
                    </cite>
                  </figcaption>
                </figure>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    PostReservation(setError, date, setloading, hall, setSaved);
                  }}
                  className="flex-nowrap d-flex justify-content-center align-items-center flex-column "
                >
                  <p className="text-danger mb-1 ">
                    {error && error.message}
                  </p>
                  <select
                    disabled={loading}
                    className="form-select"
                    aria-label="Default select example"
                    required
                    onChange={(e) => {
                      setError(null);
                      ChooseHall(e.target.value);
                    }}
                  >
                    {availableHalls.map((hall) => (
                      <option key={hall.id} value={hall.id}>
                        {hall.name}
                        {' --> '}
                        {hall.cost}
                        $ /day
                      </option>
                    ))}
                  </select>
                  {loading ? (
                    <div
                      className="spinner-grow mt-3 text-md text-center text-success"
                      role="status"
                    />
                  ) : (
                    <div>
                      <button
                        type="submit"
                        className="btn btn-dark mt-3"
                      >
                        Reserve
                      </button>
                    </div>
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

export default ChooseHall;
