import React from "react";
import { connect } from "react-redux";

import MarkerDetails from "../MarkerDetails/MarkerDetails";
import NearByMap from "./NearByMap";
import Nav from "../Nav/Nav";
import NavBar from "../Nav/NavBar";
import Range from "../Range/Range";

const NearBy = props => {
  const location = {
    lat: 37.775316,
    lng: -122.4174374
  };

  const { marker } = props;
  const { isMarkerDetailsVisible } = marker;

  return (
    <div className="map">
      <Nav />
      <NavBar />
      <Range />
      <MarkerDetails isMarkerDetailsVisible={isMarkerDetailsVisible} />
      <NearByMap center={location} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    marker: state.marker
  };
}
export default connect(mapStateToProps, null)(NearBy);
