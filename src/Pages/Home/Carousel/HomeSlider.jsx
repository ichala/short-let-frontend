import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home.module.css';

function HomeSlider({ Halls }) {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          spaceBetween: 50,
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,

      }}
      loop
    >

      {Halls.map((hall) => (
        <SwiperSlide key={hall.id}>
          <div className={`card text-white ${styles.hall_card}`}>
            <img src={hall.image} className="card-img h-100" alt={hall.name} />
            <div className={`card-img-overlay ${styles.overlay}`}>
              <h5 className="card-title">{hall.name}</h5>
              <p className="card-text">{hall.description}</p>
              <p className="card-text">
                Added at
                {' '}
                {hall.created_at}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSlider;
