import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = function () {
  return (
    <div className="footer-div">
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>Home</Link>
      <Link to={"/terms"}>Terms</Link>
    </div>
  );
};

export default Footer;
