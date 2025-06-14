import React from "react";
import Navbar from "../../components/Navbar";
import BlogText from "../../components/BlogText";
import BlogImg from "../../components/BlogImg";
import BlogInlineImg from "../../components/BlogInlineImg";
import BlogTitle from "../../components/BlogTitle";
import BlogSideMenu from "../../components/BlogSideMenu";
import smokoishi from "../../assets/smokoishi.jpeg";

import doc0 from "../../assets/accessible-components/doc0.png";
import doc from "../../assets/accessible-components/doc.png";
import figma0 from "../../assets/accessible-components/figma0.png";
import figma from "../../assets/accessible-components/figma.png";
import wiki from "../../assets/accessible-components/wiki.png";
import wiki0 from "../../assets/accessible-components/wiki0.png";

import keyboardbefore from "../../assets/accessible-components/keyboardbefore.png";
import keyboardafter from "../../assets/accessible-components/keyboardafter.png";
import mouseBefore from "../../assets/accessible-components/mousebefore.png";
import mouseAfter from "../../assets/accessible-components/mouseafter.png";
import redesignedcomponent from "../../assets/accessible-components/redesignedcomponent.png";
import redesign from "../../assets/accessible-components/redesign.png";
import BlogSectionTitle from "../../components/BlogSectionTitle";
import BlogBulletList from "../../components/BlogBulletList";

const introParagraph: string = `
Our web experience is shaped by the components we use. Interactive components like buttons, text boxes, dropdown menus, and popup dialogs let users interact with the website, while also providing convenient metaphors for organization. Investigating the accessibility and design tradeoffs of these components allows us to build websites that are universally useable and provide the best possible user experience. In this case study, let's try to improve a common component - the dropdown menu. 
`;
const dropdownParagraph: string = `
Dropdown menus are one of the most miraculous inventions in the history of UI Design. As our applications grow more complicated, it becomes necessary to have a large amount of functionality in a small amount of space. Dropdown menus allow us to hide away this functionality until it is needed. However, they may also be problematic to navigate. Below are three examples of dropdown menus:
`;
const dropdownAnalysisParagraph: string = `
After investigating, both Google Docs and Figma appeared to have dropdown menus that cannot be fully navigated using a keyboard. For more details, I organized a more detailed table below: 
`;
const dropdownInputAnalysisAfter: string = `
Overall, the mouse/touch experience is smooth, but the keyboard experience is surprisingly inadequate. While Wikipedia provides an overall smooth and navigatable experience, both Google Docs and Figma have keyboard traps and unreachable menus. 

I encourage the readers to try out these pages themselves to get a better idea of the difficulties. That said, the dropdown menu by itself performed fine and was navigatable in all input modes. 
`;
const dropdownOutputBegin: string = `
UI elements are inherently interactive experiences that provide feedback to the users based on their inputs. For example, when the user clicks on a dropdown menu, its state changes to show the hidden menu items as an output. Overall, all three websites do a lot better with output than input. For more details, please check out the table below!: `;

const postOutputText: string = `
When it comes to keyboard access, we can see clearly that outputs are doing better than inputs. Across different modes of interaction, all three applications manage to make their dropdown menus output helpful signals to the user.
`;

const keyboardRedesignText: string = `
I made a state machine for Google Docs' dropdown menu to illustrate the interaction better. 
Considering the issue with keyboard traps and unreachable menus, I decided to add a new key shortcut that allows the user to navigate to the top of the menus anywhere (include within the text editor) by pressing Shift+ESC. This change is a trade-off between keyboard accessibility and learnability/memorability. Users that are not familiar with the shortcut may accidentally press it and be confused by the sudden change in focus. Shift+ESC might also be a key combination used in other applications for different purposes, which may cause user confusion. However, I believe that the benefits of this change outweigh the potential drawbacks - since at the moment Google Docs dropdown menus are completely unreachable using keyboard alone.
`;

const mouseBeforeText: string = `
Let us take a look at how mouse users interact with the same dropdown menu. Here's another state machine: 
`;

const mouseRedesignText: string = `
Since the mouse interaction experience is already pretty good, I decided to trade-off some learnability for efficiency. Since Google Docs is a commonly-used professional tool, this kind of trade-off will save users much more time in the long run. Specifically, I removed the "hover" state, making the menu automatically expand when the user hovers on the menu. Here's the revised state machine: 
`;

const beforeRedesignText: string = `
Let's illustrate how our redesigned dropdown menu will work for keyboard and mouse users in an image:
`;

function AccessibleComponents() {
  return (
    <div className="flex flex-col bg-lime-100 min-h-screen">
      <Navbar />
      <BlogSideMenu
        sections={["Top", "Investigations", "Design & Solution", "Reflections"]}
        links={["#top", "#problem", "#solution", "#reflections"]}
      />
      <div id="top" />
      <BlogTitle
        title="Investigation: Accessibility of Web Components"
        date="01/2025 - 02/2025"
        role="Product/UX Designer"
        skills={[
          "UI/UX Design",
          "Accessibility",
          "Web Components",
          "Interaction Design",
        ]}
      />
      <p className="text-left text-xl flex flex-col text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        <span className="font-bold">
          Our web experience is shaped by the components we use.
        </span>{" "}
        Interactive components like buttons, text boxes, dropdown menus, and
        popup dialogs let users interact with the website, while also providing
        convenient metaphors for organization. Investigating the accessibility
        and design tradeoffs of these components allows us to build websites
        that are universally useable and provide the best possible user
        experience.{" "}
        <span className="font-bold">
          In this case study, let's try to improve a common component - the
          dropdown menu.
        </span>
      </p>
      <div id="problem" />
      <BlogSectionTitle title="Investigating the Problem of Dropdown Menus" />
      <BlogText text={dropdownParagraph} />
      <div className="flex flex-col items-center">
        <div className="flex justify-between bg-lime-200 rounded-2xl my-2 px-4 max-w-160 border-black border-2">
          <BlogInlineImg
            imgPath={doc0}
            altText="Dropdown menu in Google Docs, collapsed"
            altAccessibility="Google Docs dropdown menu, collapsed. Shows a horizontal list of options including File, Edit, View, Insert, etc."
          />
          <BlogInlineImg
            imgPath={doc}
            altText="Dropdown menu in Google Docs, expanded"
            altAccessibility="Google Docs dropdown menu, expanded. Shows a vertical list of more detailed options from the selected horizontal option. Each detailed option is accompanied by a keyboard shortcut and an icon. The selected horizontal option is highlighted in gray."
          />
        </div>
        <div className="flex justify-between bg-lime-200 rounded-2xl my-2 px-4 max-w-160 border-black border-2">
          <BlogInlineImg
            imgPath={figma0}
            altText="Dropdown menu in Figma, collapsed"
            altAccessibility="Figma dropdown menu, collapsed. A single icon button with a downwards arrow indicating it can expand downwards."
          />
          <BlogInlineImg
            imgPath={figma}
            altText="Dropdown menu in Figma, expanded"
            altAccessibility="Figma dropdown menu, expanded. Shows a vertical list of options. Hovering over an option expands the associated submenu. For example, hovering over the 'File' option expands a submenu with options such as 'New design file', 'New FigJam file', etc. The selected option is highlighted in blue."
          />
        </div>
        <div className="flex justify-between bg-lime-200 rounded-2xl my-2 px-4 max-w-160 border-black border-2">
          <BlogInlineImg
            imgPath={wiki0}
            altText="Dropdown menu in Wikipedia, collapsed"
            altAccessibility="A Wikipedia dropdown menu, collapsed. A text button that has a downwards facing arrow to indicate it can expand."
          />
          <BlogInlineImg
            imgPath={wiki}
            altText="Dropdown menu in Wikipedia, expanded"
            altAccessibility="A Wikipedia dropdown menu, expanded. Shows a vertical list of options. The previous text button is bordered in blue to show the dropdown menu is expanded and in-focus. The options are hyperlinks that can be clicked to navigate to the corresponding page."
          />
        </div>
      </div>
      <BlogText text={dropdownAnalysisParagraph} />
      <div className="grid grid-cols-4 mx-[15vw] my-4 bg-lime-200 rounded-2xl p-4 border-black border-2">
        <p className="border-1 border-black text-xl font-bold text-center py-1">
          INPUT RESPONSES
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Google Docs
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Figma
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Wikipedia
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Mouse/Touchpad
        </p>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>- Highlighted on cover and dropdown displays on click.</li>
          <li>
            - Text not selectable, releasing clicks outside of option does not
            count as clicking.
          </li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Secondary menus expand on hover, disappear immediately unless
            mouse moves towards expanded menu.
          </li>
          <li>- Otherwise same as Google Docs.</li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Explicitly displayed options become dropdown as width decreases.
          </li>
          <li>- Menu contents are hyperlink texts, selectable.</li>
        </ul>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Keyboard
        </p>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Very difficult without using a mouse at all: the TAB and arrow
            keys can't navigate to the menus.
          </li>
          <li>- Tabbing into the text editor results in a keyboard trap.</li>
          <li>
            - Screenreader breaks the dropdown completely: arrow keys fail to
            select items.
          </li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Similar difficulties in navigating purely with the keyboard.
          </li>
          <li>- Same keyboard trap issue as Google Docs.</li>
          <li>- Navigatable once the dropdown is open with a mouse.</li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Surprisingly navigatable, all elements are reachable with keyboard
            alone.
          </li>
          <li>
            - The dropdown menu can be opened and closed purely with keyboard,
            items can be selected normally.
          </li>
          <li>- Screenreader works perfectly.</li>
        </ul>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Touch
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          - Works identically as the mouse case.
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          - Not available :(
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          - Works identically as the mouse case.
        </p>
      </div>
      <BlogText text={dropdownOutputBegin} />
      <div className="grid grid-cols-4 mx-[15vw] my-4 bg-lime-200 rounded-2xl p-4 border-black border-2">
        <p className="border-1 border-black text-xl font-bold text-center py-1">
          OUTPUT RESPONSES
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Google Docs
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Figma
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Wikipedia
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Mouse/Touchpad
        </p>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>- Color of button and options darkens on hover.</li>
          <li>- No click feedback or marker of last clicked item.</li>
          <li>
            Dropdown menu remains open until user clicks outside or hover over
            another dropdown menu.
          </li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>- Dropdown button darkens on hover and becomes blue on click.</li>
          <li>
            - Menu buttons are blue on hover, no click effects, secondary menu
            expands on hover.
          </li>
          <li>
            - Submenu persists longer if mouse is moving towards it, otherwise
            switches instantly if another submenu can be expanded.
          </li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Darkens on hover and blue outline appears on click. Menu displays
            on click.
          </li>
          <li>- Menu contents behave like normal hyperlink texts.</li>
        </ul>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Keyboard
        </p>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Once the focus is on the button, highlighting work intuitively on
            the currently selected option.
          </li>
          <li>- Options can be "clicked" using Enter.</li>
          <li>
            - Screenreaders correctly pronounces currently selected option.
          </li>
        </ul>
        <ul className="border-1 border-black text-xl text-bold text-left py-1 px-1">
          <li>- Same as Google Docs.</li>
        </ul>
        <ul className="border-1 border-black text-medium text-bold text-left py-1 px-1">
          <li>
            - Responsive just like Google Docs and Figma, except you can
            actually navigate the menu entirely with keyboard!
          </li>
          <li>- Selected options are shadowed and bordered.</li>
          <li>
            - Hyperlink options are underlined on hover, mouse changes to
            pointer.
          </li>
        </ul>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          Touch
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          - Highlights are placed on selected options, buttons are clickable
          with touch.
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          - Not available :(
        </p>
        <p className="border-1 border-black text-xl text-bold text-center py-1">
          - Highlights are placed on selected options, hyperlinks work as
          intended.
        </p>
      </div>
      <p className="text-left text-xl flex flex-col text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg">
        {postOutputText}
        <div className="h-6" />
        For our solution this time, let's try to improve the input experience
        for the Google Docs dropdown menu, which is the most problematic one.
      </p>
      <div id="solution" />
      <BlogSectionTitle title="Design Process & Solution" />
      <BlogImg
        imgPath={keyboardbefore}
        altText="State machine of Google Docs dropdown menu (Keyboard)"
        height=""
        altAccessibility="State machine of Google Docs dropdown menu (Keyboard). The state machine has states for 'Default', 'Focused', 'Active', 'Navigating Options', 'Disabled'. The transitions between these states are triggered by keyboard inputs."
      />
      <BlogBulletList
        items={[
          "XTo deal with keyboard traps and unreachable menus, added a new key shortcut (Shift+ESC) that allows the user to navigate to the top of the menus from anywhere. While this makes accessibility better, it does have potential problems.",
          "Potential detriment to learnability/memorability.",
          "Users may accidentally press it and be confused by the sudden change in focus.",
          "Shift+ESC might also be a key combination used in other applications",
          "XDespite these problems, I believe that the benefits of this change outweigh the potential drawbacks - since the current version is not navigatable at all with keyboards. Below is the revised state machine: ",
        ]}
      />
      <BlogImg
        imgPath={keyboardafter}
        altText="Revised state machine of Google Docs dropdown menu (Keyboard)"
        height=""
        altAccessibility="Revised state machine of Google Docs dropdown menu (Keyboard). Compared to before, the state machine has a new state called 'Anywhere Else'. A new transition is added from 'Anywhere Else' to 'Focused' when Shift+ESC is pressed."
      />
      <BlogText text={mouseBeforeText} />
      <BlogImg
        imgPath={mouseBefore}
        altText="State machine of Google Docs dropdown menu (Mouse)"
        height=""
        altAccessibility="State machine of Google Docs dropdown menu (Mouse). The state machine has states for 'Default', 'Hover', 'Active', 'Navigating Options', 'Disabled'. The transitions between these states are triggered by mouse inputs, including clicks and movements."
      />
      <BlogText text={mouseRedesignText} />
      <BlogImg
        imgPath={mouseAfter}
        altText="Revised state machine of Google Docs dropdown menu (Mouse)"
        height=""
        altAccessibility="Revised state machine of Google Docs dropdown menu (Mouse). Compared to before, the 'Hover' state is removed. The 'Active' state now expands the menu automatically when the user hovers over it, without requiring a click."
      />
      <BlogText text={beforeRedesignText} />
      <BlogImg
        imgPath={redesign}
        altText="Redesigned dropdown menu mockup for Google Docs"
        height=""
        altAccessibility="An image mockup demonstrating the changes made in the previous two revisions."
      />

      <div id="reflections" />
      <BlogSectionTitle title="Reflections" />
      <BlogBulletList
        items={[
          "XNow with our redesigned dropdown menu that improved accessibility and navigational efficiency, let's revisit  what we've learned in this process.",
          "Accessibility in design have real-world impacts.",
          'Less fancy "old style" designs such as that of Wikipedia are easier to make accessible',
          "Accounting for functionalities such as screen readers are harder, since many possible screen readers exist and the way they function is not immediately clear.",
          "Keyboard users are often neglected, as the web is more designed for mouse and mobile users. Accessible components should be entirely navigatable with keyboard alone.",
        ]}
      />
    </div>
  );
}

export default AccessibleComponents;
