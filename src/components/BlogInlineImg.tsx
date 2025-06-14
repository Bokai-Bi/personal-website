import React from "react";

interface BlogInlineImgProps {
  imgPath: string;
  altText: string;
  altAccessibility: string;
}

function BlogImg({ imgPath, altText, altAccessibility }: BlogInlineImgProps) {
  return (
    <div className="flex flex-col justify-center">
      <img
        src={imgPath}
        alt={altAccessibility}
        className="mx-4 mt-2 object-cover"
      />
      <p className="text-center my-2">{altText}</p>
    </div>
  );
}

export default BlogImg;
