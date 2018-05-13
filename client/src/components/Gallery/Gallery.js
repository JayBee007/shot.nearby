import React from "react";
import Lightbox from "react-images";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hideImages } from "../../redux/actions/actions";

class Gallery extends React.Component {
  state = {
    currentImage: 0,
    images: []
  };

  componentWillReceiveProps(nextProps) {
    let images = [];
    if (nextProps.areImagesVisible === true) {
      const { google, map, movieLocation } = this.props;
      const placesService = new google.maps.places.PlacesService(map);
      const request = {
        location: movieLocation,
        radius: "1500"
      };
      const fetchImages = (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < 10; i++) {
            images.push({
              src: results[i].photos[0].getUrl({
                maxWidth: 640,
                maxHeight: 480
              })
            });
          }
        }
        this.setState({
          images
        });
      };
      placesService.nearbySearch(request, fetchImages);
    }
  }

  gotoPrevLightboxImage = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNextLightboxImage = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  closeLightbox = () => {
    this.props.hideImages();
  };

  onClickThumbnail = index => {
    this.setState({
      currentImage: index
    });
  };

  render() {
    const { areImagesVisible } = this.props;
    const { images } = this.state;

    if (!areImagesVisible) return null;
    if (images.length < 1) return null;

    return (
      <Lightbox
        theme={{ container: { background: "rgba(62,16,70,.9)" } }}
        showThumbnails={true}
        onClickThumbnail={this.onClickThumbnail}
        currentImage={this.state.currentImage}
        images={images}
        isOpen={areImagesVisible}
        onClickPrev={this.gotoPrevLightboxImage}
        onClickNext={this.gotoNextLightboxImage}
        onClose={this.closeLightbox}
      />
    );
  }
}

Gallery.propTypes = {
  areImagesVisible: PropTypes.bool.isRequired,
  movieLocation: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired,
  map: PropTypes.object
};

function mapStateToProps(state) {
  return {
    areImagesVisible: state.marker.areImagesVisible,
    movieLocation: state.marker.location
  };
}

export default connect(mapStateToProps, { hideImages })(Gallery);
