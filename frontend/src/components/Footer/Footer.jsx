import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="row" style={{ height: "100px", backgroundColor: "grey" }}>
        <div className="col-4">Location</div>
        <div className="col-4">Likes</div>
        <div className="col-4">Developer</div>
      </div>
    </>
  );
};

export default Footer;
