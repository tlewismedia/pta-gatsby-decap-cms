import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SubHeader from "../components/SubHeader";
import "../style/generic-page.sass";

export const GenericPageTemplate = ({
  image,
  title,
  content,
  contentComponent,
}) => {
  let imgSrc;

  if (!!image.childImageSharp) {
    imgSrc = image.childImageSharp.fluid.src;
  } else if (typeof image === "string") {
    imgSrc = image;
  } else {
    imgSrc = image.url;
  }

  const PostContent = contentComponent || Content;

  return (
    <section className="generic_page">
      <SubHeader title={title} image={imgSrc} />

      <PostContent content={content} />
    </section>
  );
};

const GenericPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GenericPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

export default GenericPage;

export const pageQuery = graphql`
  query GenericPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
