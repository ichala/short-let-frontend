import React from 'react';
import Features from './Features/Features';
import './home.css';

function Home() {
  return (
    <div className="overflow-hidden">
      <div className="data mt-1">
        <img className="home-image" src="https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="Home" />
        <Features />
      </div>
    </div>
  );
}

export default Home;
