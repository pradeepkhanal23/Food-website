import React from "react";
import Step1 from "../images/step-1.jpg";
import Step2 from "../images/step-2.jpg";
import Step3 from "../images/step-3.jpg";
import Step4 from "../images/step-4.jpg";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="hiw-wrapper">
        <h2 className="hiw-title">
          How It <span>Works</span>
        </h2>
        <div className="order-steps">
          <div className="step-1">
            <img src={Step1} alt="step1-img" />
            <p>Choose Your </p>
            <p>Favourite Food</p>
            <div className="order-guide">
              <p>1</p>
            </div>
          </div>
          <div className="step-2">
            <img src={Step2} alt="step1-img" />
            <p>Free and Fast</p>
            <p> Delivery</p>
            <div className="order-guide">
              <p>2</p>
            </div>
          </div>
          <div className="step-3">
            <img src={Step3} alt="step1-img" />
            <p>Easy Payment</p>
            <p> Methods</p>
            <div className="order-guide">
              <p>3</p>
            </div>
          </div>
          <div className="step-4">
            <img src={Step4} alt="step1-img" />
            <p>And Finally, Enjoy</p>
            <p> Your Food</p>
            <div className="order-guide">
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
