import React from "react";

import Navbar from "../../components/Navbar";
import BlogText from "../../components/BlogText";
import BlogImg from "../../components/BlogImg";
import BlogInlineImg from "../../components/BlogInlineImg";
import BlogTitle from "../../components/BlogTitle";
import BlogSectionTitle from "../../components/BlogSectionTitle";

import hifiReportsPage from "../../assets/iterative-design/hi-fi-reports-page.webp";
import BlogBulletList from "../../components/BlogBulletList";
import currIF1 from "../../assets/iterative-design/spark-ai-current-interface-1.webp";
import currIF2 from "../../assets/iterative-design/spark-ai-current-interface-2.webp";
import bokaisketch from "../../assets/iterative-design/bokai-sketches.webp";
import wireframeSearch from "../../assets/iterative-design/wireframe-search-screen.webp";
import wireframeReport from "../../assets/iterative-design/wireframe-report-page.webp";
import wireframedd from "../../assets/iterative-design/wireframe-document-dilligence.webp";
import hifiparcel from "../../assets/iterative-design/hi-fi-parcel-card.webp";
import hifireport from "../../assets/iterative-design/hi-fi-reports-page.webp";
import hificard from "../../assets/iterative-design/hi-fi-zoning-card.webp";
import BlogSideMenu from "../../components/BlogSideMenu";

function Intro() {
  return (
    <div className="flex flex-col items-center">
      <div id="top"></div>
      <BlogTitle
        title="Design as an Iterative Process, with SparkAI!"
        date="03/2025 - 04/2025"
        role="Product/UX Designer"
        skills={[
          "User Research",
          "Iterative Design",
          "Prototyping",
          "UI/UX Design",
        ]}
      />
      <BlogImg
        imgPath={hifiReportsPage}
        altText="A page from the final Hi-Fi Prototype"
        height=""
        altAccessibility="A screenshot of the redesigned SparkAI reports page, showcasing a high-fidelity prototype of the redesigned user interface looks like."
      />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        <span className="font-bold">
          What is the goal of design? And how should we approach designing a
          product from the ground up?
        </span>
        These questions are best addressed through the lens of{" "}
        <span className="italic">Iterative Design</span> — building, testing,
        and refining products through multiple stages.
        <br />
        Rather than trying to create a perfect product in one go, Iterative
        Design encourages starting with rough prototypes and improving them
        gradually through experimentation and feedback.
      </p>
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        There are many ways to apply Iterative Design, but here’s a simple
        workflow that captures the core idea. Between each stage, one should
        employ a variety of evaluation methods to try and improve upon the
        design:
        <br className="" />
        <br />
        <div className="text-2xl font-bold text-center">
          <span className="text-red-900">Sketches</span> →{" "}
          <span className="text-yellow-900">Low-Fidelity Wireframe</span> →{" "}
          <span className="text-blue-900">High-Fidelity Prototype</span> →{" "}
          <span className="text-green-900">Final Product</span>
        </div>
        <br />
        <p>
          Over the Spring of 2025, I worked with a group of amazing teammates to
          build a brand-new user interface for a startup: Spark AI. Throughout
          the process, we employed the principles of iterative design to make
          sure our final product generates the greatest experience for users.
        </p>
      </p>
      <div id="team"></div>
      <BlogSectionTitle title="Our Team" />
      <BlogBulletList
        items={[
          "Me! (bokai_bi@brown.edu)",
          "Max Guo (max_guo@brown.edu)",
          "Christina Peng (christina_peng@brown.edu)",
          "Timothy Fong (timothy_fong@brown.edu)",
        ]}
      ></BlogBulletList>
    </div>
  );
}

// Make empty placeholders
function Problem() {
  return (
    <div className="flex flex-col items-center">
      <div id="problem"></div>
      <BlogSectionTitle title="Problem" />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        <a
          href="https://www.spark.ai/"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Spark AI
        </a>{" "}
        is a startup that leverages artificial intelligence to provide insights
        on real-world assets—think properties, parcels of land, or
        infrastructure. One of its core products is a tool that helps users
        assess whether a piece of land is suitable for solar development. It
        does this by combining environmental data, zoning regulations, and
        satellite imagery into one easy-to-understand report. <br /> <br />
        However, the existing report interface has several usability issues that
        the founders would like us to help address. The content is dense, poorly
        structured, and text-heavy—making it hard for users to extract key
        insights.{" "}
        <p className="font-bold text-gray-900">
          Our mission: make it clearer, more engaging, and easier to act on!
        </p>
      </p>
    </div>
  );
}

/* function Solution() {
  return (
    <div className="flex flex-col items-center">
      <div id="solution"></div>
      <BlogSectionTitle title="Solution" />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        In order to build a more user-friendly website, we are going to utilize
        the iterative design process to create a UI for Spark AI.
      </p>
    </div>
  );
} */

function ResearchAndInsights() {
  return (
    <div className="flex flex-col items-center">
      <div id="research"></div>
      <BlogSectionTitle title="Research and Insights" />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        In order to build a more user-friendly website, we are going to utilize
        the iterative design process to create a UI for Spark AI.
        <br />
        <br />
        Before beginning the redesign, we wanted to understand the product and
        its users. Our team met with the founders of Spark AI to get an in-depth
        walkthrough of the current report experience.
      </p>
      <BlogImg
        imgPath={currIF1}
        altText="Current Spark AI Interface, parcel search & map"
        height=""
        altAccessibility="A screenshot of the current Spark AI interface, showing the way parcels are searched and the interactive map."
      />
      <BlogImg
        imgPath={currIF2}
        altText="Current Spark AI Interface, report page"
        height=""
        altAccessibility="A screenshot of the current Spark AI interface, showing the report page with a lot of text and information."
      />
      <BlogBulletList
        items={[
          "XPreliminarily, I would like to improve the following areas of the current interface:",
          "The report page is too text-heavy",
          "The Interactive map is not interactive enough",
          "The parcel search can be made more pleasuring proportionally",
        ]}
      />
    </div>
  );
}

function DesignProcess() {
  return (
    <div className="flex flex-col items-center">
      <div id="design-process"></div>
      <BlogSectionTitle title="Design Process" />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        The first step to any iterative design process is to sketch out ideas.
        I've included some of my initial sketches below.
      </p>
      <BlogImg
        imgPath={bokaisketch}
        altText="Initial sketches of the Spark AI reports page"
        height=""
        altAccessibility="A collection of sketches showing different pages for the Spark AI reports tool, including a more structured hierarchical layout and interactive elements."
      />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        After getting everyone's sketches together, we sat down and combined the
        ideas we liked into a single low-fidelity wireframe made in Balsamiq.
        Personally, I created the document dilligence page, as well as the
        collapsable tabs in the reports page. Afterwards, we presented this
        wireframe to the Spark AI team and got their feedback.
      </p>
      <BlogImg
        imgPath={wireframeSearch}
        altText="Wireframe of the Spark AI search page"
        height=""
        altAccessibility="A wireframe of the Spark AI search page, showing a search bar and navigation buttons to the rest of the site."
      />
      <BlogImg
        imgPath={wireframeReport}
        altText="Wireframe of the Spark AI reports page"
        height=""
        altAccessibility="A wireframe of the Spark AI reports page, showing a more structured layout with collapsable tabs and interactive elements."
      />
      <BlogImg
        imgPath={wireframedd}
        altText="Wireframe of the Spark AI document diligence page"
        height=""
        altAccessibility="A wireframe of the Spark AI document diligence page, showing a list of documents with checkboxes and a search bar."
      />
    </div>
  );
}

function FinalDesigns() {
  return (
    <div className="flex flex-col items-center">
      <div id="final-designs"></div>
      <BlogSectionTitle title="Final Designs" />
      <BlogBulletList
        items={[
          "XFeedback from the SparkAI team was positive. They liked the direction we're going, and provided some detailed suggestions:",
          "Expandable cards should show a more actionable summary",
          "Alternative, non-technical name would be preferred for SparkGPT",
          "When expanded, the cards should present more information.",
        ]}
      />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        Based on this feedback, we created the final high-fidelity prototype of
        the SparkAI service. Personally, I was responsible for creating the
        expandable report cards, detailed parcel card expansion screen, relevant
        articles section of the report, and various transitions for the Figma
        Prototype. I also did a lot of logistical work and recorded the Loom
        presentation video.
      </p>
      <BlogImg
        imgPath={hificard}
        altText="High-fidelity prototype component, expandable card"
        height=""
        altAccessibility="A high-fidelity prototype component showing an expandable card for a SparkAI report, with a summary and detailed information when expanded."
      />
      <BlogImg
        imgPath={hifiparcel}
        altText="High-fidelity prototype component, detailed parcel card when expanded"
        height=""
        altAccessibility="A high-fidelity prototype component showing a detailed parcel card when expanded, with factual information about the parcel."
      />
      <BlogImg
        imgPath={hifireport}
        altText="High-fidelity prototype, SparkAI report page"
        height=""
        altAccessibility="A high-fidelity prototype of the SparkAI report page, showing a more structured layout with expandable cards, interactive elements, and article sources."
      />
    </div>
  );
}

function OutcomesAndReflections() {
  return (
    <div className="flex flex-col items-center">
      <div id="outcomes"></div>
      <BlogSectionTitle title="Outcomes and Reflections" />
      <BlogBulletList
        items={[
          "XAfter finalizing the prototype, we met with the SparkAI team for their feedback: ",
          "Simplified information hierarchy is really nice",
          "Some features on the side navbar should be bigger to be more noticeable",
          "Having an interactive, clickable map is a good addition",
          "Suggested adding more qualitative data with texts and hyperlinks to the reports page",
          "Liked the prominent placement of main features",
        ]}
      />
      <p className="text-left text-xl text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        Overall, this has been an amazing experience working with SparkAI. The
        case-study process gave me a lot of insights into the iterative design
        process. On similar projects in the future, I would like to increase the
        frequency of communication and feedback, something I learned to be
        critical this time.
        <br /> <br />
        This has been a really fun and educational experience! If you have some
        cool project idea and need help in the future, feel free to let me know!{" "}
      </p>
    </div>
  );
}

function IterativeDesign() {
  return (
    <div className="flex flex-col bg-lime-100 min-h-screen">
      <Navbar />
      <BlogSideMenu
        sections={[
          "Top",
          "Our Team",
          "Problem",
          "Research",
          "Design Process",
          "Final Designs",
          "Outcome & Reflection",
        ]}
        links={[
          "#top",
          "#team",
          "#problem",
          "#research",
          "#design-process",
          "#final-designs",
          "#outcomes",
        ]}
      />
      {Intro()}
      {Problem()}
      {/* {Solution()} */}
      {ResearchAndInsights()}
      {DesignProcess()}
      {FinalDesigns()}
      {OutcomesAndReflections()}
    </div>
  );
}

export default IterativeDesign;
