import React from "react";
import location from "../images/location.png";
import gps from "../images/gps.png";

const HomeMiddle = () => {
  return (
    <div>
      <div className="MainHomeMiddile">
        <h1>
          Stay Home <span>-</span> We'll Deliver
        </h1>
        <h2 style={{ marginTop: "0", paddingTop: "0" }}>
          Get your Groceries delivered in less than one hour
        </h2>
      </div>
      <div>
        <form className="form">
          <input
            type="text"
            style={{
              backgroundImage: `url(${location})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "30px 19px",
            }}
            placeholder="Search for a location"
          />
          <div className="HomeContainer">
            <img src={gps} style={{ cursor: "pointer" }} title="gps" />
            <button>Search</button>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: 0,
          }}
        >
          <ul className="list">
            <li>
              <a href="#">new york</a>
            </li>
            <li>
              <a href="#">los angeles</a>
            </li>
            <li>
              <a href="#">chicago</a>
            </li>
            <li>
              <a href="#">Houston</a>
            </li>
            <li>
              <a href="#">phoenix</a>
            </li>
            <li>
              <a href="#">philadelphia</a>
            </li>
            <li>
              <a href="#">san antonio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
