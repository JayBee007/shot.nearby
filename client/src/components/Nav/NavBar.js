import React from "react";
import { connect } from "react-redux";

import { resetDirections } from "../../redux/actions/actions";
class NavBar extends React.Component {
  render() {
    const { nav, route, resetDirections } = this.props;
    const { isNavVisible } = nav;

    return (
      <div className={isNavVisible ? "navbar navbar--isVisible" : "navbar"}>
        <div className="navbar-direction">
          {route.length > 0 ? (
            <button className="btn btn-primary" onClick={resetDirections}>
              Clear route
            </button>
          ) : (
            <p>No Route</p>
          )}
          {route.length > 0 &&
            route[0].legs[0].steps.map(step => {
              return (
                <div className="navbar-direction-wrap" key={step.instructions}>
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
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
    route: state.directions.directions
  };
}

export default connect(mapStateToProps, { resetDirections })(NavBar);
