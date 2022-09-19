import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import styles from '../dashboard.module.css';

SwiperCore.use([Autoplay]);
function HallsCarousel() {
  const DummyHalls = [{
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil pariatur, rem modi iure distinctio voluptates vitae vero alias deserunt autem deleniti accusantium dolores ipsam minima tenetur asperiores labore quidem exercitationem!',
    name: 'Hall 1',
    date: '22/05/2022',
    image: 'https://cdn.britannica.com/69/143269-050-9D639E2F/Wainscot-hall-Chateau-de-Pierrefonds-France-Oise.jpg',

  },
  {
    id: 12,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil pariatur, rem modi iure distinctio voluptates vitae vero alias deserunt autem deleniti accusantium dolores ipsam minima tenetur asperiores labore quidem exercitationem!',
    name: 'Hall 2',
    date: '11/11/2022',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bb/dc/74/kings-hall.jpg?w=1200&h=-1&s=1',

  }, {
    id: 13,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil pariatur, rem modi iure distinctio voluptates vitae vero alias deserunt autem deleniti accusantium dolores ipsam minima tenetur asperiores labore quidem exercitationem!',
    name: 'Hall 3',
    date: '11/01/2022',
    image: 'https://sunnysworldpune.com/wp-content/uploads/2021/11/The-Kohinoor-Ac-Banquet-Hall-at-Sunnys-World-Pune-10-1.jpg',

  },
  {
    id: 14,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil pariatur, rem modi iure distinctio voluptates vitae vero alias deserunt autem deleniti accusantium dolores ipsam minima tenetur asperiores labore quidem exercitationem!',
    name: 'Hall 4',
    date: '23/02/2022',
    image: 'https://images.squarespace-cdn.com/content/v1/52efde0ee4b03137dd9d72a3/1548345997002-QOZDAREDKYZ29U8OTIZ4/Charlton-Hall-Wedding-Photos-1.jpg',

  }];
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

      {DummyHalls.map((hall) => (
        <SwiperSlide key={hall.id}>
          <div className={`card text-white ${styles.hall_card}`}>
            <img src={hall.image} className="card-img h-100" alt={hall.name} />
            <div className={`card-img-overlay ${styles.overlay}`}>
              <h5 className="card-title">{hall.name}</h5>
              <p className="card-text">{hall.description}</p>
              <p className="card-text">
                Added at
                {' '}
                {hall.date}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HallsCarousel;
