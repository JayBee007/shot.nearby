import React from "react";

import NearByMap from "./NearByMap";

const NearBy = props => {
  const location = {
    lat: 37.775316,
    lng: -122.4174374
  };
  return (
    <div style={{ height: `100%` }}>
      <NearByMap
        center={location}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
      />
    </div>
  );
};

export default NearBy;
