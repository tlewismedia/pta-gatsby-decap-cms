import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
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

  return (
    <div className="home">
      <div className="hero__fade"></div>

      <div className="home__hero">
        <div className="home__hero-container">
          <div className="home__hero-left">
            <div className="home__sub-tagline">Creston School PTA</div>

            <div className="home__tagline">
              Together
              <br /> we soar
            </div>

            <Link className="btn" to="/about-creston-pta">
              Learn about PTA
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
          <div className="home__sup_heading_items">
            <div className="home__sup_heading">
              Support Our School
              <img src="/img/underline.svg" alt="line" />
            </div>
          </div>

          <div className="home__sup_grid">
            <Link className="home__sup_grid_item" to="/get-involved/volunteer">
              <img src="/img/volunteer.svg" alt="Person 1" />
              Volunteer <br />
              Opportunities
            </Link>

            <Link className="home__sup_grid_item" to="/get-involved/fundraise">
              <img src="/img/fundraise.svg" alt="Person 2" />
              Fundraising <br />
              Events
            </Link>

            <Link
              className="home__sup_grid_item"
              to="/get-involved/community-meetings"
            >
              <img src="/img/community-meetings.svg" alt="Person 3" />
              Community <br />
              Meetings
            </Link>

            <Link
              className="home__sup_grid_item"
              to="/get-involved/become-a-member"
            >
              <img src="/img/membership.svg" alt="Person 4" />
              PTA <br />
              Membership
            </Link>
          </div>
        </div>
      </div>

      <div className="home__donate">
        <div className="home__don_container">
          <div className="home__don_text">Donate to Creston PTA</div>

          <Link
            className="home__don_btn"
            to="https://app.memberhub.gives/monthly-giving"
          >
            <button className="btn">Donate</button>
          </Link>

          {/* <button className="btn">Donate</button> */}
          {/* <button className="btn btn-alt">Become a Monthly Doner</button> */}
        </div>
      </div>

      <div className="home__eagle_art">
        <div className="home__eagle_art_container">
          <div className="home__eagle_art_left"></div>

          <div className="home__eagle_art_right">
            <div className="eagle_art">
            <img src="/img/eagle_art.png" alt="eagle" />
          </div>
        </div>
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
