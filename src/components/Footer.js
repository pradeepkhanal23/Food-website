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
              <a key={id} href={url} target="_blank" rel="noreferrer">
                {site}
              </a>
            );
          })}
        </div>
        <p className="copyright">
          <span>Designed By</span>
          <a
            href="https://www.youtube.com/c/MrWebDesignerAnas"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bold"> Mr. Web Designer</span>
          </a>
          <span> Coded By</span>
          <a
            href="https://github.com/pradeepkhanal23"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bold"> Pradeep</span>
          </a>
          <span> | All Rights Reserved!</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
