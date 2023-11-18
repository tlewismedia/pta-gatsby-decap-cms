import React from "react";
import { NewsPageTemplate } from "../../templates/news-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <NewsPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default AboutPagePreview;
