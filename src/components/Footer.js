import * as React from "react";
import { Link } from "gatsby";
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
                  <Link
                    className="foot__support_lists_back"
                    to="https://www.pps.net/domain/66"
                  >
                    PPS Background Check
                  </Link>
                </li>
                <li>
                  <Link className="" to="/get-involved/fundraise">
                    Fundraise
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link
                    className=""
                    to="https://app.memberhub.gives/monthly-giving"
                  >
                    Donate to PTA
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
                  <Link className="" to="https://creston.memberhub.com/store">
                    Shop Creston Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot__right_lists">
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
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact/examples">Contact</Link>
              </li>
            </ul>

            <ul>
              <li></li>
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
