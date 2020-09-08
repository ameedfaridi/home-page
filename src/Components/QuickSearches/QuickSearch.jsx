import React from "react";
import "./QuickSearch.css";
import staples from "../images/staples.png";
import veggies from "../images/veggies.png";
import PersnalCare from "../images/pc.png";
import HomeKitchen from "../images/HK.png";
import Beverage from "../images/bev.png";

const QuickSearch = () => {
  return (
    <div className="MainQuickSearch">
      <h3>Here's what you need</h3>
      <h1>Quick Searches</h1>
      <div className="imgContainer">
        <img src={staples} />
        <img src={veggies} />
        <img src={PersnalCare} />
        <img src={HomeKitchen} />
        <img src={Beverage} style={{ marginBottom: "20px" }} />
      </div>
      <a href="#">Explore more</a>
    </div>
  );
};

export default QuickSearch;
