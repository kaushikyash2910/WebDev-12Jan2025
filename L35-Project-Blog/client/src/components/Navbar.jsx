import React from "react";
import { Link } from "react-router-dom";
import { useFetchUserQuery } from "../services/api";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#282c34",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "16px",
    margin: "0 10px",
  };

  const { data, isLoading, isError } = useFetchUserQuery();

  return (
    <>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <nav style={navStyle}>
          {!data.user ? (
            <div>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
              <Link to="/admin" style={linkStyle}>
                Admin Portal
              </Link>
              <Link to="/admin/new" style={linkStyle}>
                New Post
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/signup" style={linkStyle}>
                Signup
              </Link>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
