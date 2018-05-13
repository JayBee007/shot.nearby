import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { resetDirections, hideNav } from "../../redux/actions/actions";
const NavBar = props => {
  const handleResetDirections = () => {
    const { resetDirections, hideNav } = props;
    resetDirections();
    hideNav();
  };

  const { nav, route } = props;
  const { isNavVisible } = nav;

  return (
    <div className={isNavVisible ? "navbar navbar--isVisible" : "navbar"}>
      <div className="navbar-direction">
        {route.length > 0 ? (
          <button className="btn btn-primary" onClick={handleResetDirections}>
            Clear route
          </button>
        ) : (
          <p>No Route</p>
        )}
        {route.length > 0 &&
          route[0].legs[0].steps.map((step, i) => {
            return (
              <div
                className="navbar-direction-wrap"
                key={step.instructions + i}
              >
                <p
                  className="navbar-direction-p"
                  dangerouslySetInnerHTML={{ __html: step.instructions }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  nav: PropTypes.object.isRequired,
  route: PropTypes.array.isRequired,
  resetDirections: PropTypes.func.isRequired,
  hideNav: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    nav: state.nav,
    route: state.directions.directions
  };
}

export default connect(mapStateToProps, { resetDirections, hideNav })(NavBar);
