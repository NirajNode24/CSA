// Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const handleLogin = () => {
  window.location.href = 'http://localhost:3000/auth/google';
};


const Home = () => {
  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
      <p style={{ fontWeight: 'bold', padding: '10px' }}>
Customer Support is a range of services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, upgrading, and disposal of a product.
</p>
    </div>
  );
};

export default Home;
