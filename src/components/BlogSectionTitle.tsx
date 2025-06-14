import React from "react";
import PropTypes from "prop-types";

function BlogSectionTitle(props) {
  return (
    <p className="text-4xl text-center font-bold px-10 mt-8 mb-2">
      {props.title}
    </p>
  );
}

export default BlogSectionTitle;
