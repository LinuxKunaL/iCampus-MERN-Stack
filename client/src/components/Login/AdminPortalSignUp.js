import React from "react";
import { Link } from "react-router-dom";

function AdminPortalSignUp() {
  return (
    <form>
      <div className="input-Field">
        <input type="text" placeholder="college name *" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="college code *" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="college address *" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="email *" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="password *" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="confirm password *" />
      </div>
      <button className="btn-primary">Sign Up</button>
      <div className="bottom">
        <Link to="signIn">Admin sign in</Link>
        <Link to="/studentLogin">student login</Link>
      </div>
    </form>
  );
}

export default AdminPortalSignUp;
