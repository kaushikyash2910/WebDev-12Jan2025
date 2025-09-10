import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminPortal from "./pages/AdminPortal";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/admin/new" element={<NewPost />} />
          <Route path="/admin/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
