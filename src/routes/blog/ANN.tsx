import React from "react";
import annicon1 from "../../assets/ann/annicon1.jpg";
import annicon2 from "../../assets/ann/annicon2.png";
import {
  FaBars,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaBluesky,
  FaArrowRightToBracket,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { TbMessageReport } from "react-icons/tb";

import jjk1 from "../../assets/ann/jjk1.jpg";
import jjk2 from "../../assets/ann/jjk2.jpg";
import jjk3 from "../../assets/ann/jjk3.jpg";
import jjk4 from "../../assets/ann/jjk4.jpg";
import jjk5 from "../../assets/ann/jjk5.jpg";
import jjk6 from "../../assets/ann/jjk6.jpg";
import touhou from "../../assets/ann/touhou.jpg";

import animeJapan from "../../assets/ann/animejapan.webp";
import blueEx from "../../assets/ann/blueEx.webp";

function logo() {
  return (
    <div className="mx-auto lg:mx-4">
      {/* small screens */}
      <div className="flex items-center justify-center space-x-4 md:hidden">
        <img
          src={annicon1}
          alt={"Logo of AnimeNewsNetwork"}
          className="w-[10vw] mt-4 mx-[2vw] object-cover"
        />
        <img
          src={annicon2}
          alt={"Logo of AnimeNewsNetwork"}
          className="w-[55vw] mt-4 mx-[2vw] object-cover"
        />
      </div>

      {/* medium+ screens*/}
      <div className="hidden md:block">
        <img
          src={annicon2}
          alt={"Logo of AnimeNewsNetwork"}
          className="w-[55vw] max-w-175 mt-4 lg:mt-8 lg:mx-2 object-cover h-auto"
        />
      </div>

      {/* divider line on lg+ */}
      <div className="hidden lg:block w-full h-[1px] bg-gray-300 mt-8 mb-6"></div>
    </div>
  );
}

function navigation() {
  return (
    <div>
      <div className="flex h-10 my-1 md:my-3 justify-between lg:hidden">
        <a className="ml-2 h-full w-auto max-h-8 focus:outline-1" href="#">
          <FaBars className="h-full w-auto max-h-8" />
        </a>
        <div className="space-x-1 flex">
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaTwitter className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaYoutube className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaFacebook className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaInstagram className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaTiktok className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaBluesky className="h-full w-auto max-h-8" />
          </a>
        </div>
        <div className="flex space-x-1 pr-2">
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <TbMessageReport className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaArrowRightToBracket className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaMagnifyingGlass className="h-full w-auto max-h-8" />
          </a>
        </div>
      </div>

      <div className="hidden lg:flex w-full h-[10vh] max-h-14 items-center">
        <div className="space-x-1 flex mx-6 h-full items-center">
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaTwitter className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaYoutube className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaFacebook className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaInstagram className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaTiktok className="h-full w-auto max-h-8" />
          </a>
          <a className="h-full w-auto max-h-8 focus:outline-1" href="#">
            <FaBluesky className="h-full w-auto max-h-8" />
          </a>
        </div>
        {/* Search bar */}
        <div className="flex h-[10vh] max-h-12 w-full">
          <div className="flex items-center border border-gray-300 rounded-lg w-full mr-[2vw]">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full font-semibold text-xl ml-2"
            />
            <FaMagnifyingGlass className="text-gray-500 mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

function dropdownMenu(props: any) {
  const { menutext, items } = props;

  return (
    <button className="hidden lg:block group relative w-24 h-9 bg-blue-800 focus:bg-blue-900 outline-1 focus:outline-none ">
      <p className="text-white text-md">{menutext}</p>
      <div className="hidden group-focus:block absolute mt-1 w-48 bg-cyan-500 rounded-md shadow-lg z-50">
        <div className="py-1">
          {items.map((item: string) => (
            <a
              href="#"
              className="block text-left py-2 px-4 text-gray-700 hover:bg-cyan-600"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </button>
  );
}

const dropdownMenusList: { menutext: string; items: string[] }[] = [
  {
    menutext: "News",
    items: ["Anime News", "Manga News", "New Anime", "New Manga"],
  },
  {
    menutext: "Reviews",
    items: ["Anime Reviews", "Manga Reviews", "Editorials"],
  },
  {
    menutext: "Encyclopedia",
    items: ["Anime Encyclopedia", "Manga Encyclopedia", "People Encyclopedia"],
  },
  {
    menutext: "Forum",
    items: ["Main Forum", "Anime", "Manga", "Retail", "Community", "Feedback"],
  },
];

function dropdownMenus() {
  return (
    <div className="flex space-x-2 mt-4 mx-6 mb-1">
      {dropdownMenusList.map((dMenu) => (
        <div key={dMenu.menutext}>{dropdownMenu(dMenu)}</div>
      ))}
    </div>
  );
}

const headlinesList: {
  imgSrc: string;
  title: string;
  datetime: string;
  desc: string;
}[] = [
  {
    imgSrc: jjk1,
    title: "Jujutsu Kaisen season 1",
    datetime: "2023-10-02",
    desc: "Let's pretend Jujutsu Kaisen season 1 has just released for the purposes of this article. Wow! Such a good animation!",
  },
  {
    imgSrc: animeJapan,
    title: "Anime Japan 2025",
    datetime: "2023-10-01",
    desc: "This is an event that happened at some point! Heard it's fun, sadly I couldn't go :(",
  },
];

function headlines() {
  return (
    <div className="relative text-white">
      <img
        className="hidden object-cover lg:block w-full min-h-60 h-[36vh] max-h-160 object-right-top"
        src={headlinesList[0].imgSrc}
        alt={"Headline Image for: " + headlinesList[0].title}
      ></img>
      <p className="hidden lg:block text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-extrabold text-4xl absolute bottom-12 ml-4">
        {headlinesList[0].title}
      </p>
      <p className="hidden lg:block text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-semibold text-lg absolute bottom-4 ml-4 w-17/18 truncate text-ellipsis pr-2">
        {headlinesList[0].desc}
      </p>
      <div className="hidden md:block lg:hidden">
        {headlinesList.map((headline) => (
          <div className="outline-1 outline-black drop-shadow-md relative">
            <img
              className="object-cover w-full min-h-60 h-[25vh] max-h-80"
              src={headline.imgSrc}
              alt={"Headline Image for: " + headline.title}
            ></img>
            <p className=" text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-extrabold text-4xl absolute bottom-12 ml-2 w-17/18 truncate text-ellipsis">
              {headline.title}
            </p>
            <p className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-semibold text-lg absolute bottom-4 ml-2 truncate text-ellipsis w-17/18 pr-2">
              {headline.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        {headlinesList.map((headline) => (
          <div className="outline-1 outline-black drop-shadow-md relative">
            <img
              className="object-cover w-full min-h-40 h-[20vh] max-h-60"
              src={headline.imgSrc}
              alt={"Headline Image for: " + headline.title}
            ></img>
            <p className=" text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-extrabold text-3xl absolute bottom-6 ml-2">
              {headline.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const contentsList: {
  imgSrc: string;
  title: string;
  datetime: string;
  desc: string;
}[] = [
  {
    imgSrc: blueEx,
    title: "Some article about Blue Exorcist",
    datetime: "2023-10-01",
    desc: "This is a dummy description, but also I should probably go watch Blue Exorcist at this point.",
  },
  {
    imgSrc: touhou,
    title:
      "Friend, have you ever heard about the amazing indie game series Touhou Project?",
    datetime: "2023-10-02",
    desc: "Really cool series with awesome worldbuilding, character, and music. Please check it out!",
  },
  {
    imgSrc: jjk2,
    title: "Jujutsu Kaisen is neat",
    datetime: "2023-10-01",
    desc: "Article description goes here.",
  },
  {
    imgSrc: jjk3,
    title: "This is another article",
    datetime: "2023-10-01",
    desc: "Article description goes here. When you get way too wordy with the article summary the text will automatically get clamped at a responsive point, like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imgSrc: jjk4,
    title: "I love journalism",
    datetime: "2023-10-01",
    desc: "Article description goes here.",
  },
  {
    imgSrc: jjk5,
    title: "Hi Gojo pic",
    datetime: "2023-10-01",
    desc: "Article description goes here.",
  },
  {
    imgSrc: jjk6,
    title: "Nah I'd win",
    datetime: "2023-10-01",
    desc: "Article description goes here.",
  },
];

function contentGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[2vw] gap-y-4 mt-1 mx-auto">
      {contentsList.map((content) => (
        <div className="drop-shadow-md block max-w-[47vw] lg:max-w-[21vw]">
          <img
            className="object-cover w-full lg:h-[24vh] drop-shadow-2xl"
            src={content.imgSrc}
            alt={"Content Image for: " + content.title}
          ></img>
          <p className="text-black font-extrabold text-2xl ml-2 mt-0.5">
            {content.title}
          </p>
          <p className="text-gray-600 text-md ml-2">{content.datetime}</p>
          <p className="text-black text-lg ml-2 lg: line-clamp-4 md:line-clamp-3 lg:line-clamp-4">
            {content.desc}
          </p>
        </div>
      ))}
      {contentsList.map((content) => (
        <div className="drop-shadow-md block max-w-[47vw] lg:max-w-[21vw]">
          <img
            className="object-cover w-full lg:h-[24vh] drop-shadow-2xl"
            src={content.imgSrc}
            alt={"Content Image for: " + content.title}
          ></img>
          <p className="text-black font-extrabold text-2xl ml-2 mt-0.5">
            {content.title}
          </p>
          <p className="text-gray-600 text-md ml-2">{content.datetime}</p>
          <p className="text-black text-lg ml-2 lg: line-clamp-4 md:line-clamp-3 lg:line-clamp-4">
            {content.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

function ANN() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {logo()}
      {navigation()}
      {dropdownMenus()}
      {headlines()}
      <div className="h-6 ">
        <button className="hidden md:block right-0 absolute w-full group mr-4 text-right">
          <p className=" text-blue-500 hover:underline group-focus:hidden">
            {"<<< Filter options"}
          </p>
          <div className="hidden group-focus:block ">
            <div className="flex justify-end space-x-2">
              <a href="#" className="text-blue-700 hover:underline">
                Anime
              </a>
              <p>|</p>
              <a href="#" className="text-blue-700 hover:underline">
                Manga
              </a>
              <p>|</p>
              <a href="#" className="text-blue-700 hover:underline">
                Light Novel
              </a>
              <p>|</p>
              <a href="#" className="text-blue-700 hover:underline">
                Visual Novel
              </a>
            </div>
          </div>
        </button>
      </div>
      {contentGrid()}
    </div>
  );
}

export default ANN;
