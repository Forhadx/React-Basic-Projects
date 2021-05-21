import React, { useState } from "react";

import "./Location.css";

const Location = () => {
  const [position, setPosition] = useState();
  const [error, setError] = useState();

  const locationHandler = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position);
      },
      (err) => {
        setError(err);
      }
    );
  };

  console.log(error);

  return (
    <div className="main">
      <button className="btn-location" onClick={locationHandler}>
        Show My Location
      </button>
      {position ? (
        <a
          className="map-link"
          href={`https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`}
        >
          Click here &rarr;
        </a>
      ) : null}

      {error ? <p className="error">{error.message}</p> : null}
    </div>
  );
};

export default Location;
