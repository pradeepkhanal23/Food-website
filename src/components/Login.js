import React from "react";
import OrderImg from "../images/order-img.jpg";

const Login = () => {
  return (
    <section id="login" className="login">
      <h2 className="login-heading">
        <span>Order</span> Now
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
          <a href="#" className="btn login-btn">
            Order Now
          </a>
        </form>
      </article>
    </section>
  );
};

export default Login;
