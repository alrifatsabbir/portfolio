import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen load-screen">
      <span className="loading loading-infinity loading-xl loader-size"></span>
    </div>
  );
}

export default Loader;