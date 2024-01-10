import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import "../style/footer.sass";

const Footer = () => {
  return (
    <footer>
      <div className="foot__top">
        <div className="foot__container">
          <div className="foot__support">
            <h2>Support Creston</h2>

            <div className="foot__support_lists">
              <ul>
                <li>
                  <Link className="" to="/get-involved/volunteer">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <a href="">PPS Background Check - TODO</a>
                </li>
                <li>
                  <Link className="" to="/get-involved/fundraise">
                    Fundraise
                  </Link>
                </li>
                <li>
                  <a href="">Advocate for kids - TODO</a>
                </li>
              </ul>

              <ul>
                <li>
                  <Link className="" to="/get-involved/community-meetings">
                    Donate to PTA
                  </Link>
                </li>
                <li>
                  <Link className="" to="/programs/after-school-care">
                    After School Care
                  </Link>
                </li>
                <li>
                  <Link className="" to="/get-involved/community-meetings">
                    Community Meetings
                  </Link>
                </li>
                <li>
                  <a href="">Shop Creston Store - TODO</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot__right_lists">
            <ul>
              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact/examples">
                  Contact
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <a href="">Terms and Conditions - TODO</a>
              </li>
              <li>
                <a href="">Privacy Policy - TODO</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="foot__bottom">
        <div className="foot__container">2022 Creston School PTA</div>
      </div>
    </footer>
  );
};

export default Footer;
