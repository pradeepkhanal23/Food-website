import React from "react";
import { popularFoods } from "../popular-foods";

const Popular = () => {
  return (
    <section id="popular">
      <div className="popular-wrapper">
        <h2 className="popular-title">
          Our <span>Popular</span> Dishes
        </h2>
        <div className="popular-foods">
          {popularFoods.map((item) => {
            const { id, image_url, title } = item;
            return (
              <article key={id} className="popular-food">
                <img src={image_url} alt={title} className="p-img" />
                <h3>{title}</h3>
                <div className="ratings">
                  <span>&#9733; </span>
                  <span>&#9733; </span>
                  <span>&#9733; </span>
                  <span>&#9733; </span>
                  <span>&#9734; </span>
                </div>
                <span className="price">$5-$20</span>
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
