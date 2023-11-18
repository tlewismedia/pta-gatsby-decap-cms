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
          <Link className="nav__link" to="/get-involved">
            Get Involved >
            <div className="nav__sub-links">
              <div className="nav__sub-link">
                <Link
                  className="nav__sub-link"
                  to="/get-involved/become-a-member"
                >
                  Become a Member
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link className="nav__sub-link" to="/get-involved/fundraise">
                  Fundraise
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link className="nav__sub-link" to="/get-involved/volunteer">
                  Volunteer
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link
                  className="nav__sub-link"
                  to="/get-involved/community-meetings"
                >
                  Community Meetings
                </Link>
              </div>
            </div>
          </Link>

          <Link className="nav__link" to="/products">
            About Us >
          </Link>

          <Link className="nav__link" to="/blog">
            Programs and Resources
            <div className="nav__sub-links">
              <div className="nav__sub-link">
                <Link
                  className="nav__sub-link"
                  to="/programs/after-school-care"
                >
                  After School Care
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link className="nav__sub-link" to="/programs/creston-sun">
                  Creston Sun
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link className="nav__sub-link" to="/programs/ccma">
                  CCMA
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link className="nav__sub-link" to="/programs/creston-library">
                  Creston Library
                </Link>
              </div>

              <div className="nav__sub-link">
                <Link
                  className="nav__sub-link"
                  to="/programs/food-family-resources"
                >
                  Food and Family Resources
                </Link>
              </div>
            </div>
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
