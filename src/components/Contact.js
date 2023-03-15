import React from "react";
import OrderImg from "../images/order-img.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>
        <span>Contact</span> Now
      </h2>
      <article className="row">
        <div className="image-container">
          <img src={OrderImg} alt="order-img" />
        </div>
        <form className="login-form">
          <div className="input-box">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Number" />
            <input type="text" placeholder="Food Name" />
          </div>
          <textarea
            placeholder="Enter your address here...."
            className="text-area"
          ></textarea>
          <button className="btn">Order Now</button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
