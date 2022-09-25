import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { GetHall } from '../../Api/PublicApi/public_api';
import styles from './HallDetails.module.css';
import { PostReservation } from '../../Api/reservation/reservationApi';

function HallDetails() {
  const { id } = useParams();
  const [Hall, setHall] = useState(null);
  const [Error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [Saved, setSaved] = useState(false);
  const date = useRef(null);

  function ConfirmReservation() {
    setloading(true);
    Swal.fire({
      title: `Do you want to confirm the reservation ? <br> <p class="mt-2 display-5"> ${Hall.name} </p> <br><p class="display-6">  Cost: ${Number(Hall.cost)}$ </p>`,
      showDenyButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: 'Cancel',
      allowOutsideClick: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        PostReservation(date.current.value, { id }).then((res) => {
          if (res.status === 200) {
            Swal.fire('Reservation Request Submitted', '', 'success');
            setSaved(true);
          }
        }).catch((e) => {
          if (e.toJSON().message === 'Network Error') {
            Swal.fire('No Internet Or Server is not running', '', 'danger');
            setloading(false);
          } else {
            Swal.fire(e.response.data.message, '', 'info');
            setloading(false);
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Reservation Canceled', '', 'info');
        setloading(false);
      }
    });
  }
  useEffect(() => {
    GetHall(setError, setHall, id);
  }, []);
  if (Saved) {
    return <Navigate to="/my-reservations" replace />;
  }
  if (!Hall) {
    return (
      <>

        {!Error ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-lg text-center text-success" role="status" />
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div>
        <div className="container-fluid  py-5">
          <Link
            type="button"
            className={`${styles.button} btn btn-light mb-2`}
            to="/halls"
          >
            <BiArrowBack size="30" />
          </Link>
          <div className="row align-items-md-stretch align-content-center justify-content-center">
            <div className="col col-lg-7 col-md-9 text-center mx-auto">
              <h2 className="display-3">{Hall.name}</h2>
              <div className="card d-flex  align-content-center justify-content-center ">
                <img src={Hall.image} alt={Hall.name} className={styles.image_hall} />
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-3 border text-white bg-light rounded-3">
              <table className="table">
                <tbody>
                  <tr>
                    <td className={styles.text_main}><b>Capacity</b></td>
                    <td>{Hall.capacity}</td>
                  </tr>
                  <tr>
                    <td className={styles.text_main}><b>Cost</b></td>
                    <td>
                      {Number(Hall.cost)}
                      $/Day
                    </td>
                  </tr>

                </tbody>
              </table>
              <p className="text-dark">
                {Hall.description}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`h-100 p-5 text-white text-center  border rounded-3 ${styles.bg_main}`}>
              <h5 className="display-6">
                Choose a Date
              </h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  ConfirmReservation();
                }}
                className="flex-nowrap d-flex justify-content-center align-items-center flex-column "
              >

                <input
                  type="date"
                  className="form-control "
                  required
                  ref={date}
                  onChange={() => setError(null)}
                />
                {loading ? (
                  <div
                    className="spinner-grow mt-3 text-md text-center text-success"
                    role="status"
                  />
                ) : (
                  <div className="font-weight-bold">
                    <button type="submit" className="btn btn-dark mt-3">
                      Book Now
                    </button>
                  </div>
                )}

              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HallDetails;
