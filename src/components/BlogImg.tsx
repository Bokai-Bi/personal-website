import React from "react";

interface BlogImgProps {
  imgPath: string;
  altText: string;
  height: string;
  altAccessibility: string;
}

function BlogImg({ imgPath, altText, height, altAccessibility }: BlogImgProps) {
  if (height == "") {
    return (
      <div className="flex flex-col justify-center max-h-[50vh] ">
        <img
          src={imgPath}
          alt={altAccessibility}
          className="w-[50vw] mt-2 mx-[25vw] object-scale-down max-h-[45vh] lg:max-h-[35vh] "
        />
        <p className="text-center text-lg w-[50vw] my-2 mx-[25vw] ">
          {altText}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center max-h-[60vh] ">
        <img
          src={imgPath}
          alt={altAccessibility}
          className={
            "mt-2 min-mx-[25vw] object-contain w-auto " +
            "h-" +
            height +
            " max-h-[45vh] lg:max-h-[35vh]"
          }
        />
        <p className="text-center text-lg w-[50vw] my-2 mx-[25vw]">{altText}</p>
      </div>
    );
  }
}

export default BlogImg;
