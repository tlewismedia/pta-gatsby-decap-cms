import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
// import logo from "../img/pta-logo.png";
import "../style/navbar.sass";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="nav" role="navigation" aria-label="main-navigation">
      <div className="nav__container">
        <Link to="/" title="Logo">
          <img src="../img/pta-logo.png" alt="Kaldi" />
        </Link>

        {/* <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        > */}
        <div id="navMenu" className="nav__links">
          <Link className="nav__link" to="/about">
            Get Involved >
          </Link>

          <Link className="nav__link" to="/products">
            About Us >
          </Link>

          <Link className="nav__link" to="/blog">
            Programs and Resources >
          </Link>

          <Link className="nav__link" to="/contact">
            News
          </Link>

          <Link className="nav__link" to="/contact/examples">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
