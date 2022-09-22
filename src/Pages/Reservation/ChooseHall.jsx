import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BiArrowBack } from 'react-icons/bi';
import { PostReservation } from '../../Api/reservation/reservationApi';
import HallDisplay from './HallDisplay';
import styles from './reservation.module.css';

function ChooseHall({
  setAvailableHalls, availableHalls, date, setSaved,
}) {
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
  function ConfirmReservation() {
    Swal.fire({

      title: `Do you want to confirm the reservation ? <br> <p class="mt-2 display-5"> ${hall.name} </p> <br><p class="display-6">  Cost: ${Number(hall.cost)}$ </p>`,
      showDenyButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: 'Cancel',
      allowOutsideClick: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        PostReservation(setError, date, setloading, hall, setSaved);
        Swal.fire('Reservation Request Submitted', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Reservation Canceled', '', 'info');
      }
    });
  }
  return (
    <section className="vh-75 mt-5 ">

      <div className="container py-5 mt-5 h-100">

        <div className="row d-flex align-items-center justify-content-center h-100 mt-5">

          <div className="col-md-12 col-lg-12 col-xl-12 mt-5">
            <button onClick={() => setAvailableHalls([])} type="button" className="btn btn-dark">
              <BiArrowBack size="30" />
            </button>
            <div className={`${styles.card_bg} card text-white mt-md-3`}>
              <div className="card-body">
                <figure className="text-center text-sm">
                  <blockquote className="blockquote text-center">
                    <h3 className="display-4">Choose a Hall</h3>
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
                    ConfirmReservation();
                  }}
                  className="flex-nowrap d-flex justify-content-center align-items-center flex-column "
                >
                  <p className="text-danger mb-1 ">
                    {error && error.message}
                  </p>
                  <select
                    disabled={loading}
                    className="form-select text-center"
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
                      </option>
                    ))}
                  </select>

                  <HallDisplay hall={hall} />
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
                        Book Now
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
