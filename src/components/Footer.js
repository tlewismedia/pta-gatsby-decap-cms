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
                  <a href="">Volunteer</a>
                </li>
                <li>
                  <a href="">PPS Background Check </a>
                </li>
                <li>
                  <a href="">Fundraise</a>
                </li>
                <li>
                  <a href="">Advocate for kids</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="">Donate to PTA</a>
                </li>
                <li>
                  <a href="">Become a member</a>
                </li>
                <li>
                  <a href="">Community Meetings</a>
                </li>
                <li>
                  <a href="">Shop Creston Store</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot__right_lists">
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
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
