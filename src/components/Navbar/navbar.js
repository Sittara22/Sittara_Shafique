import React, { useState } from "react";
import contact from "../../assets/contact.png";
import "./navbar.css";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="desktopMenue">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
            className="desktopMenuListItems"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="desktopMenuListItems"
          >
            Portfolio
          </Link>
          <Link
            className="desktopMenuListItems"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            About
          </Link>
        </div>

        <button
          onClick={() => {
            document
              .getElementById("Contact_me")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="desktopMenueBtn"
        >
          <img src={contact} alt="contact" className="desktopMenueImg" />
          Contact Me
        </button>
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => {
            setshowMenu(!showMenu);
          }}
        />
        <div
          className="navMenue"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            onClick={() => {
              setshowMenu(false);
            }}
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
            className="listItem"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setshowMenu(false);
            }}
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="listItem"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => {
              setshowMenu(false);
            }}
            className="listItem"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            About
          </Link>
          <Link
            onClick={() => {
              setshowMenu(false);
            }}
            className="listItem"
            activeClass="active"
            to="Contact_me"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
