import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const location = useHistory();

  function goBack() {
    location.goBack();
  }

  return (  
    <div className="text-center mt-1">
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_jAWhUR.json"
        style={{ width: '400px', height: '400px' }}
        background="transparent"
        className="mx-auto"
        speed="1"
        autoplay
        loop
      >
      </lottie-player>

      <h1 style={{ marginTop: '-70px' }}>PAGE NOT FOUND</h1>

      <h5 className="text-muted">We looked everywhere for this page.</h5>
      <h5 className="text-muted">Are you sure the website URL is correct?</h5>
      <h5 className="text-muted">Get in touch with the site owner.</h5>

      <button onClick={goBack} className="btn btn-info mt-3">Go Back</button>
    </div>
  );
}

export default NotFound;
