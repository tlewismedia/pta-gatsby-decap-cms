import * as React from "react";
import { Link } from "gatsby";
import "../style/footer.sass";

const Footer = () => {
  return (
    <footer>
      <div className="foot__top">
        <div className="foot__container">
          <div className="foot__support_lists">
            <ul>
              <h2>Support Creston</h2>
              <li>
                <Link
                  className=""
                  to="https://www.konstella.com/open/donations/66d8a2221b5ce153b7dc6ee8"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link className="" to="/get-involved/volunteer">
                  Volunteer
                </Link>
              </li>

              <li>
                <Link
                  className="foot__support_lists_back"
                  to="https://www.pps.net/domain/66"
                >
                  Background Check
                </Link>
              </li>

              <li>
                <Link className="" to="/get-involved/fundraise">
                  Fundraise
                </Link>
              </li>
              <li>
                <Link className="" to="/get-involved/community-meetings">
                  Community Meetings
                </Link>
              </li>
              <li>
                <Link className="" to="/get-involved/become-a-member">
                  PTA Membership
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="https://www.konstella.com/app/school/669afb141b5ceab26a5c9b2f/sales-sheets"
                >
                  Shop Our Store
                </Link>
              </li>
            </ul>

            <ul>
              <h2>Resources</h2>
              <li>
                <Link className="" to="/programs/ccma">
                  Mutual Aid (CCMA)
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/food-family-resources">
                  Food and Family
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/after-school-care">
                  After School Care
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/creston-sun">
                  Creston SUN
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/kinder-new-families">
                  Kinder and New Families
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/learning-gardens">
                  Learning Gardens
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/programs/dei-diversity-equity-and-inclusion"
                >
                  Diversity, Equity, Inclusion
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/advocacy">
                  Safe Routes to School
                </Link>
              </li>
              <li>
                <Link className="" to="/programs/creston-library">
                  School Specials
                </Link>
              </li>
            </ul>

            <ul>
              <h2>About</h2>
              <li>
                <Link className="" to="/about/about-creston-pta">
                  PTA
                </Link>
              </li>
              <li>
                <Link className="" to="/about/pta-board-members/">
                  Board Members
                </Link>
              </li>
              <li>
                <Link className="" to="/about/about-creston-school">
                  Creston School
                </Link>
              </li>
              <li>
                <Link className="foot_support_lists_contact" to="/contact">
                  <h3>Contact Us</h3>
                </Link>
                <p>
                  Creston Elem. School
                  <br />
                  4701 SE Bush St.
                  <br />
                  Portland, OR 97206
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <Link
                  className="foot__right_lists_social"
                  to="https://www.facebook.com/crestonschoolpta/"
                >
                  <img src="/img/facebook.svg" alt="F" />
                </Link>
                <Link
                  className="foot__right_lists_social"
                  to="https://www.instagram.com/crestonpta/reels/"
                >
                  <img src="/img/ig.svg" alt="IG" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="foot__bottom">
        <div className="foot__container">&#169; 2024 Creston School PTA</div>
      </div>
    </footer>
  );
};

export default Footer;
