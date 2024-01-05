import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
      <form>
        <div className="input-Field">
          <input type="text" placeholder="student name" />
        </div>
        <div className="input-Field">
          <input type="text" placeholder="email" />
        </div>
        <div className="input-Field">
          <input type="text" placeholder="password" />
        </div>{" "}
        <div className="input-Field">
          <input type="text" placeholder="confirm password" />
        </div>
        <div className="input-Field">
          <input type="text" placeholder="college name" />
        </div>
        <div className="input-Field">
          <input type="text" placeholder="phone number" />
        </div>
        <div className="side">
          <div className="input-Field">
            <input type="text" placeholder="percentage" />
          </div>
          <label htmlFor="MarkInput">
            <b>upload file</b>
            <span>10th/12th result</span>
          </label>{" "}
          <input type="file" hidden id="MarkInput" placeholder="phone number" />
        </div>
        <button className="btn-primary">sign up</button>
        <div className="bottom">
          <Link to="/adminPortalLogin">Admin Portal</Link>
          <Link to="signIn">sign in</Link>
        </div>
      </form>
  );
}

export default SignUp;
