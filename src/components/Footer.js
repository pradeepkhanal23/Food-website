import React from "react";
import { SocialLinks } from "../social-buttons";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer-wrapper">
        <div className="social-links">
          {SocialLinks.map((item) => {
            const { id, site, url } = item;
            return (
              <a key={id} className="btn" href={url} target="_blank">
                {site}
              </a>
            );
          })}
        </div>
        <p className="copyright">
          Designed By{" "}
          <a
            href="https://www.youtube.com/c/MrWebDesignerAnas"
            target="_blank"
            rel="noreferrer"
          >
            <span>Mr. Web Designer</span>
          </a>{" "}
          Coded By{" "}
          <a
            href="https://github.com/pradeepkhanal23"
            target="_blank"
            rel="noreferrer"
          >
            <span>Pradeep</span>
          </a>{" "}
          | All Rights Reserved!
        </p>
      </div>
    </section>
  );
};

export default Footer;
