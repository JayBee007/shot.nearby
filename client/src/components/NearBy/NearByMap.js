import React from "react";
import { connect } from "react-redux";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// Components
import Loader from "../Loader/Loader";
import MarkerDetails from "../MarkerDetails/MarkerDetails";
import Gallery from "../Gallery/Gallery";
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
  componentDidMount() {
    const { google } = this.props;

    window.directionsService = new google.maps.DirectionsService();
    window.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  handleMarkerClick = movie => {
    const { title, location } = movie;
    this.props.showMarkerDetails(location);
    this.props.getMovieDetails(title);
  };

  filterMarkers = () => {
    const radius = this.props.radius;
    const { location } = this.props.map;
    return data.filter(movie => {
      const { maps } = this.props.google;
      let center = new maps.LatLng(location);
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

    this.props.setCurrentLocation({ lat, lng });
    this.renderMarkers();
    map.panTo({ lat, lng });
  };

  render() {
    const { isMarkerDetailsVisible } = this.props.marker;
    const { location } = this.props.map;

    return (
      <Map
        styles={styles}
        google={this.props.google}
        zoom={15}
        onClick={this.onMapClick}
        disableDefaultUI={true}
      >
        {this.renderMarkers()}
        <Marker position={location} icon={{ url: userMarker }} />
        <MarkerDetails isMarkerDetailsVisible={isMarkerDetailsVisible} />
        <Gallery />
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
