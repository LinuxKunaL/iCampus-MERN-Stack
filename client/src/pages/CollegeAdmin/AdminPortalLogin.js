import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPortalSignUp from "../../components/Login/AdminPortalSignUp";
import AdminPortalSignIn from "../../components/Login/AdminPortalSignIn";

function AdminPortalLogin() {
  return (
    <div id="Login">
      <div className="section-1">
        <h2>admin Portal</h2>
        <Routes path="/login/adminPortal">
          <Route index element={<AdminPortalSignUp />} />
          <Route path="signIn" element={<AdminPortalSignIn />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPortalLogin;
