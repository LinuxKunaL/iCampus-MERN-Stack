import React from "react";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <form>
      <div className="input-Field">
        <input type="text" placeholder="email" />
      </div>
      <div className="input-Field">
        <input type="text" placeholder="password" />
      </div>{" "}
      <button className="btn-primary">sign In</button>
      <div className="bottom">
        <Link to="/adminPortalLogin">Admin Portal</Link>
        <Link to="/studentLogin">sign Up</Link>
      </div>
    </form>
  );
}

export default SignIn;
