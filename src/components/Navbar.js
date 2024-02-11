import React from "react";
import { Link } from "gatsby";
import "../style/navbar.sass";

const Navbar = () => {

  return (
    <nav className="nav" role="navigation" aria-label="main-navigation">
      <Link to="/" title="Logo" className="nav__home_button">
        <img src="../img/pta-logo.svg" alt="Creston PTA Logo" />
      </Link>

      <div id="navMenu" className="nav__links">
        <div className="nav__link" to="/get-involved">
          Support Our School
          <div className="nav__sub-links">
            <div className="nav__sub-link">
              <Link
                className=""
                to="https://creston.memberhub.com/store?limit=21&live=true&category=Donations"
              >
                Donate
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="" to="/get-involved/volunteer">
                Volunteer
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="" to="/get-involved/fundraise">
                Fundraise
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="" to="/get-involved/community-meetings">
                Community Meetings
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="" to="/get-involved/become-a-member">
                Become a Member
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="" to="https://creston.memberhub.com/store">
                Shop the Creston Store
              </Link>
            </div>
          </div>
        </div>

        <div className="nav__link">
          <span className="hide-mobile">Programs and</span> Resources
          <div className="nav__sub-links nav__resources_links">
            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/programs/ccma">
                Mutual Aid (CCMA)
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

            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/programs/after-school-care">
                After School Care
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/programs/creston-sun">
                Creston Sun
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link
                className="nav__sub-link"
                to="/programs/kinder-new-families"
              >
                Kinder and New Families
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/programs/learning-gardens">
                Learning Gardens
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link
                className="nav__sub-link"
                to="/programs/dei-diversity-equity-and-inclusion"
              >
                Diversity, Equity, Inclusion (DEI)
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/programs/advocacy">
                Safe Routes to School
              </Link>
            </div>

            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/programs/creston-library">
                Creston Library
              </Link>
            </div>
          </div>
        </div>

        <div className="nav__link nav__link--about">
          About Us
          <div className="nav__sub-links">
            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/about/about-creston-pta">
                About PTA
              </Link>
            </div>
            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/about/about-creston-school">
                About Our School
              </Link>
            </div>
            <div className="nav__sub-link">
              <Link className="nav__sub-link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="nav__link nav__link--news">
          <Link className="nav__link" to="/news">
            News
          </Link>
        </div>

        {/* <Link className="nav__link" to="/contact">
            News
          </Link> */}

        {/* <Link className="nav__link" to="/contact/examples">
          News
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
