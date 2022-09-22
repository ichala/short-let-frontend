import React from 'react';
import styles from './reservation.module.css';

function HallDisplay({ hall }) {
  return (
    <>

      <div className={`card ${styles.fade_in} mb-3 mt-4 ${styles.hall_card}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={hall.image} className={`img-fluid rounded-start ${styles.hall_image}`} alt={hall.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className={`card-title display-6 text-white font-bold ${styles.text_main}`}>{hall.name}</h5>
              <p className="card-text">{hall.description}</p>
              <p className="card-text display-6 ">
                {Number(hall.cost)}
                $/Day
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HallDisplay;
