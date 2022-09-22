import React, { useEffect, useState } from 'react';
import GetHalls from '../../Api/PublicApi/public_api';
import HomeSlider from './Carousel/HomeSlider';
import Features from './Features/Features';
import styles from './home.module.css';

function Home() {
  const [Halls, setHalls] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    GetHalls(setError, setHalls);
  }, []);

  if (!Halls) {
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

      <div className="row justify-content-center">
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
      </div>

      <div className="row">
        <HomeSlider Halls={Halls} />
      </div>

      <div className="row">
        <Features />
      </div>
    </>
  );
}

export default Home;
