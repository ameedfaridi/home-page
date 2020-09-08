import React from "react";
import "./SecondStep.css";
import two from "../images/two.png";
import second from "../images/SS.png";
import SPT from "../images/spt.png";

const SecondStep = () => {
  return (
    <div className="MainSecondStep">
      <main>
        <center>
          <div className="mainDiv">
            <img src={two} className="two" />
            <img src={SPT} className="two" />
          </div>
          <h4>
            Schedule the delivery at your convinient time and pay digitally
          </h4>
        </center>
        <img src={second} />
      </main>
    </div>
  );
};

export default SecondStep;
