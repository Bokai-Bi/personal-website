import React from "react";
import ResumeDocument from "../documents/Bokai_Bi_resume.pdf";

const Readme = () => {
  return (
    <main id="content">
      <div className="text-center pt-20 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="inline text-3xl font-bold text-black sm:text-4xl">
            Hi,
          </h1>
          <h1 className="inline text-3xl font-bold text-blue-900 sm:text-4xl">
            I'm Bokai
          </h1>
        </div>
        <p className="mt-3 text-xl text-gray-500 dark:text-neutral-400 mb-3">
          Software Engineer // Product Manager // Game Developer // A Lot More
        </p>
      </div>
      <div className="py-6 mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <a
          className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-black bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          target="parent"
          href={ResumeDocument}
          rel="noreferrer"
        >
          My Resume
        </a>
      </div>
      <h1 className="text-center py-10 font-bold text-4xl text-emerald-700">
        Experiences
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14 lg:px-14">
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-full w-96 object-cover rounded-t-xl bg-gray-100"
              src="https://1000logos.net/wp-content/uploads/2020/04/J.P.-Morgan-Chase-Logo.png"
              alt="Image Description"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              JPMorgan Chase & Co.
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Software Engineer Intern
            </h3>
          </div>
        </p>
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-full w-96 object-cover rounded-t-xl bg-gray-100"
              src="https://1000logos.net/wp-content/uploads/2020/04/J.P.-Morgan-Chase-Logo.png"
              alt="Image Description"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              JPMorgan Chase & Co.
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Software Engineer Intern
            </h3>
          </div>
        </p>
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-full w-96 object-cover rounded-t-xl bg-gray-100"
              src="https://1000logos.net/wp-content/uploads/2020/04/J.P.-Morgan-Chase-Logo.png"
              alt="Image Description"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              JPMorgan Chase & Co.
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Software Engineer Intern
            </h3>
          </div>
        </p>
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-full w-96 object-cover rounded-t-xl bg-gray-100"
              src="https://1000logos.net/wp-content/uploads/2020/04/J.P.-Morgan-Chase-Logo.png"
              alt="Image Description"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              JPMorgan Chase & Co.
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Software Engineer Intern
            </h3>
          </div>
        </p>
      </div>
    </main>
  );
};

export default Readme;
