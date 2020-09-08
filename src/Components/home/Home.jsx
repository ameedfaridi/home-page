import React from "react";
import HomeTop from "./HomeTop";
import HomeMiddle from "./HomeMiddle";
import HomeTopImage from "../images/BG.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="mainHome">
      <HomeTop />
      <HomeMiddle />
    </div>
  );
};

export default Home;
