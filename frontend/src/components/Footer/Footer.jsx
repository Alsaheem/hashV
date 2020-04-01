import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: "grey", color: "white" }}>
        <div className="col-6">
          <h2>Leads</h2>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.{" "}
          </p>
        </div>
        <div className="col-6">Likes</div>
      </div>
    </>
  );
};

export default Footer;
