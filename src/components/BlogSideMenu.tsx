import React from "react";

interface BlogSideMenuProps {
  sections: string[];
  links: string[];
}

function BlogSideMenu({ sections, links }: BlogSideMenuProps) {
  return (
    <nav className="opacity-90 fixed top-1/4 right-6 z-50 bg-lime-50 border-gray-300 border-1 shadow-lg rounded-2xl p-4 space-y-2 min-h-[20vh] min-w-[15vw] max-w-100 pl-5">
      <h2 className="text-2xl 2xl:text-3xl my-3 font-semibold">Jump!</h2>
      <div className="border-b-2 border-gray-300 my-6"></div>
      {sections.map((section, index) => (
        <a
          href={links[index]}
          className="block text-sm lg:text-xl text-blue-600 my-4 text-wrap hover:text-blue-800 transition-colors hover:underline"
        >
          {section}
        </a>
      ))}
    </nav>
  );
}

export default BlogSideMenu;
