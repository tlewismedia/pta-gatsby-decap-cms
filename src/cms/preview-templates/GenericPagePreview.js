import React from "react";
import { GenericPageTemplate } from "../../templates/generic-page";

const GenericPagePreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <div>
      <GenericPageTemplate
        image={getAsset(entry.getIn(["data", "image"]))}
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
      />
    </div>
  );
};

export default GenericPagePreview;
