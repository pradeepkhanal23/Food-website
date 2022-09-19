import React from "react";
import HomeImg from "../images/home-img.png";

const Home = () => {
  return (
    <section id="home">
      <div className="home-wrapper">
        <div className="left-section">
          <h2 className="food-title">Food Made With Love</h2>
          <p className="food-info">
            Tasty, delicious, and has me craving more on the first bite.” to
            “Juicy, mouthwatering, tasty, and everything you’d ever want to
            savor. High quality beef medium to well with cheese and bacon on a
            multigrain bun.
          </p>
          <button className="btn">Order Now</button>
        </div>
        <div className="right-section">
          <img src={HomeImg} alt="home-img" className="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
