import React from "react";
import { connect } from "react-redux";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// Components
import Loader from "../Loader/Loader";
import MarkerDetails from "../MarkerDetails/MarkerDetails";
// Data
import data from "../../data/dataWithCords.json";
import styles from "./mapStyles";
// Assets
import camera from "../../assets/img/camera_marker.png";
import userMarker from "../../assets/img/user_marker.png";
// Actions
import {
  showMarkerDetails,
  getMovieDetails,
  setCurrentLocation
} from "../../redux/actions/actions";
class NearbyMap extends React.Component {
  state = {
    currentCenter: this.props.map.location
  };

  handleMarkerClick = movie => {
    const { title, location } = movie;
    this.props.showMarkerDetails(location);
    this.props.getMovieDetails(title);
  };

  filterMarkers = () => {
    const radius = this.props.radius;
    return data.filter(movie => {
      const { maps } = this.props.google;
      let center = new maps.LatLng(this.state.currentCenter);
      let moviePoint = new maps.LatLng(movie.location);

      let distance = maps.geometry.spherical.computeDistanceBetween(
        center,
        moviePoint
      );

      if (distance < radius) {
        return true;
      } else {
        return false;
      }
    });
  };
  renderMarkers = () => {
    return this.filterMarkers().map(movie => {
      return (
        <Marker
          icon={{
            url: camera
          }}
          key={movie.id}
          position={movie.location}
          onClick={() => this.handleMarkerClick(movie)}
        />
      );
    });
  };

  onMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();

    this.setState(
      {
        currentCenter: { lat, lng }
      },
      () => {
        this.renderMarkers();
        map.panTo(this.state.currentCenter);
        this.props.setCurrentLocation({ lat, lng });
      }
    );
  };

  render() {
    const { currentCenter } = this.state;
    const { isMarkerDetailsVisible } = this.props.marker;
    return (
      <Map
        styles={styles}
        google={this.props.google}
        zoom={15}
        onClick={this.onMapClick}
        disableDefaultUI={true}
      >
        {this.renderMarkers()}
        <Marker position={currentCenter} icon={{ url: userMarker }} />
        <MarkerDetails isMarkerDetailsVisible={isMarkerDetailsVisible} />
      </Map>
    );
  }
}

function mapStatetoProps(state) {
  return {
    radius: state.nav.radius,
    marker: state.marker,
    map: state.map
  };
}

const connectNearByMap = connect(mapStatetoProps, {
  showMarkerDetails,
  getMovieDetails,
  setCurrentLocation
})(NearbyMap);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAxlHPHrZBPgk8Vho3gc6RylhUDY1Zp1jU",
  libraries: ["geometry", "places"],
  LoadingContainer: Loader
})(connectNearByMap);
