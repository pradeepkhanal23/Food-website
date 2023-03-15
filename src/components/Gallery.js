import React from "react";
import { FoodGallery } from "../food-gallery";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-title">
        Our Food <span>Gallery</span>
      </h2>
      <div className="gallery-wrapper">
        {FoodGallery.map((item) => {
          const { id, image_url } = item;
          return <img src={image_url} alt="gallery-images" key={id} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
