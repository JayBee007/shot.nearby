import {
  SHOW_MARKER_DETAILS,
  HIDE_MARKER_DETAILS,
  SHOW_IMAGES,
  HIDE_IMAGES
} from "../../redux/constants/constants";

import {
  showMarkerDetails,
  hideMarkerDetails,
  showImages,
  hideImages
} from "../../redux/actions/actions";

describe("marker actions", () => {
  describe("marker detail actions", () => {
    it("shows marker details on the given location", () => {
      const location = { lat: 145.393, lng: 23.21 };
      const result = showMarkerDetails(location);

      expect(result).toEqual({
        type: SHOW_MARKER_DETAILS,
        location
      });
    });

    it("hides marker details", () => {
      const result = hideMarkerDetails();

      expect(result).toEqual({
        type: HIDE_MARKER_DETAILS
      });
    });
  });

  describe("image gallery actions", () => {
    it("shows nearby images in gallery", () => {
      const result = showImages();

      expect(result).toEqual({
        type: SHOW_IMAGES
      });
    });

    it("hides nearby images in gallery", () => {
      const result = hideImages();

      expect(result).toEqual({
        type: HIDE_IMAGES
      });
    });
  });
});
