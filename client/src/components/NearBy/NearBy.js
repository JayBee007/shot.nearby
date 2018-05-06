import React from "react";

import NearByMap from "./NearByMap";

const NearBy = props => {
  const location = {
    lat: 37.775316,
    lng: -122.4174374
  };

  return (
    <div style={{ height: `100%` }}>
      <NearByMap center={location} />
    </div>
  );
};

export default NearBy;
