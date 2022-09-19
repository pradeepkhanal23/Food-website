import React from "react";
import { Testimonials } from "../testimonials";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Review = () => {
  return (
    <section id="review" className="review">
      <h2 className="review-title">
        Our Customer <span>Review</span>
      </h2>
      <div className="testimonials">
        {Testimonials.map((item) => {
          const { id, image_url, name, desc } = item;
          return (
            <article key={id} className="testimony">
              <img src={image_url} alt="testimonial-images" />
              <h3 className="customer-name">{name}</h3>
              <div className="customer-ratings">
                <span>&#9733; </span>
                <span>&#9733; </span>
                <span>&#9733; </span>
                <span>&#9733; </span>
                <span>&#9734; </span>
              </div>
              <p className="customer-feedback">
                <RiDoubleQuotesL className="quote" />
                {desc}
                <RiDoubleQuotesR className="quote" />
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
