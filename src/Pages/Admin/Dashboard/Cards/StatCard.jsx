import React from 'react';
import styles from '../dashboard.module.css';

function StatCard({ data }) {
  return (
    <div className="col-12 col-md-3">
      <div className={`card text-white ${styles.card_bg} mb-3`}>
        <div className="card-body d-flex justify-content-around align-items-center">
          <div>
            <h2 className="card-title">{data.stat_name}</h2>
            <h6 className="card-title">{data.stat_number}</h6>
          </div>
          {data.stat_icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
