import React from "react";
import { connect } from "react-redux";

import { showNav, hideNav } from "../../redux/actions/actions";

export const Nav = props => {
  const { showNav, hideNav, nav } = props;
  const { isNavVisible } = nav;

  if (isNavVisible) {
    return (
      <div className="nav" onClick={hideNav}>
        <span className="fas fa-times nav-icon" />
      </div>
    );
  } else {
    return (
      <div className="nav" onClick={showNav}>
        <span className="fas fa-bars nav-icon" />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export default connect(mapStateToProps, { showNav, hideNav })(Nav);
