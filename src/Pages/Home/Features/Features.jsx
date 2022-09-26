import React from 'react';
import styles from '../home.module.css';

function Features() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className="text-bg-success rounded display-4 mb-5 text-white fw-semibold px-5 py-3">Find your dream place</span>
        </div>
        <div className={`${styles.featureContainer}`}>
          <div>
            <h5 className="fw-normal">
              We offers a large hall, studio and a small community meeting room
              {' '}
              <span className={styles.text_main}>Available For Rent.</span>
            </h5>
            <p className="fw-light">
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
          <div />
        </div>
        <div className={`${styles.featureContainer}`}>
          <div>
            <h5 className="fw-normal">
              We Provide the best tools to find you what you need.
              {' '}
              <span className={styles.text_main}>And Yes ! Fast & Secured</span>
            </h5>
            <p className="fw-light">
              Short Let Island is 100% free halls reservation app .
              With Short Let Island, you can book, manage and access your reservations anytime from
              any device,
              including phones and tablets. No monthly fees, no software to install.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
