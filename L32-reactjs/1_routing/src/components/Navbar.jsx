import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar contact">
      <NavLink className="nav-item" to="/">Home</NavLink>
      <NavLink className="nav-item" to="/contact">Contact</NavLink>
      <NavLink className="nav-item" to="/movies">Movies</NavLink>
    </div>
  );
};

export default Navbar;
