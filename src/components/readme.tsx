import ResumeDocument from "../documents/Bokai_Bi_resume.pdf";
import JPMCLogo from "../assets/JPMCLogo3.jpg";
import ETOSLogo from "../assets/ETOSLogo.png";
import EvernightLogo from "../assets/EvernightLogo.png";
import BrownCSLogo from "../assets/BrownCSLogo.png";

const Readme = () => {
  return (
    <main id="content" className="px-4 sm:px-6 lg:px-7">
      <div className="text-center pt-20">
        <div>
          <h1 className="inline text-3xl font-bold text-black sm:text-4xl">
            Hi,{" "}
          </h1>
          <h1 className="inline text-3xl font-bold text-blue-900 sm:text-4xl">
            I'm Bokai
          </h1>
        </div>
        <p className="mt-3 text-xl text-gray-500 dark:text-neutral-400 mb-3">
          Software Engineer // Product Manager // Game Producer // A Lot More
        </p>
      </div>
      <div className="py-6 mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <a
          className="w-full sm:w-auto mt-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-2xl border border-black bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
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
              className="h-32 w-96 object-cover rounded-t-xl bg-gray-100"
              src={JPMCLogo}
              alt="JPMC Logo"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              JPMorgan Chase & Co.
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Software Engineer Intern
            </h3>
            <div>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Python & AWS
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Distributed Computing, Machine Learning Engineering, Big Data
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Amazon Elastic MapReduce, Apache Spark, AWS Glue, S3, DynamoDB
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Agile, Jenkins CI/CD, DevOps
              </p>
            </div>
          </div>
        </p>
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-32 w-96 object-cover object-top rounded-t-xl bg-gray-100"
              src={ETOSLogo}
              alt="ETOS Logo"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Efficient and Trustworthy Operating Systems Group, Brown
              University
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Research Assistant
            </h3>
            <div>
              <p className="text-sm pt-2 dark:text-neutral-100">• C++</p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Distributed Computing, Cloud infrastructure
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • RPC, Operating Systems, Multi-threaded Programming
              </p>
            </div>
          </div>
        </p>
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-32 w-96 object-cover rounded-t-xl bg-gray-100"
              src={EvernightLogo}
              alt="Evernight Logo"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Team Evernight
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              Founder, Product Manager, Lead Programmer
            </h3>
            <div>
              <p className="text-sm pt-2 dark:text-neutral-100">• C# & Unity</p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Systems Architecture, Player Experience Design
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Product Management, Logistics, Agile
              </p>
            </div>
          </div>
        </p>
        <p className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <img
              className="h-32 w-96 object-contain rounded-t-xl bg-gray-100"
              src={BrownCSLogo}
              alt="Brown Computer Science Department Logo"
            />
          </div>
          <div className="p-2 md:p-3">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Brown University Computer Science Department
            </p>
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-neutral-300">
              System Admin, Teaching Assistant
            </h3>
            <div>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • SPOC - Systems, Programmer, Operator, Consultant
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • Linux Administration, VPN, SSH
              </p>
              <p className="text-sm pt-2 dark:text-neutral-100">
                • TA: Data Structures&Algorithms, Computer Systems
              </p>
            </div>
          </div>
        </p>
      </div>
      <h1 className="text-center py-10 font-bold text-4xl text-emerald-700">
        (Other) Hobbies
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
        <p className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none">
          <div className="mb-5">
            <div className="mt-5">
              <p className="font-semibold text-5xl text-white">Beat Saber</p>
              <h3 className="mt-5 font-medium text-lg text-white">
                VR Rhythm Game, currently ranked world #1512
              </h3>
              <p className="mt-1 font-medium text-md text-gray-400">
                Not to brag but, okay I'm bragging
              </p>
              <p className="mt-1 font-medium text-sm text-gray-500">
                Not that good compared to actual good players though, aspiring
                to get better
              </p>
              <div className="flex flex-col mt-5">
                <a
                  href="https://www.twitch.tv/koishihat514/video/2196824993"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  My favorite clip
                </a>
                <a
                  href="https://scoresaber.com/u/76561198260944425"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  My Scoresaber profile
                </a>
              </div>
            </div>
          </div>
        </p>
        <p className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none">
          <div className="mb-5">
            <div className="mt-5">
              <p className="font-semibold text-5xl text-white">AVGE</p>
              <h3 className="mt-5 font-medium text-lg text-white">
                Small Ensemble Experience Committee, Arranger, and Percussion
                Player at Brown's Anime Video Game Ensemble
              </h3>
              <div className="flex flex-col mt-5">
                <a
                  href="https://www.youtube.com/watch?v=7LxQ_E9xR1k"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  My favorite large ensemble piece
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Ojg8KzYkRvs"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  Got the large ensemble to play Touhou songs
                </a>
                <a
                  href="https://www.youtube.com/watch?v=s0BZsRvzBKc"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  My small ensemble for Pure Furies
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ozPT0On_7SU"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  Singing at the semesterly Project Moon ensemble
                </a>
              </div>
            </div>
          </div>
        </p>
        <p className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none">
          <div className="mb-5">
            <div className="mt-5">
              <p className="font-semibold text-5xl text-white">BRGD</p>
              <h3 className="mt-5 font-medium text-lg text-white">
                Producer and Lead Programmer at Brown-RISD Game Developers
              </h3>
              <div className="flex flex-col mt-5">
                <p className="mt-1 py-1 w-max">Games I worked on:</p>
                <a
                  href="https://brownrisdgames.itch.io/no-more-happiness"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  No More Happiness (Producer, Lead Programmer)
                </a>
                <a
                  href="https://brownrisdgames.itch.io/nightmare-on-waterman-st"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  NMOWS (Producer, Lead Programmer)
                </a>
                <a
                  href="https://brownrisdgames.itch.io/rift-rush"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  Rift Rush (Lead Programmer)
                </a>
                <a
                  href="https://brownrisdgames.itch.io/nightmare-on-waterman-st"
                  className="mt-1 text-blue-400 hover:text-blue-600 py-1 w-max"
                >
                  BlehBlade (Programmer)
                </a>
              </div>
            </div>
          </div>
        </p>
      </div>
    </main>
  );
};

export default Readme;
