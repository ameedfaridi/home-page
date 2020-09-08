import React from "react";
import logo from "../images/Logo.png";
import bar from "../images/bar.png";

const HomeTop = () => {
  return (
    <div>
      <div className="MainHomeTop">
        <div className="container">
          <img src={logo} />
        </div>
        <h3>
          <a
            href="#"
            style={{ color: "rgba(88,208,178)", textDecoration: "none" }}
          >
            Log in
          </a>
          <a className="signUp">Sign up</a>
        </h3>
      </div>
      <img src={bar} className="bar" className="bar" />
    </div>
  );
};

export default HomeTop;
