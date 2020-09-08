import React from "react";
import illustration from "../images/illustration.jpg";

const MiddleBody = () => {
  return (
    <div className="MainMiddleBody">
      <div className="MiddleBodyContainer">
        <div style={{ marginBottom: "4rem" }}>
          <h4 style={{ color: "rgba(0,0,0,0.3)" }} className="TickBody">
            #GroceryDeliveredSafely
          </h4>
          <h1 style={{ margin: "0", fontSize: "2.2rem" }}>
            Hygenically
            <br /> Packed,
            <br />
            Safely Delivered
          </h1>
        </div>
        <a href="#">Learn More</a>
      </div>
      <img src={illustration} className="illustration" />
    </div>
  );
};

export default MiddleBody;
