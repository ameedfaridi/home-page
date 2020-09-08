import React from "react";
import third from "../images/three.png";
import Illustration from "../images/thirdStepI.png";
import text from "../images/idnr.png";
import "./ThirdStep.css";

const ThirdStep = () => {
  return (
    <div className="MainThirdStep">
      <center>
        <img src={Illustration} />
        <main>
          <div>
            <img src={third} classname="third" />
            <img src={text} />
          </div>
          <h4>
            Collect grociries at your doorstep and tell us about our service
          </h4>
        </main>
      </center>
    </div>
  );
};

export default ThirdStep;
