import React from "react";
import { FoodGallery } from "../food-gallery";

const Gallery = () => {
  return (
    <section id="gallery">
      <h2 className="gallery-title">
        Our Food <span>Gallery</span>
      </h2>
      <div className="gallery-wrapper">
        {FoodGallery.map((item) => {
          const { id, image_url } = item;
          return (
            <article key={id} className="gallery-img">
              <div className="overlay-content">
                <h2>Tasty Food</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                  eligendi!
                </p>
                <button className="btn">Order Now</button>
              </div>
              <img src={image_url} alt="gallery-images" />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
