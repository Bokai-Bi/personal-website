import React from "react";

function getColorById(id: number): string {
  const colors = [
    "text-red-700",
    "text-blue-700",
    "text-green-700",
    "text-yellow-700",
    "text-purple-700",
    "text-pink-700",
  ];
  return colors[id % colors.length];
}

function dotIfList(item: string): string {
  return item[0] != "X" ? "•" : "";
}

function removeFirstIfX(item: string): string {
  return item[0] === "X" ? item.slice(1) : item;
}

function BlogBulletList(props) {
  return (
    <ul className="text-xl text-left flex text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg flex-col">
      {props.items.map((item: string, index: number) => (
        <li id={index.toString()}>
          <span className={"text-2xl " + getColorById(index)}>
            {dotIfList(item)}
          </span>{" "}
          {removeFirstIfX(item)}
        </li>
      ))}
    </ul>
  );
}

export default BlogBulletList;
