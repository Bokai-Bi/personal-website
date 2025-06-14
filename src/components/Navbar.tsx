import React from "react";

const navbarItems = [
  { key: 1, name: "@Me", link: "https://bokaibi.com/#top" },
  {
    key: 2,
    name: "Experiences",
    link: "https://bokaibi.com/#experiences",
  },
  {
    key: 3,
    name: "Resume",
    link: "https://bokaibi.com/Bokai_Bi_resume.pdf",
  },
];

function Navbar() {
  return (
    <header className="w-full p-4 flex bg-gradient-to-r from-lime-200 to-sky-200 justify-between items-center sticky top-0 z-5 align-middle">
      <a className="text-2xl md:text-4xl font-bold flex">Bokai Bi</a>
      <ul className="flex align-middle items-center">
        {navbarItems.map((item, index) => (
          <a
            key={item.key}
            href={item.link}
            tabIndex={index + 1}
            className="py-2 px-3 mx-1 lg:mx-4 font-semibold text-xl md:text-2xl lg:text-3xl flex rounded-xl cursor-pointer duration-300 hover:bg-yellow-300 hover:text-black"
          >
            {item.name}
          </a>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
