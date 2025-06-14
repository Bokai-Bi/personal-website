import React from "react";

import Navbar from "../../components/Navbar";
import BlogText from "../../components/BlogText";
import BlogImg from "../../components/BlogImg";
import BlogInlineImg from "../../components/BlogInlineImg";
import BlogTitle from "../../components/BlogTitle";
import BlogSectionTitle from "../../components/BlogSectionTitle";
import BlogBulletList from "../../components/BlogBulletList";
import BlogSideMenu from "../../components/BlogSideMenu";

import googlephone from "../../assets/responsive-redesign/googlephone.png";
import googletablet from "../../assets/responsive-redesign/googletablet.png";
import googledesktop from "../../assets/responsive-redesign/googledesktop.png";

import annphone from "../../assets/responsive-redesign/annphone.png";
import annphone2 from "../../assets/responsive-redesign/annphone2.png";
import anntablet from "../../assets/responsive-redesign/anntablet.png";
import anndesktop from "../../assets/responsive-redesign/anndesktop.png";

import annaccessibility from "../../assets/responsive-redesign/annAccessibility.png";

import styleguide from "../../assets/responsive-redesign/styleguide.png";
import mobile from "../../assets/responsive-redesign/mobile.png";
import tablet from "../../assets/responsive-redesign/tablet.png";
import desktop from "../../assets/responsive-redesign/desktop.png";

import redesktop from "../../assets/responsive-redesign/redesigndesktop1.png";
import retablet from "../../assets/responsive-redesign/retablet.png";
import rephone from "../../assets/responsive-redesign/rephone.png";

import redesktop2 from "../../assets/responsive-redesign/redesigndesktop2.png";

const intro: string =
  "Modern web design is a technological marvel. Think about the variety of devices we use to access the web: smartphones, tablets, laptops, and desktop. Each of these devices has different screen sizes, resolutions, and input methods. How do we manage to present the same information for all these devices? Let's use Google as an example.";
const intro2: string =
  "Pay attention to how information is broadly laid out. As the above example demonstrates, the Google search results for the same term are organized differently on different screensizes in order to maintain readability in all of them. This is a great example of responsive design - a design principle that creates web pages that are usable, accessible, and aesthetically pleasing on all devices. Responsive design broadens a website's appeal and reduced friction by providing a tailored user experience across different devices and screen sizes. ";
const intro3: string =
  "In modern web design, responsiveness can be achieved using flexboxes and grids. However, it's important to note that responsive design is not solely a technical discipline. In addition to making sure things fit on the screen, designers should also be aware of how information is presented. For example, one should avoid putting too much information on the screen at once for mobile users - an adequate level of information on desktops can become overwhelming on mobile. To learn more about the principles and practices of responsible design, let's investigate an existing website whose experience can be improved:";

const annDesktopCritique: string = "";

const annDesktopProblems: string[] = [
  "XThis is the desktop page of AnimeNewsNetwork, a website for people to write reviews on their favorite shows. This is also the page we'll be redesigning for this case study! Let's analyze this page on all screen sizes - first desktop:",
  "Learnability: The large amount of menu options makes it difficult for new users to learn the website ",
  "Memorability: The large amount of flatly-listed information makes it difficult for returning users to remember how to navigate the website quickly",
  "Efficiency: The flat layout increases navigational efficiency for frequent users, but efficiency can definitely be further improved",
];

const annDesktopSummarize: string =
  "Overall, I would say this webpage is characterized by its 'lay out everything in a flat menu' approach. This allows for good efficiency for frequent users, but it sacrifices learnability and memorability. The page is also inadequately responsive - not using the full horizontal space - which can be improved. Before we move on to the redesign, let's take a look at how the site responds to changing to a smaller screen size:";

const annTabletCritique: string =
  "The tablet page of AnimeNewsNetwork generally follows the desktop version in layout. It offers better responsiveness - eliminating the whitespace on the right. However, issues we found previously still largely applies.";

const annPhoneCritique: string =
  "The phone page of AnimeNewsNetwork has a much simpler layout by sacrificing some information. As a result, the learnability and memorability of the page were greatly improved. That said, the page suffered a little bit on the efficiency front, making users scroll farther down to find some information. The only potential issue about this layout is the filter menu, which lays out 14 categories for the user to potentially use and takes up a lot of screen space. ";

const accessibilityCritique: string =
  "To also investigate the accessibility of the page, I used the WAVE accessibility evaluation tool (see results below). The most common erros include 'links with no text', 'missing form labels', 'low contrast element' and 'redundant link'. I agree with most of these results, though it should be noted that the low contrast elements are mainly timestamps which are liked ignored by most users anyways.";

const summary: string = "";
const summaryPoints: string[] = [
  "XTo summary our analysis, the current ANN website has the following main issues:",
  "Information/menu cluttering resulting from a flat layout on all three common screen sizes, but especially on desktop and tablet.",
  "Vertical misalignment of articles on desktop and tablet.",
  "The filter menu on mobile takes up a lot of screen space.",
  "Various accessibility issues as noted above.",
];
const summary2: string =
  "Let's make a redesign of the website that attempts to mediate these issues!";

const redesignIntro: string =
  "First, let us create a visual design style guide. This will help us to create a consistent look and feel across the website. The style guide will include color palletes, typography, logo, and frequently-used design components to make the user experience consistent across components and devices. Also, by adopting a more contrasting color scheme, we can also improve the accessibility of the website. Here is a style guide I created for the redesign:";

const redesignIntro2: string =
  "Next, let us use this style guide to produce some prototypes for how the website should behave across different screen sizes. We pick phone, tablet, and desktop as our three common screen sizes. ";

const phoneNote: string =
  "For the phone design, I wanted to cap the number of banners displayed to reduce travel distance. I also hid the filter menu, which would hopefully reduce friction to the application. I also increased the amount of columns per row while being mindful of clutter - using plenty of spacing and a bigger font to balance the overall information density. These changes will make the page more learnable and memorable, while slightly sacrificing efficiency. ";

const tabletNote: string =
  "For the tablet design, I kept the two-row article display of articles. The main changes here are limiting the amount of banners displayed on top, making sure all articles are aligned, and hiding the filter menu by default. I also reorganized the filter options to be more coarse-grained so that it's very digestable even when expanded. This will increase the learnability and memorability of the page compared to the current one. ";

const desktopNote: string =
  "For the desktop redesign, my highest priority was to make sure that the page is fully responsive - eliminating the confusing white space on the right. Additionally, I also reorganized the filter menu and aligned the articles like the tablet version. I also made small changes to the UI element sizes and spacing to make the website more aesthetically pleasing - at least by personal preference. This will again make the page more learnable and memorable, increasing user retention. I also removed the date-based article organization, using space more efficiently and making the user experience more seemless.";

const justifyingmyselfcusthetasgradereallystrictly: string[] = [
  "XFinally, let's review what our redesign accomplished:",
  "Reducing clutter across all three screen sizes resolved the issue of information overload, improving new user learning experience. ",
  "Making the page more responsive to multiple screen sizes, reducing user confusion and making the page more aesthetically appealing on all devices.",
  "Adding more drop shadows and a simpler, more contrasting color scheme improved accessibility of the page.",
  "Reducing the amount of interactive components made the page more learnable and memorable for users. This also increases accessibility as screen readers will be able to navigate the page faster.",
];

function ResponsiveRedesign() {
  return (
    <div className="flex flex-col bg-lime-100 min-h-screen">
      <Navbar />
      <BlogSideMenu
        sections={[
          "Top",
          "Introduction",
          "Usability",
          "Accessibility",
          "Problems",
          "Redesign",
          "Final Product",
          "Reflection",
        ]}
        links={[
          "#top",
          "#intro",
          "#usability",
          "#accessibility",
          "#problems",
          "#redesign",
          "#product",
          "#reflection",
        ]}
      />
      <div id="top" />
      <BlogTitle
        title="Responsive Redesign: An Inquiry on Usability and Accessibility"
        date="03/2025"
        role="Product/UX Designer, Frontend Developer"
        skills={[
          "Responsive Design",
          "UI/UX Design",
          "Frontend Development",
          "Web Components",
        ]}
      />
      <BlogImg
        imgPath={redesktop}
        altText="A screenshot of the final redesigned AnimeNewsNetwork website"
        height=""
        altAccessibility="A screenshot of the final redesigned AnimeNewsNetwork website"
      />
      <div id="intro" />
      <BlogSectionTitle title="Introduction" />
      <BlogText text={intro} />
      <div className="max-w-[80vw] flex justify-between bg-lime-200 rounded-2xl my-2 px-4 border-black border-2 self-center w-">
        <BlogInlineImg
          imgPath={googlephone}
          altText="Google search results, phone"
          altAccessibility="Google search results for 'Responsive Redesign' on a phone. A summary is provided and items follow underneath."
        />
        <BlogInlineImg
          imgPath={googletablet}
          altText="Google search results, tablet"
          altAccessibility="Google search results for 'Responsive Redesign' on a tablet. Similar to the phone layout, just wider."
        />
        <BlogInlineImg
          imgPath={googledesktop}
          altText="Google search results, desktop"
          altAccessibility="Google search results for 'Responsive Redesign' on a desktop. The search results are laid out in a list, where each search result is aligned to the left and the right side is reserved for negative space."
        />
      </div>
      <p className="text-left text-xl flex flex-col text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        Pay attention to how information is broadly laid out. The Google search
        results for the same term are organized differently on different
        screensizes.
        <br />
        <span className="font-bold">
          This is a great example of responsive design - a design principle that
          creates web pages that are usable, accessible, and aesthetically
          pleasing on all devices.{" "}
        </span>
        <p className="mt-6">
          Responsiveness can be achieved using flexboxes and grids. However,
          it's important to note that{" "}
          <span className="font-bold">
            responsive design is not solely a technical discipline
          </span>
          . One should be aware of how information is presented. In this case
          study, we'll try to redesign a website to learn more about
          responsiveness.
        </p>
      </p>
      <div id="usability" />
      <BlogSectionTitle title="Investigation - Usability" />
      <BlogImg
        imgPath={anndesktop}
        altText="A screenshot of AnimeNewsNetwork as seen on desktop"
        height="100"
        altAccessibility="A screenshot of AnimeNewsNetwork as seen on desktop. The page features a lot of information, including a large menu bar, a search bar, and a list of articles at the bottom. There's a lot of whitespace on the right side of the page, which is not used for anything."
      />
      <BlogBulletList items={annDesktopProblems} />
      <BlogImg
        imgPath={anntablet}
        altText="A screenshot of AnimeNewsNetwork as seen on tablet"
        height="100"
        altAccessibility="A screenshot of AnimeNewsNetwork as seen on tablet. The page lays out a lot of information, including a large menu bar and a filter options bar featuring more than a dozen options. The page is more responsive than the desktop version, eliminating the whitespace on the right side of the page."
      />
      <BlogText text={annTabletCritique} />
      <BlogImg
        imgPath={annphone}
        altText="A screenshot of AnimeNewsNetwork as seen on phone"
        height="100"
        altAccessibility="A screenshot of AnimeNewsNetwork as seen on phone. The page uses a simple layout, simply displaying articles one-by-one as a vertical list."
      />
      <BlogBulletList
        items={[
          "XThe phone page of AnimeNewsNetwork has a much simpler layout:",
          "Information is sacrificed for better learnability and memorability",
          "Users need to scroll farther down to find some information, sacrificing efficiency",
        ]}
      />
      <div id="accessibility" />
      <BlogSectionTitle title="Investigation - Accessibility" />
      <BlogText text={accessibilityCritique} />
      <BlogImg
        imgPath={annaccessibility}
        altText="ANN evaluated by the WAVE accessibility evaluation tool"
        height="100"
        altAccessibility="Screenshot of the WAVE accessibility evaluation tool, showing the results of the evaluation on AnimeNewsNetwork. There are 192 errors, 52 contrast errors, 182 alerts, 10 features, 238 structural elements,and 19 aria."
      />
      <div id="problems" />
      <BlogSectionTitle title="Oops! Problems" />
      <BlogBulletList items={summaryPoints} />
      <BlogText text={summary2} />
      <div id="redesign" />
      <BlogSectionTitle title="Redesign" />
      <BlogText text={redesignIntro} />
      <BlogImg
        imgPath={styleguide}
        altText="Style guide for the redesign"
        height=""
        altAccessibility="A style guide for the redesign of AnimeNewsNetwork. The style guide includes a color palette, typography, logo, and frequently-used design components. The guide also shows how design components should be displayed across different screen sizes."
      />
      <BlogText text={redesignIntro2} />
      <BlogImg
        imgPath={mobile}
        altText="Redesign for mobile"
        height="100"
        altAccessibility="Redesigned ANN page for mobile, featuring a layout closer to the original tablet layout, with headlines listed as a vertical list and articles listed 2-per-row."
      />
      <BlogBulletList
        items={[
          "XFor the phone design, I:",
          "Capped the number of banners displayed to reduce travel distance",
          "Hid the filter menu to reduce friction to the application",
          "Increased the amount of columns per row while being mindful of clutter - using plenty of spacing and a bigger font to balance the overall information density",
        ]}
      />
      <BlogImg
        imgPath={tablet}
        altText="Redesign for tablet"
        height="100"
        altAccessibility="Redesigned ANN page for tablet, essentially the same as the mobile page, just scaling the elements differently."
      />
      <BlogBulletList
        items={[
          "XFor the tablet design, I:",
          "Kept the two-row article display of articles",
          "Limited the amount of banners displayed on top",
          "Made sure all articles are aligned",
          "Hid the filter menu by default",
          "Reorganized the filter options to be more coarse-grained so that it's more digestable",
        ]}
      />
      <BlogImg
        imgPath={desktop}
        altText="Redesign for desktop"
        height="100"
        altAccessibility="Redesigned ANN page for desktop, reducing the number of dropdown menus from the original design and also reducing the amount of submenus inside each dropdown menu. The site uses all horizontal space and is more reactive."
      />
      <BlogBulletList
        items={[
          "XFor the desktop redesign, I:",
          "Made sure that the page is fully responsive",
          "Reorganized the filter menu",
          "Aligned the articles like the tablet version",
          "Made small changes to the UI element sizes and spacing to make the website more aesthetically pleasing",
        ]}
      />
      <div id="product" />
      <BlogSectionTitle title="Final Product" />
      <div className="text-left text-xl flex text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        <p>
          After a bunch of coding,{" "}
          <a
            href="https://bokaibi.com/ann"
            className="text-blue-600 hover:underline focus:text-blue-800"
          >
            here
          </a>{" "}
          is the final website! I would say it adheres very well to the Figma
          prototype we created above. Here are some cool screenshots, but please
          also check if out at the link above!
        </p>
      </div>
      <BlogImg
        imgPath={redesktop}
        altText="Implementation of redesigned ANN on desktop (1)"
        height="110"
        altAccessibility="Implementation of redesigned ANN on desktop (image 1/2). The page recreates faithfully the responsive figma prototype from above. Shows the top parts of the website with the banner and menus."
      />
      <BlogImg
        imgPath={redesktop2}
        altText="Implementation of redesigned ANN on desktop (2)"
        height="110"
        altAccessibility="Implementation of redesigned ANN on desktop (image 2/2). Shows the bottom articles section of the website in a grid layout."
      />
      <BlogImg
        imgPath={retablet}
        altText="Implementation of redesigned ANN on tablet"
        height="110"
        altAccessibility="Implementation of redesigned ANN on tablet. The page recreates faithfully the responsive figma prototype from above."
      />
      <BlogImg
        imgPath={rephone}
        altText="Implementation of redesigned ANN on phone"
        height="110"
        altAccessibility="Implementation of redesigned ANN on phone. The page recreates faithfully the responsive figma prototype from above."
      />
      <div id="reflection" />
      <BlogSectionTitle title="Reflection" />
      <BlogBulletList items={justifyingmyselfcusthetasgradereallystrictly} />
    </div>
  );
}

export default ResponsiveRedesign;
