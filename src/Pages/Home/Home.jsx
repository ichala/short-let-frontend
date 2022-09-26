import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Features from './Features/Features';
import './home.css';

function Home() {
  return (
    <div className="overflow-hidden position-relative">
      <div className="row mt-4 data">
        <TypeAnimation
          cursor={false}
          sequence={[
            'Find your dream house...',
            1500,
            'Find your dream room...',
            1500,
            'Find your dream apartment...',
            1500,
            'Find your dream chamber...',
            1500,
          ]}
          speed={40}
          wrapper="h1"
          repeat={Infinity}
          className="text-center mt-5 mb-5 text-black fw-bolder fs-2"
        />
        <img className="home-image" src="https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Home" />
        <Features />
      </div>
    </div>
  );
}

export default Home;
