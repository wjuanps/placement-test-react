import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div className="text-center mt-5">
    <lottie-player
      className="mx-auto"
      src="https://assets7.lottiefiles.com/packages/lf20_7DnubQ.json"
      background="transparent"
      speed="1"
      style={{ width: '200px', height: '200px' }}
      loop
      autoplay >
    </lottie-player>

    <h1>Oh no!</h1>

    <h3 className="text-muted">Something went wrong. Please try again later.</h3>

    <Link to="https://bra.really.education" target="_blank" className="btn btn-info mt-3">Go Back</Link>
  </div>
);

export default Error;
