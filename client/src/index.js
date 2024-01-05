import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./assets/styles/index.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";

import StudentLogin from "./pages/Student/StudentLogin";
import AdminPortalLogin from "./pages/CollegeAdmin/AdminPortalLogin";

import Footer from "./components/Footer";
import Profile from "./pages/Student/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentLogin" element={<StudentLogin />}>
            <Route path="signIn" />
          </Route>
          <Route path="/adminPortalLogin" element={<AdminPortalLogin />}>
            <Route path="signIn" />
          </Route>
          <Route path="/studentProfile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
