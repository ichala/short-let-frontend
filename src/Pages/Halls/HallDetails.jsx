import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetHall } from '../../Api/PublicApi/public_api';
import styles from './HallDetails.module.css';

function HallDetails() {
  const { id } = useParams();
  const [Hall, setHall] = useState(null);
  const [Error, setError] = useState(null);
  useEffect(() => {
    GetHall(setError, setHall, id);
  }, []);
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
    <div>
      <div className="container-fluid  py-5">

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
                  <td>Capacity</td>
                  <td>{Hall.capacity}</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>
                    {Number(Hall.cost)}
                    $/Day
                  </td>
                </tr>

              </tbody>
            </table>
            <p className="text-dark p-2 ">
              {Hall.description}

            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark border rounded-3">
            <h2>Add borders</h2>
            <p>
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at the source
              HTML here as weve adjusted the alignment and
              sizing of both columns content for equal-height.

            </p>
            <button className="btn btn-outline-success" type="button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HallDetails;
