import React from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import MobileScreen from "../../assets/img/mobile.png";

const Landing = props => {
  const handleClick = () => {
    const { history } = props;
    history.push("/nearby");
  };

  return (
    <div className="landing">
      <div className="landing-nav">
        <div className="landing-logo">
          <img className="landing-logo__img" src={Logo} alt="logo" />
        </div>
      </div>
      <div className="landing-jumbo">
        <div className="landing-desc">
          <h1 className="landing-title">
            Silicon Valley meets{" "}
            <span className="landing-title__gold">Hollywood</span>
          </h1>
          <p className="landing-caption">
            Find near by location of movies in your neighborhood, check them
            out, take pics and show to the world
          </p>
          <p className="landing-caption">Discover your area, find fun facts</p>
          <p className="landing-caption">
            Walk through the streets, make routes and invite your friends
          </p>
          <p className="landing-caption">Burn calories and fulfil the route</p>

          <button onClick={handleClick} className="btn landing-cta">
            Check the locations now!!
          </button>
        </div>
        <div className="landing-jumbo_mob">
          <img
            className="landing-jumbo_mob-img"
            src={MobileScreen}
            alt="mobile screen"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Landing);
