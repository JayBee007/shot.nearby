import React from "react";

const Rating = props => {
  const { rating } = props;

  const getStarWidth = () => {
    const percent = rating / 10 * 100;

    return percent;
  };
  return (
    <div className="rating">
      <div className="rating-inner" style={{ width: getStarWidth() + "%" }} />
    </div>
  );
};

export default Rating;
