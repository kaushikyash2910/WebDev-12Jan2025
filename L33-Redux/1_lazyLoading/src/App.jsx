import React, { Suspense } from "react";
import Home from "./components/Home";
import { NavLink, Route, Routes } from "react-router";
import NotLazy from "./components/NotLazy";

const LazyHome = React.lazy(() => import("./components/Home"));
const LazyContact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink to="/">Landing Page</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {NotLazy()}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>I am a Landing Page</div>}></Route>
          <Route path="/home" element={<LazyHome />}></Route>
          <Route path="/contact" element={<LazyContact />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
