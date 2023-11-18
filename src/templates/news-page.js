import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const NewsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="">
      ABOUT TEMPLATE
      <h2 className="">{title}</h2>
      <PageContent className="content" content={content} />
    </div>
  );
};

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NewsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export default NewsPage;

export const aboutPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
