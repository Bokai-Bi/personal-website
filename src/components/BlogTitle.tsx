import React from "react";

interface BlogTitleProps {
  title: string;
  date: string;
  role: string;
  skills: string[];
}

function BlogTitle({ title, date, role, skills }: BlogTitleProps) {
  return (
    <div className="flex flex-col w-full p-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-semibold mt-2">
        {role}, {date}
      </p>
      <div className="mt-5">
        {skills.map((skill) => (
          <span className="inline-block bg-blue-100 text-blue-800 text-lg font-semibold px-2.5 py-2 rounded-full mr-2">
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-8 border-b-2 border-gray-300"></div>
    </div>
  );
}

export default BlogTitle;
