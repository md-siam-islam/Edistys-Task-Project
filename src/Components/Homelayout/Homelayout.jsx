import React from "react";
import Navnar from "../Navbar/Navnar";
import { Outlet } from "react-router-dom";
import Footer from "../FooterSection/Footer";

const Homelayout = () => {
  return (
    <div>
      <Navnar></Navnar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Homelayout;
