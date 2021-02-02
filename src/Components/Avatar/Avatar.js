import React from "react";
import avatar from "./avatar.png";

const Avatar = (props) => {
  return (
    <img
      className="ui tiny circular image avatar"
      src={avatar}
      alt="avatar"
    ></img>
  );
};

export default Avatar;
