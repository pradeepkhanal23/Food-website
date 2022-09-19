import React from "react";
import { navlinks } from "../navlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [activeClass, setActiveClass] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <nav id="nav" className="nav">
      <div className="nav-wrapper">
        <div className="main-logo">
          <div className="brand-name">
            <FaUtensils id="logo" />
            <span>Food</span>
          </div>
          {navOpen ? (
            <AiOutlineClose
              className="close-icon"
              onClick={() => {
                setActiveClass(false);
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="burger-menu"
              onClick={() => {
                setActiveClass(true);
                setNavOpen(true);
              }}
            />
          )}
        </div>
        <ul className={`${activeClass ? "nav-links active" : "nav-links"}`}>
          {navlinks.map((item) => {
            const { pagename, id, linkId } = item;
            return (
              <a
                href={`#${linkId}`}
                onClick={() => {
                  setNavOpen(false);
                  setActiveClass(false);
                }}
                key={id}
                className={`${activeClass ? "nav-items active" : "nav-items"}`}
              >
                {pagename}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
