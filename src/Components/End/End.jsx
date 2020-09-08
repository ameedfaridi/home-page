import React from "react";
import "./End.css";
import insta from "../images/insta.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

const End = () => {
  return (
    <div className="end">
      <div className="endCont">
        <h4>© 2020 Apenning Infotect Pvt Ldt</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>
            <a href="#">Privacy</a>
          </h4>
          <h4>
            <a href="#">Accessiblity</a>
          </h4>
          <h4>
            <a href="#">Terms</a>
          </h4>
        </div>
        <div>
          <a href="#">
            <img src={insta} title="instagram" />
          </a>
          <a href="#">
            <img src={fb} title="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} title="Twitter" />
          </a>
          <a href="#">
            <img src={youtube} title="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default End;
