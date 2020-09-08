import React from "react";
import tick from "../images/Tick1.jpg";
import MiddleBody from "./MiddileBody";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="Main_middle">
      <MiddleBody />
      <div id="TickContainer">
        <div className="TickBody">
          <img src={tick} />
          <h4 style={{ width: "10rem" }}>Zero touch delivery option</h4>
        </div>
        <div>
          <img src={tick} />
          <h4 style={{ width: "10rem" }}>Regular cleaning of warehouses</h4>
        </div>
        <div>
          <img src={tick} />
          <h4 style={{ width: "10rem" }}>Fewer scanning of all executives</h4>
        </div>
      </div>
    </div>
  );
};

export default Middle;
