import * as React from "react";
import "../style/sub-header.sass";

const SubHeader = ({ title, image }) => {
  return (
    <div
      className="sub_header"
      style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
    >
      <div className="sub_header_overlay">
        {title}
      </div>
    </div>
  );
};

export default SubHeader;
