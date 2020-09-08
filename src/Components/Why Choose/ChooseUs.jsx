import React from "react";
import "./ChooseUs.css";
import bg from "../images/Bg2.png";
import icon1 from "../images/NOM.png";
import icon2 from "../images/LOT.png";
import icon3 from "../images/TFBSD.png";
import BAP from "../images/BAP.png";
import images from "../images/Images.png";

const ChooseUs = () => {
  return (
    <div className="main" style={{ backgroundImage: `url(${bg})` }}>
      <main>
        <h4 style={{ paddingTop: "3rem" }}>Why Choose Fresh Grocery</h4>
        <h1>Because we are in it together</h1>
        <center>
          <div>
            <img src={icon1} />
            <h2>No Minimum Order</h2>
            <h4>
              No order value restriction, Order for yourself or your group
            </h4>
          </div>
          <div>
            <img src={icon2} />
            <h2>Live Order Tracking</h2>
            <h4>Track your order anytime from the store to your door step</h4>
          </div>
          <div>
            <img src={icon3} />
            <h2>24 x 7 Delivery</h2>
            <h4>Order anytime, anywhere. We will get you delivered</h4>
          </div>
        </center>
      </main>
      <div className="head">
        <label>
          <nav className="heading">
            <div>
              <h1>Become a Partner and start earning!</h1>
              <h3>
                You can login and logout whenever you want! No mandetory timings
              </h3>
            </div>
            <a href="#">Become a Partner</a>
          </nav>
          <img src={images} />
        </label>
      </div>
    </div>
  );
};

export default ChooseUs;
