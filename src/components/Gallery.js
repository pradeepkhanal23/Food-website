import React from "react";
import { FoodGallery } from "../food-gallery";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-title">
        Our Food <span>Gallery</span>
      </h2>
      <div className="gallery-images">
        {FoodGallery.map((item) => {
          const { id, image_url } = item;
          return (
            <div key={id}>
              <img src={image_url} alt="gallery photos" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
