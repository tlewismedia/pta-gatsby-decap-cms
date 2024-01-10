import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import PageRowContainer from "../components/PageRowContainer";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import "../style/home.sass";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="home">
      <div className="hero__fade"></div>

      <div className="home__hero">
        <div className="home__hero-container">
          <div className="home__hero-left">
            <div className="home__tagline">
              Together
              <br /> we soar
            </div>

            <Link className="btn" to="/about">
              Learn more about PTA
            </Link>
          </div>

          <div className="home__hero-right">
            <img src="/img/kids.png" alt="" className="home__kids" />
            <img src="/img/eagle.png" alt="" className="home__eagle" />
          </div>
        </div>
      </div>

      <div className="home__support">
        <div className="home__sup_container">
          <div className="home__sup_heading">Support our School</div>

          <div className="home__sup_grid">
            <div className="home__sup_grid_item">
              <img src="http://placehold.it/260x260" alt="Person 1" />
              <p>
                <Link className="" to="/get-involved/volunteer">
                  Volunteer
                </Link>
              </p>
            </div>

            <div className="home__sup_grid_item">
              <img src="http://placehold.it/260x260" alt="Person 2" />
              <p>
                <Link className="" to="/get-involved/fundraise">
                  Fundraise
                </Link>
              </p>
            </div>

            <div className="home__sup_grid_item">
              <img src="http://placehold.it/260x260" alt="Person 3" />
              <p>
                <Link className="" to="/get-involved/community-meetings">
                  Community Meetings
                </Link>
              </p>
            </div>

            <div className="home__sup_grid_item">
              <img src="http://placehold.it/260x260" alt="Person 4" />
              <p>
                <Link className="" to="/get-involved/become-a-member">
                  PTA Membership
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home__donate">
        <div className="home__don_container">
          <div className="home__don_text">Donate to Creston PTA</div>
          <button className="btn">Donate</button>
          <button className="btn btn-alt">Become a Monthly Doner</button>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
