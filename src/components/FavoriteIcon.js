import React from "react";

import favorite from "assets/img/favorite-icon.png";
import favoriteFilled from "assets/img/favorite-filled-icon.png";

const FavoriteIcon = ({
  className = "",
  status = false,
  checkText = "",
  onChecked = () => {},
  uncheckText = "",
  onUnchecked = () => {},
}) => {
  return status ? (
    <div className={`btn ${className}`} onClick={onUnchecked}>
      <img
        src={favoriteFilled}
        alt="remove from favorite"
        width="40"
        height="40"
      />{" "}
      {uncheckText}
    </div>
  ) : (
    <div className={`btn ${className}`} onClick={onChecked}>
      <img src={favorite} alt="add to favorite" width="40" height="40" />{" "}
      {checkText}
    </div>
  );
};
export default FavoriteIcon;
