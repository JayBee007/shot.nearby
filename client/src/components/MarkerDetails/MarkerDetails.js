import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hideMarkerDetails } from "../../redux/actions/actions";

const MarkerDetails = props => {
  const { isMarkerDetailsVisible } = props;

  const markerClass = isMarkerDetailsVisible
    ? "marker-details marker-details--isVisible"
    : "marker-details marker-details--isNotVisible";

  return (
    <div className={markerClass}>
      <span onClick={props.hideMarkerDetails}>&times;</span>
      Marker Details
    </div>
  );
};

MarkerDetails.propTypes = {
  isMarkerDetailsVisible: PropTypes.bool.isRequired
};

export default connect(null, { hideMarkerDetails })(MarkerDetails);
