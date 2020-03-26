import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const PageLayout = ({ children }) => {

  return (
    <div className="container">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
