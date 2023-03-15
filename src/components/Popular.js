import React from "react";
import { popularFoods } from "../popular-foods";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineFire,
} from "react-icons/ai";

const Popular = () => {
  return (
    <section id="popular" className="popular">
      <div className="popular-wrapper">
        <h2 className="popular-title">
          Our <span>Popular</span> Dishes
        </h2>
        <div className="popular-foods">
          {popularFoods.map((item) => {
            const { id, image_url, title } = item;
            return (
              <article key={id} className="popular-food">
                <div className="popular-img-container">
                  <img src={image_url} alt={title} className="p-img" />
                </div>
                <h3>{title}</h3>
                <div className="additional-info">
                  <div className="clock">
                    <AiOutlineClockCircle />
                    <p>50min</p>
                  </div>
                  <div className="star">
                    <AiOutlineStar />
                    <p> 4.5</p>
                  </div>
                  <div className="fire">
                    <AiOutlineFire />
                    <p>325 Cal</p>
                  </div>
                </div>
                <button className="btn">Order Now</button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
