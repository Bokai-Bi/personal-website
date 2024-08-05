import { useRouteError } from "react-router-dom";

const KoishiNotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto size-full">
      <main
        id="content"
        className="flex-grow w-full flex justify-center items-center"
      >
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-emerald-600 sm:text-9xl dark:text-emerald-400">
            404 404 404 514 404 404
          </h1>
          <p className="py-6 text-xl text-yellow-600 dark:text-yellow-400">
            Oh no, something went wrong ( • ᴖ • ｡)
          </p>
          <div className="flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.pixiv.net/en/tags/%E5%8F%A4%E6%98%8E%E5%9C%B0%E3%81%93%E3%81%84%E3%81%97"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KoishiNotFound;
