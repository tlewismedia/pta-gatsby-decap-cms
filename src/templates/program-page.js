import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
// export const ProgramPageTemplateHold = ({
//   image,
//     content,
//   contentComponent,
//   title,
//   helmet,
// }) => {
//   const PostContent = contentComponent || Content;
//   const heroImage = getImage(image);

//   return (
//     <section className="section">
//         test
//     { heroImage }
//         test
//       {helmet || ""}
//       <div className="container content">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <FullWidthImage img={heroImage} title={title} />

//             <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
//               {title}
//             </h1>
//             PRGROMA TEMPLATE
//             <PostContent content={content} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const ProgramPageTemplate = ({
    image,
  title,
}) => {
    console.log('image:')
    console.log(image)

    const newimage = getImage(image) || image;

    console.log('newimage:')
    console.log(newimage)

  return (
    <section className="section">
       {title}
       
        {image?.url ? (
          <img
            src={image}
            objectFit={"cover"}
        
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={image}
            objectFit={"cover"}
            layout="fullWidth"
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}

    </section>
  );
};

// ProgramPageTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
// };

const ProgramPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
        OUTER PRGROMA TEMPLATE

        {/* <GatsbyImage image={image} alt='test' /> */}

      {/* <ProgramPageTemplate
        image={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Page">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
      /> */}

      <ProgramPageTemplate
       
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage}
        
        
      />
    </Layout>
  );
};

ProgramPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProgramPage;

export const pageQuery = graphql`
  query ProgramPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
            childImageSharp {
                gatsbyImageData(
                    width: 120
                    quality: 100
                    layout: CONSTRAINED
                )

            }
        }
      }
    }
  }
`;


// export const pageQuery = graphql`
//   query BlogPostByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// `;
