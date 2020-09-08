import React from "react";
import "./Footer.css";
import logo from "../images/small1.png";
import apple from "../images/small3.png";
import google from "../images/small2.png";

const Footer = () => {
  return (
    <div>
      <div className="FooterMain">
        <div>
          <div className="firstFlex">
            <img src={logo} />
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">English(International)</a>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "4rem", paddingLeft: "15px" }}>
            <a href="#" title="apple">
              <img src={apple} style={{ marginRight: "5px" }} />
            </a>
            <a href="#" title="google">
              <img src={google} />
            </a>
          </div>
        </div>
        <div className="flexItem">
          <h3>About us</h3>
          <ul style={{ paddingLeft: "0" }}>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Catergories</a>
            </li>
            <li>
              <a href="#">Cities</a>
            </li>
            <li>
              <a href="#">Become a partner</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="flexItem" style={{ alignItems: "flex-start" }}>
          <h3>Questions?</h3>
          <ul style={{ paddingLeft: "0px" }}>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
