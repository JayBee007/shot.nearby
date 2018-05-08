import React from "react";

import NearByMap from "./NearByMap";
import Nav from "../Nav/Nav";
import NavBar from "../Nav/NavBar";
import Range from "../Range/Range";

const NearBy = props => {
  return (
    <div className="map">
      <Nav />
      <NavBar />
      <Range />
      <NearByMap />
    </div>
  );
};

export default NearBy;
