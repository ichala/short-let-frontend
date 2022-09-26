import React from 'react';
import Features from './Features/Features';
import './home.css';

function Home() {
  return (
    <div className="overflow-hidden position-relative">
      <div className="row mt-4 data">
        <img className="home-image" src="https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Home" />
        <Features />
      </div>
    </div>
  );
}

export default Home;
