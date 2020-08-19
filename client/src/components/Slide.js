import React from "react";

const Slide = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    //height: "auto",
  };

  return <img src={src} style={imgStyles}></img>;
};

export default Slide;
