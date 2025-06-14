import React from "react";

interface BlogTextProps {
  text: string;
}

function BlogText({ text }: BlogTextProps) {
  return (
    <p className="text-left text-xl flex text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
      {text}
    </p>
  );
}

export default BlogText;
