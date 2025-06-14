import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { TbMessageReport } from "react-icons/tb";

import browncsLogo from "./assets/homepage/browncs.png";
import jpmcLogo from "./assets/homepage/jpmc.png";
import stripeLogo from "./assets/homepage/stripe.svg";
import beatsaber from "./assets/homepage/beatsaber.jpg";

import accessible from "./assets/homepage/accessible.png";
import responsive from "./assets/homepage/responsive.png";
import iterative from "./assets/homepage/iterative.webp";
import persona from "./assets/homepage/persona.png";

import ebpf from "./assets/homepage/EBPF_logo.png";
import quicksand from "./assets/homepage/quicksand.png";
import chameleon from "./assets/homepage/chameleon.png";
import convmusic from "./assets/homepage/convmusic.png";
import whispers from "./assets/homepage/whispers.png";
import gpuclicker from "./assets/homepage/gpuclicker.png";
import focusCampfire from "./assets/homepage/focuscampfire.gif";
import spectrumauction from "./assets/homepage/spectrumauction.png";

import Navbar from "./components/Navbar.tsx";

function navigation() {
  return <Navbar></Navbar>;
}

function BlinkingCursor() {
  return <span className="flex w-2 bg-black animate-blink ml-1" />;
}

function heading() {
  return (
    <div id="top" className="flex flex-col mt-6 lg:mt-12 max-w-screen">
      <h1 className="flex text-7xl md:text-8xl xl:text-9xl font-medium mt-10 lg:mt-4 mx-[10vw]">
        Hi, I am Bokai. {BlinkingCursor()}
      </h1>

      <h3 className="text-3xl lg:text-4xl text-gray-600 mt-6 mx-[10vw] lg:max-w-[60vw] text-wrap ">
        <strong className="text-red-600">High-Performance Infra</strong> •
        <strong className="text-blue-600"> Distributed Systems</strong> •
        <strong className="text-emerald-600"> Low-Latency Networking</strong> •
        <strong className="text-yellow-600"> Optimization & Testing</strong>
      </h3>
    </div>
  );
}

function contacts() {
  return (
    <div className="flex flex-col mx-[10vw] mt-4 lg:mt-8">
      <p className="text-2xl lg:text-4xl font-bold text-lime-700">
        Find me at:
      </p>

      <div className="flex gap-6 mt-3 ml-0.5">
        <a
          href="https://github.com/bokai-bi"
          tabIndex={4}
          aria-label="Link to Bokai's Github"
          className="hover:opacity-75 transition-opacity"
        >
          <FaGithub className="size-10"></FaGithub>
        </a>

        <a
          href="https://www.linkedin.com/in/bokai-bi/"
          tabIndex={5}
          aria-label="Link to Bokai's LinkedIn"
          className="hover:opacity-75 transition-opacity"
        >
          <FaLinkedin className="size-10"></FaLinkedin>
        </a>

        <a
          href="mailto:bokai.bi0@gmail.com"
          tabIndex={6}
          aria-label="Link to Bokai's Email"
          className="hover:opacity-75 transition-opacity"
        >
          <FaEnvelope className="size-10"></FaEnvelope>
        </a>
      </div>
    </div>
  );
}

function experienceCard(
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
  duration: string,
  tags: string[]
) {
  return (
    <div className="bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-220 min-h-96">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-scale-down px-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      <div className="flex flex-col pt-4 pb-3 px-6">
        <div>
          {tags.map((tag) => (
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-2 mb-2 rounded-full mr-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col h-full items-center justify-between ">
          <h3 className="text-center text-2xl xl:text-3xl font-bold text-gray-900 lg:mt-1 xl:mt-2 mb-3">
            {title}
          </h3>

          <div className="flex justify-right items-center">
            <span className="text-2xl font-semibold text-gray-600">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function experiences() {
  return (
    <div
      id="experiences"
      className="mx-[10vw] px-4 sm:px-6 lg:px-8 py-12 xl:pt-20"
    >
      <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-8 lg:mb-16 text-center">
        <span className="text-blue-600">Where</span> I've Been
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experienceCard(
          stripeLogo,
          "Stripe Logo",
          "Software Engineer Intern",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "05/2025-08/2025",
          ["Distributed Systems", "Stress & Chaos Testing", "Go/Python/Java"]
        )}
        {experienceCard(
          jpmcLogo,
          "JPMorgan Chase & Co. Logo",
          "Software Engineer Intern",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "05/2024-08/2024",
          ["ML Infra", "AWS EMR & Glue", "Python"]
        )}
        {experienceCard(
          browncsLogo,
          "Brown University Computer Science Logo",
          "Sc.B. Computer Science",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "09/2022-05/2026",
          ["Distributed Systems", "High-Performance Networking", "Game Theory"]
        )}
      </div>
    </div>
  );
}

function projectCard(
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
  duration: string,
  tags: string[],
  link: string = "#",
  tabIndex: number
) {
  return (
    <div className="group bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-220 min-h-96">
      <div className="relative h-48 overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="pt-4 py-3 px-6">
        <div>
          {tags.map((tag) => (
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 my-1 xl:py-2 rounded-full mr-2">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mt-1 mb-3">
          {title}
        </h3>
        <p className="text-xl text-gray-700 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          {link != "#" ? (
            <a
              href={link}
              className="text-blue-600 text-xl font-medium hover:text-blue-900 hover:underline transition-colors duration-200 rounded-4xl px-2 border-1 border-white group-hover:border-blue-600 group-hover:bg-blue-100 "
              tabIndex={tabIndex}
            >
              Read More →
            </a>
          ) : (
            <div />
          )}
          <span className="text-lg font-semibold text-gray-600">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}

function projects() {
  return (
    <div id="projects" className="mt-14 mx-[10vw] sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-8 lg:mb-16 text-center">
        <span className="text-red-600">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectCard(
          ebpf,
          "A logo of eBPF",
          "Efficient and Safe Congestion Control Plane with eBPF",
          "Implementing and benchmarking kernel-space congestion control using verified eBPF programs.",
          "",
          ["Networking", "eBPF", "C/Python", "Congestion Control"],
          "https://github.com/ebpfcca/ebpfcca",
          7
        )}
        {projectCard(
          quicksand,
          "Image of Quicksand distributing resource consumption over machines",
          "Measuring overhead of Resource Decoupling in Quicksand",
          "Optimizing the topology of resource consumption by measuring communication patterns in Quicksand",
          "",
          ["Distributed Systems", "Data Center Infra", "Optimization", "C++"],
          "https://github.com/Bokai-Bi/Nu-LocalityMetrics",
          8
        )}
        {projectCard(
          chameleon,
          "Image of a color wheel that blends different colors linearly",
          "Chameleon: VPN Protocol with Shifting Traffic Fingerprints",
          "[Under Development] An always-changing proxy protocol that counters Traffic Analysis and Deep-Packet Inspection.",
          "",
          ["Networking", "VPN Protocols", "Traffic Analysis", "Go"],
          "https://github.com/Bokai-Bi/Relay/tree/main",
          9
        )}
        {projectCard(
          spectrumauction,
          "Screenshot of Spectrum Auction Game Rules",
          "Algorithmic Game Theory: Spectrum Auction Bidder",
          "Bidding algorithm for the final project at Brown's AGT class. Won first place in the final competition!",
          "",
          [
            "Game Theory",
            "Statistical Modeling",
            "Algorithmic Design",
            "Reinforcement Learning",
            "Python",
          ],
          "https://github.com/Bokai-Bi/Spectrum-Auction",
          10
        )}
        {projectCard(
          convmusic,
          "Screenshot of Osu! map generated by ConvMusic",
          "ConvMusic: Generating Osu! Maps from MP3 using Deep Learning",
          "Gradient descent model pipeline that outputs playable Osu! maps, trained on thousands of maps using custom loss functions.",
          "",
          ["Machine Learning", "Signal Processing", "Python"],
          "https://github.com/Timfon/ConvMusic/tree/main",
          11
        )}
        {projectCard(
          whispers,
          "Code for the Whispers Batch Transcriber",
          "Video Transcription pipeline built with OpenAI's Whisper model",
          "A batch video transcription pipeline powered by Whisper-large-turbo-v3 from OpenAI.",
          "",
          ["Machine Learning", "Python", "Automation"],
          "https://github.com/Bokai-Bi/Whisper-Batch-Transcriber/tree/main",
          12
        )}
        {projectCard(
          gpuclicker,
          "Screenshot from the game GPUClicker",
          "GPUClicker: Idle Game for Tech Enthusiasts",
          "A game for HackHarvard 2024! Do linear algebra in increasingly convoluted ways to make more money from compute. ",
          "",
          ["Game Dev", "Unity", "C#", "Hackathon"],
          "https://gpu.bokaibi.com",
          13
        )}
        ,
        {projectCard(
          focusCampfire,
          "Screenshot of Focus Campfire extension being displayed in a browser tab.",
          "Focus Campfire: Browser Extension for Focused Work",
          "A browser extension that provides gamified rewards for focused work sessions. A campfire increases in size the longer users stay on desinated pages.",
          "",
          ["Content Injection", "Browser Extension", "JavaScript", "Hackathon"],
          "https://github.com/Bokai-Bi/focus-campfire/tree/main",
          14
        )}
      </div>
    </div>
  );
}
const project_last_tabindex = 14;

function blogCard(
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
  duration: string,
  tags: string[],
  link: string = "#",
  tabIndex: number
) {
  return (
    <div className="group bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-220 min-h-96">
      <div className="relative h-48 overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="pt-4 py-3 px-6">
        <div>
          {tags.map((tag) => (
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 my-1 xl:py-2 rounded-full mr-2">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mt-1 mb-3">
          {title}
        </h3>
        <p className="text-xl text-gray-700 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <a
            href={link}
            className="text-blue-600 text-xl font-medium hover:text-blue-900 hover:underline transition-colors duration-200 rounded-4xl px-2 border-1 border-white group-hover:border-blue-600 group-hover:bg-blue-100 "
            tabIndex={project_last_tabindex + tabIndex}
          >
            Read More →
          </a>
          <span className="text-lg font-semibold text-gray-600">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}

function blogPosts() {
  return (
    <div id="blogposts" className="mt-14 mx-[10vw] sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-8 lg:mb-16 text-center">
        <span className="text-emerald-600">Blogs</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogCard(
          iterative,
          "Iteratively designed final page for SparkAI",
          "Design as an Iterative Process, with SparkAI!",
          "Perfect designs don't come from the first try. How should we create iteratively?",
          "04/2025",
          ["User Research", "Iterative Design", "Prototyping", "UI/UX Design"],
          "https://bokaibi.com/blog/iterative-design",
          1
        )}
        {blogCard(
          responsive,
          "Screenshot of final responsive page of a redesigned anime news network site",
          "Responsive Redesign: An Inquiry on Usability and Accessibility",
          "The web is not one size fits all. How do we make it comfortable for everyone?",
          "03/2025",
          ["Responsive Design", "UI/UX Design"],
          "https://bokaibi.com/blog/responsive-redesign",
          2
        )}
        {blogCard(
          persona,
          "Hand-drawn storyboard of a user using a novel water dispenser",
          "Who's my user? Making Personas & Storyboards",
          "We can gain invaluable insights into our users through methods like personas and storyboarding.",
          "02/2025",
          [
            "User Research",
            "Persona Creation",
            "Storyboarding",
            "UI/UX Design",
          ],
          "https://bokaibi.com/blog/persona",
          3
        )}
        {blogCard(
          accessible,
          "A mockup of a dropdown menu that is redesigned to be more accessible",
          "Accessibility of Web Components",
          "Components serve many different users, but not all components are accessible to all.",
          "01/2025",
          [
            "UI/UX Design",
            "Accessibility",
            "Reusable Components",
            "Interaction Design",
          ],
          "https://bokaibi.com/blog/accessible-components",
          4
        )}
      </div>
    </div>
  );
}
const blog_last_tabindex = 4 + project_last_tabindex;

function funCard(
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
  duration: string,
  tags: string[],
  link: string = "#",
  tabindex: number
) {
  return (
    <div className="group bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-220 min-h-96">
      <div className="relative h-48 overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="pt-4 py-3 px-6">
        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mt-1 mb-3">
          {title}
        </h3>
        <p className="text-xl text-gray-700 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <a
            href={link}
            className="text-blue-600 text-xl font-medium hover:text-blue-900 hover:underline transition-colors duration-200 border-1 border-white group-hover:border-blue-600 group-hover:bg-blue-100 rounded-4xl px-2"
            tabIndex={blog_last_tabindex + tabindex}
          >
            Check it out! →
          </a>
        </div>
      </div>
    </div>
  );
}

function fun() {
  return (
    <div id="fun" className="mx-[10vw] px-4 sm:px-6 lg:px-8 py-12 xl:pt-20">
      <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-8 lg:mb-16 text-center">
        <span className="text-yellow-600">Fun</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {funCard(
          beatsaber,
          "Beat Saber Logo",
          "Beat Saber",
          "I'm ranked global t1000 for Beat Saber! I stream on Twitch.",
          "05/2025-08/2025",
          [],
          "https://www.twitch.tv/koishihat514",
          1
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-red-100 min-h-screen">
      {navigation()}
      {heading()}
      {contacts()}
      {experiences()}
      {projects()}
      {blogPosts()}
      {fun()}
    </div>
  );
}

export default App;
