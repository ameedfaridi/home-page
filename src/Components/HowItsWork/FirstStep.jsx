import React from "react";
import "./FirstStep.css";
import FirstS from "../images/fs.png";
import one from "../images/one.png";
import req from "../images/req.png";
import Apple from "../images/apple.png";
import GooglePlay from "../images/gp.png";

const FirstStep = () => {
  return (
    <div className="MainFirstStep">
      <h3>Get delivered in 3 easy steps</h3>
      <h1>Here's how it works</h1>
      <img src={FirstS} style={{ marginBottom: "20px" }} />
      <div className="imgtext">
        <img src={one} style={{ marginRight: "15px" }} />
        <img src={req} />
      </div>
      <div>
        <h4>
          Set your delivery location, Choose your groceries from a wide range of
          5000+ products
        </h4>
      </div>
      <div>
        <a href="#">
          <img src={Apple} alt="Apple Store" title="Apple" />
        </a>
        <a href="#">
          <img
            src={GooglePlay}
            alt="Google Store"
            title="Google"
            style={{ marginLeft: "5px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default FirstStep;
