import React from "react";
import { connect } from "react-redux";

import { setRadius } from "../../redux/actions/actions";

class Range extends React.Component {
  setValue = value => {
    this.props.setRadius(value);
  };

  handleChange = e => {
    const value = e.target.value;
    this.props.setRadius(value);
  };

  render() {
    const { radius } = this.props;
    return (
      <div className="range">
        <div className="range__label">
          <span onClick={() => this.setValue(500)}>500m</span>
          <span onClick={() => this.setValue(1000)}>1000m</span>
          <span onClick={() => this.setValue(1500)}>1500m</span>
          <span onClick={() => this.setValue(2000)}>2000m</span>
        </div>
        <input
          className="range__input"
          type="range"
          min="500"
          max="2000"
          step="500"
          value={radius}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    radius: state.nav.radius
  };
}

export default connect(mapStateToProps, { setRadius })(Range);
