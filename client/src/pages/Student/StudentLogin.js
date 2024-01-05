import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import StudentSignUp from "../../components/Login/StudentSignUp";
import StudentSignIn from "../../components/Login/StudentSignIn";

function Login() {
  return (
    <div id="Login">
      <div className="section-1">
        <h2>student login</h2>
        <Routes>
          <Route index element={<StudentSignUp />} />
          <Route path="signIn" element={<StudentSignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default Login;
