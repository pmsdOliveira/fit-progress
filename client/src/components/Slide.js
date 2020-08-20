import React from "react";

const Slide = ({ n, src, title, text, btn }) => {
  return (
    <div className="slide-content">
      <img src={src} style={{ width: "100%" }}></img>
      <h1 className={`slide-${n}-titleOverlay`}>{title}</h1>
      <p className={`slide-${n}-textOverlay`}>{text}</p>
      <button className={`slide-${n}-btnOverlay`}>{btn}</button>
    </div>
  );
};

export default Slide;
