import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="h-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex items-center">
      <div className="grid md:grid-cols-2 gap-12 place-items-center">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            Contact Me
          </h2>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            You can reach me through these channels:
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <div className="flex justify-left items-center">
            <div>
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <IoMail className="w-3/4" size={30} />
              </span>
            </div>
            <div className="ms-5 sm:ms-8">
              <h3 className="justify-center text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Email
              </h3>
              <a
                className="justify-center mt-1 text-blue-600 dark:text-blue-400 hover:text-blue-900"
                href="mailto:bokai.bi0@gmail.com"
              >
                bokai.bi0@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-left items-center">
            <div>
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <FaDiscord className="w-3/4" size={30} />
              </span>
            </div>
            <div className="ms-5 sm:ms-8">
              <h3 className="justify-center text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Discord
              </h3>
              <p className="justify-center mt-1 text-gray-600 dark:text-neutral-400">
                @KoishiHat
              </p>
            </div>
          </div>
          <div className="flex justify-left items-center">
            <div>
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <FaLinkedin className="w-3/4" size={30} />
              </span>
            </div>
            <div className="ms-5 sm:ms-8">
              <h3 className="justify-center text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/bokai-bi/"
                className="justify-center mt-1 text-blue-600 dark:text-blue-400 hover:text-blue-900"
              >
                https://www.linkedin.com/in/bokai-bi/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
