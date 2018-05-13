import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setRadius } from "../../redux/actions/actions";

const Range = props => {
  const setValue = value => {
    props.setRadius(value);
  };

  const handleChange = e => {
    const value = e.target.value;
    props.setRadius(value);
  };

  const { radius } = props;
  return (
    <div className="range">
      <div className="range__label">
        <span onClick={() => setValue(500)}>500m</span>
        <span onClick={() => setValue(1000)}>1000m</span>
        <span onClick={() => setValue(1500)}>1500m</span>
        <span onClick={() => setValue(2000)}>2000m</span>
      </div>
      <input
        className="range__input"
        type="range"
        min="500"
        max="2000"
        step="500"
        value={radius}
        onChange={handleChange}
      />
    </div>
  );
};

Range.propTypes = {
  radius: PropTypes.number.isRequired,
  setRadius: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    radius: state.nav.radius
  };
}

export default connect(mapStateToProps, { setRadius })(Range);
