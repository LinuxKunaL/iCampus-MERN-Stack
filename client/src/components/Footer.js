import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <div className="logo">
        <h1>
          <b>i</b>Campus
        </h1>
      </div>
      <div className="item">
        <a>felids</a>
        <a>services</a>
        <a>colleges</a>
      </div>
      <div className="item">
        <span>
          {" "}
          <IoIosCall />
          +91 2993 4322 34
        </span>

        <span>
          <FaMessage />
          divya@gmail.com
        </span>
      </div>
      <div className="line"></div>
      <p>© 2023 ICampus. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
