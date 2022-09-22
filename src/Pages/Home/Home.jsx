import React, { useState, useEffect } from 'react';

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  

  return (
    <section>
      <div>
        <a href="">
      <img src="images/logo.png" alt="Logo" />
      </a>
        </div>
        <div>
      <h1>Welcome to Short Let</h1>
      <h3>The Ulitmate experience for your short term rentals</h3>
       <p>
        Short Let offers you an exclusive get away experience guaranteed to satisfy all your needs <br />
       We have halls and rooms for every ocassion from weddings to indoor family celebrations </p>
      </div>
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
    </section>
  )
}

function Home() {

  return (
    <div className="home">
      <h2>Halls You Can choose from</h2>
      <Slideshow
        imgs={[
          'https://images.pexels.com/photos/265884/pexels-photo-265884.jpeg?cs=srgb&dl=pexels-pixabay-265884.jpg&fm=jpg',
          'https://www.pexels.com/photo/trendy-interior-of-cafe-with-creative-lamps-and-wooden-furniture-3887985/',
          'https://images.pexels.com/photos/2487438/pexels-photo-2487438.jpeg?cs=srgb&dl=pexels-kalz%F0%9F%93%B8%F0%9F%87%BA%F0%9F%87%AC-2487438.jpg&fm=jpg',
          'https://www.pexels.com/photo/stainless-steel-forks-and-bread-knives-on-white-table-cloth-11832567/',
        ]}
      />
    </div>
  );
}

export default Home;
