import React from "react";
import { specialFoods } from "../special-foods";

const Special = () => {
  return (
    <section id="special" className="special">
      <div className="special-wrapper">
        <h2 className="special-title">
          Our <span>Special</span> Dishes
        </h2>
        <div className="special-foods">
          {specialFoods.map((item) => {
            const { id, image_url, title, desc } = item;
            return (
              <article key={id} className="special-food">
                <img
                  src={require(`../images/s-img-${id}.jpg`)}
                  alt="overlay-img"
                  className="overlay-image"
                />
                <div className="content">
                  <img src={image_url} alt={title} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Special;
