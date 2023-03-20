import React from "react";
import { navlinks } from "../navlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav id="nav" className="nav">
      <div className="nav-wrapper">
        <a href="#home" className="nav-header">
          <FaUtensils id="logo" />
          <span>Food</span>
        </a>

        <ul className="nav-links">
          {navlinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.linkId}`}>{link.pagename}</a>
              </li>
            );
          })}
        </ul>

        <div className="nav-menu">
          <GiHamburgerMenu
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>

        <div className={`${open ? "sliding-menu open" : "sliding-menu"}`}>
          <ul className="sliding-menu-navlinks">
            {navlinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.linkId}`} onClick={() => setOpen(false)}>
                    {link.pagename}
                  </a>
                </li>
              );
            })}
          </ul>
          <AiOutlineClose
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
