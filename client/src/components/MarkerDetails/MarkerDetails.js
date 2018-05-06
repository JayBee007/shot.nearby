import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hideMarkerDetails } from "../../redux/actions/actions";

class MarkerDetails extends React.Component {
  componentDidUpdate(prevProps) {
    const wordArray = this.innerBox.innerHTML.split("");
    while (this.innerBox.clientHeight > this.outerBox.clientHeight) {
      wordArray.pop();
      this.innerBox.innerHTML = wordArray.join("") + "...";
    }
  }

  render() {
    const { isMarkerDetailsVisible, movie, hideMarkerDetails } = this.props;
    const { Poster, Title, Released, Runtime, Plot } = movie;
    const markerClass = isMarkerDetailsVisible
      ? "marker-details marker-details--isVisible"
      : "marker-details marker-details--isNotVisible";

    return (
      <div className={markerClass}>
        <span className="marker-details__close" onClick={hideMarkerDetails}>
          &times;
        </span>

        <div className="marker-details__img">
          <img src={Poster} alt="Movie Poster" />
        </div>

        <div className="marker-details__info">
          <div className="marker-details__meta">
            <p className="marker-details__year">{Released}</p>
            <p className="marker-details__runtime">{Runtime}</p>
          </div>
          <p className="marker-details__title">{Title}</p>

          <div
            ref={el => (this.outerBox = el)}
            className="marker-details__plot--outer"
          >
            <p
              ref={el => (this.innerBox = el)}
              className="marker-details__plot--inner"
            >
              {Plot}
            </p>
          </div>

          <p className="marker-details__route">
            <span className="marker-details__route--icon">&#8620;</span>Create a
            route
          </p>
        </div>
      </div>
    );
  }
}

MarkerDetails.propTypes = {
  isMarkerDetailsVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    movie: state.movie.data
  };
}

export default connect(mapStateToProps, { hideMarkerDetails })(MarkerDetails);
