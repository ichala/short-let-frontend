import React from 'react';
import styles from '../home.module.css';

function Features() {
  return (
    <>

      <div className={`row ${styles.featurette}`}>
        <div className="col-md-8 order-md-2">
          <h2 className={`${styles.featurette_heading} fw-normal lh-1`}>

            We offers a large hall, studio and a small community meeting room
            {' '}
            <span className={styles.text_main}>Available For Rent.</span>
          </h2>
          <p className="lead">
            The Halls is ideally suited to support the delivery of a variety of programs,
            activities and events, including but not limited to:
            Health and wellbeing programs,
            Indoor sport and fitness programs ,
            Family & Children’s programs and activities ,
            Dance groups ,
            Education and training sessions ,
            Community gatherings, meetings and celebrations
          </p>
        </div>
        <div className="col-md-4" />
      </div>

      <div className={`row ${styles.featurette}`}>
        <div className="col-md-8">
          <h2 className={`${styles.featurette_heading} fw-normal lh-1`}>
            We Provide the best tools to find you what you need.
            {' '}
            <span className={styles.text_main}>And Yes ! Fast & Secured</span>
          </h2>
          <p className="lead">
            Short Let Island is 100% free halls reservation app .
            With Short Let Island, you can book, manage and access your reservations anytime from
            any device,
            including phones and tablets. No monthly fees, no software to install.

          </p>
        </div>
        <div className="col-md-4" />
      </div>

    </>
  );
}

export default Features;
