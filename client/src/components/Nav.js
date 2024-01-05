import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
function Nav() {
  return (
    <nav>
      <div className="item">
        <Link to="/">home</Link>
        <a>services</a>
        <a>colleges</a>
      </div>
      <div className="logo">
        <h1>
          <b>i</b>Campus
        </h1>
      </div>
      <div className="buttons">
        <Link to="/studentProfile">
          <div className="profile">
            Profile <FaUserTie className="icon" />
          </div>
        </Link>
        <Link to="/">
          <button className="btn-primary">logout</button>
        </Link>

        {/* <Link to="/studentLogin">
          <button className="btn-primary">Student login</button>
        </Link>
        <Link to="/AdminPortalLogin">
          <button className="btn-secondary">Admin Portal</button>
        </Link> */}
      </div>
    </nav>
  );
}

export default Nav;
