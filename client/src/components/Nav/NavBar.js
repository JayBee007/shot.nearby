import React from "react";
import { connect } from "react-redux";
class NavBar extends React.Component {
  render() {
    const { nav } = this.props;
    const { isNavVisible } = nav;
    return (
      <div className={isNavVisible ? "navbar navbar--isVisible" : "navbar"} />
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export default connect(mapStateToProps, null)(NavBar);
