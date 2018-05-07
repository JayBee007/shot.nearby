import React from "react";
import { connect } from "react-redux";

import { setRadius } from "../../redux/actions/actions";

class NavBar extends React.Component {
  state = {
    value: 1000
  };

  setValue = value => {
    this.setState(
      () => ({
        value
      }),
      () => {
        this.props.setRadius(this.state.value);
      }
    );
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState(
      () => ({
        value
      }),
      () => {
        this.props.setRadius(this.state.value);
      }
    );
  };
  render() {
    const { nav } = this.props;
    const { value } = this.state;
    const { isNavVisible } = nav;
    return (
      <div className={isNavVisible ? "navbar navbar--isVisible" : "navbar"}>
        <div className="navbar__range">
          <p>Choose the radius</p>
          <div className="navbar__range-range">
            <span onClick={() => this.setValue(500)}>500m</span>
            <span onClick={() => this.setValue(1000)}>1000m</span>
            <span onClick={() => this.setValue(1500)}>1500m</span>
            <span onClick={() => this.setValue(2000)}>2000m</span>
          </div>
          <input
            className="navbar__range-input"
            type="range"
            min="500"
            max="2000"
            step="500"
            value={value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export default connect(mapStateToProps, { setRadius })(NavBar);
