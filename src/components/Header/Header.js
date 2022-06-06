import React, { useRef, useContext } from "react";

import { myContext } from "../Context/mycontext";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { navToggle, setNavToggle } = useContext(myContext);
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };
  const showLinks = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };

  return (
    <nav className="header-continer">
      <img className="logo" src="/assets/img/logo.png" alt=""></img>
      {/* <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a> */}

      <ul ref={navRef}>
        <li>
          <Link to="/" onClick={showLinks}>
            Main
          </Link>
        </li>
        <li>
          <Link to="/media" onClick={showLinks}>
            Media
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={showLinks}>
            Reviews
          </Link>
        </li>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </ul>

      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Header;
