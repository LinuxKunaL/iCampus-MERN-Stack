import React from "react";
import { Link } from "react-router-dom";

function AdminPortalSignIn() {
  return (
    <form>
      <div className="input-Field">
        <input type="text" placeholder="email *" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="password *" />
      </div>
      <button className="btn-primary">sign in</button>
      <div className="bottom">
        <Link to="/adminPortalLogin">Admin login</Link>
        <Link to="/studentLogin">student login</Link>
      </div>
    </form>
  );
}

export default AdminPortalSignIn;
