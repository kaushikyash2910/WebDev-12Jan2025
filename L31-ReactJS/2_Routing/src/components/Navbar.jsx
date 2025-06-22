import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const navStyle = {
    border: "1px solid black",
    position: "sticky",
    top: "0px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "40px",
  };
  return (
    <div style={navStyle}>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
