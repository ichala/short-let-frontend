import { useState, useEffect } from 'react';
import GetHalls from '../../Api/PublicApi/public_api';
import Styles from './halls.module.css';

function Halls() {
  const [Halls, setHalls] = useState(null);
  const [Error, setError] = useState(false);

  useEffect(() => {
    GetHalls(setError, setHalls);
  }, []);

  if (!Halls) {
    return (
      <>
        {!Error ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-grow text-lg text-center text-success"
              role="status"
            />
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
      <div className={Styles.hall_container}>
        {Halls.map((hall) => (
          <div key={hall.id} className="d-flex flex-column align-items-center">
            <img
              src={hall.image}
              alt={hall.name}
              className={`${Styles.image} rounded mb-2`}
            />
            <h5>{hall.name}</h5>
            <p>
              Capacity:
              {' '}
              {hall.capacity}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Halls;
