import React from "react";
import Navbar from "../../components/Navbar";
import BlogText from "../../components/BlogText";
import BlogImg from "../../components/BlogImg";
import BlogInlineImg from "../../components/BlogInlineImg";
import BlogTitle from "../../components/BlogTitle";
import BlogSectionTitle from "../../components/BlogSectionTitle";
import BlogBulletList from "../../components/BlogBulletList";
import BlogSideMenu from "../../components/BlogSideMenu";
import smokoishi from "../../assets/smokoishi.jpeg";

import persona from "../../assets/persona/sakurafutaba.jpg";
import water from "../../assets/persona/water.jpg";
import watersketch from "../../assets/persona/watersketch.png";
import persona1 from "../../assets/persona/newfrancis.png";
import persona2 from "../../assets/persona/personaFern.png";
import storyboardImg from "../../assets/persona/storyboard.png";

const joke: string = "Let's talk about Personas!";
const intro: string =
  "Wait not this one.. I meant personas in terms of design. Understanding potential userbase is an integral part of interaction design. People come from remarkably different backgrounds and have astoundingly different needs and wants. Constructing one or more vivid personas of potential users can help us investigate user desires. To demonstrate how we can better understand our users using personas & storyboarding, we will investigate the userbase of a public interface today. Specifically, this:";
const waterDispenserDescription: string =
  'This is a water dispenser at the 4th floor of the Computer Science Department Building (CIT) at Brown University, commonly referred to as "the best water dispenser on campus". Outside from looking very modern and providing (in my opinion not that significantly) good tasting water, it also struck me as having an unique user experience. Instead of pressing a physical button, the user is supposed to hover their hand a distance away from the sensor. Let\'s use a sketch to see how users interact with this magical apparatus:';
const observation: string =
  "User behaviors are prone to observer effects. Our behaviors may change when we are observed or questioned (for example, trying to look more competent). As this water dispenser is a public interface, we can observe users passively and minimize the observer effect. Here are some observations I made (after sitting menacingly in the CIT 4th floor kitchen):";
const observations: string[] = [
  "XHere are some observations I made (after sitting menacingly in the CIT 4th floor kitchen):",
  "Most users are experienced, operating the machine with ease without reading the instructions.",
  "Newer users (those who spend time reading the instructions) often hesitate due to the sign explicitly stating that the buttons should not be physically touched. ",
  "After figuring out that the machine is proximity-activated, many new users still struggle to find the correct distance to activate the sensor.",
  "Many experienced users (those who don't read the instructions) still struggle to keep the right distance with the sensitive sensor.",
];
const questionDesc: string =
  "We can interview users using questions - a harder process than it sounds. A good question should provide good insight into the user's experiences and challenges when engaging with the interface, while striving to be objective and neutral. Here's a list of questions and corresponding answers:";
const questions: string[] = [
  "Q: How often do you use this water dispenser?",
  "Users typically use the water dispenser 2-3 times a day when spending whole days in the CIT. Frequent usage is primarily motivated by the lack of other dispensers in the CIT.",
  "Q: What do you think about the interaction experience with this water dispenser?",
  "Most user responses are positive, some commonly cited upsides include the non-contact nature of the interaction and novelty, while downsides include the sensors being too sensitive and not knowing where the water comes out.",
  "Q: Is there something you would like to change about the interaction?",
  "Users proposed making the sensors sense the presence of a bottle instead so it's more stable and the user don't have to hold out their hands all the time. ",
];
const personaIntro: string =
  "With our observations and investigations, let's try to create empathy maps for two kinds of architypical users (personas): First-time Francis, who uses the water dispenser for the first time, and Frequent Fern, who uses the water dispenser multiple times a day. An empathy maps shows what the user thinks, feels, does, and says in the context of interactions:";
const storyboardIntro: string =
  "Let's draw a storyboard for our first persona - First-time Francis - a typical first-time user! A storyboard illustrates the experience of a typical user archetype when interacting with this strange water dispenser. The storyboard helps us to develop a more complete understanding as to the scenarios users live in, allowing us to better design for their experiences and needs.";

function PersonaStoryboard() {
  return (
    <div className="flex flex-col bg-lime-100 min-h-screen">
      <Navbar />
      <BlogSideMenu
        sections={[
          "Top",
          "Motivation",
          "Observations",
          "Interview Questions",
          "Final Personas",
          "Final Storyboard",
        ]}
        links={[
          "#title",
          "#motivation",
          "#observations",
          "#questions",
          "#personas",
          "#storyboard",
        ]}
      ></BlogSideMenu>
      <div id="title" />
      <BlogTitle
        title="Who's my user? Making Personas & Storyboards"
        date="02/2025 - 03/2025"
        role="Product/UX Designer"
        skills={[
          "User Research",
          "Persona Creation",
          "Storyboarding",
          "UI/UX Design",
        ]}
      />
      <div id="motivation" />
      <BlogSectionTitle title="Motivation" />
      <BlogText text={joke} />
      <BlogImg
        imgPath={persona}
        altText="Sakura Futaba from the video game Persona 5"
        height=""
        altAccessibility="Sakura Futaba from the video game Persona 5"
      />
      <BlogText text={intro} />
      <BlogImg
        imgPath={water}
        altText="A proximity-sensor water dispensor"
        height=""
        altAccessibility="A picture of a proximity-sensor water dispenser. Presents two buttons that the user can hover their fingers over to switch the temperature and dispense water. The machine also has large text labels that instruct the user on how to use the machine and how the machine functions."
      />
      <BlogText text={waterDispenserDescription} />
      <BlogImg
        imgPath={watersketch}
        altText="Sketch of the water dispenser. The left button switches temperature, while the right dispenses water."
        height=""
        altAccessibility="A sketch of the water dispenser. The left button switches temperature, while the right dispenses water. The sketch also includes a hand hovering over the right button to indicate how the machine is operated."
      />
      <div id="observations" />
      <BlogSectionTitle title="User Research - Observations" />
      <p className="text-left text-xl flex text-semibold my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg flex-col">
        User behaviors are prone to observer effects. Our behaviors may change
        when we are observed or questioned (for example, trying to look more
        competent).
        <br />
        <br />
        As this water dispenser is a public interface, we can observe users
        passively and minimize the observer effect.
      </p>
      <BlogBulletList items={observations} />
      <div id="questions" />
      <BlogSectionTitle title="User Research - Questions" />
      <BlogText text={questionDesc} />
      <ul className="text-xl text-left flex my-4 mx-[16vw] p-6 bg-lime-50 rounded-2xl drop-shadow-lg flex-col">
        <li className="font-bold">{questions[0]}</li>
        <li className="text-semibold">
          <span className="text-red-700">•</span> {questions[1]}
        </li>
        <li>
          <br></br>
        </li>
        <li className="font-bold">{questions[2]}</li>
        <li className="text-semibold">
          <span className="text-blue-700">•</span> {questions[3]}
        </li>
        <li>
          <br></br>
        </li>
        <li className="font-bold">{questions[4]}</li>
        <li className="text-semibold">
          <span className="text-green-700">•</span> {questions[5]}
        </li>
      </ul>
      <div id="personas" />
      <BlogSectionTitle title="Final Personas" />
      <BlogText text={personaIntro} />
      <BlogImg
        imgPath={persona1}
        altText="Persona 1: First-time Francis"
        height=""
        altAccessibility="A persona for First-time Francis, a user that doesn't come to the CIT often. The user is shown to be a bit confused and hesistent about how the machine works and whether they're using it correctly."
      />
      <BlogImg
        imgPath={persona2}
        altText="Persona 2: Frequent Fern"
        height=""
        altAccessibility="A persona for Frequent Fern, a user that comes to the CIT often. The user uses the machine with relative ease without reading. The user wishes that the experience is more stable and efficient (having water come out faster)."
      />
      <div id="storyboard" />
      <BlogSectionTitle title="Final Sotryboard" />
      <BlogText text={storyboardIntro} />
      <BlogImg
        imgPath={storyboardImg}
        altText="Storyboard for First-time Francis"
        height=""
        altAccessibility="A storyboard for First-time Francis. The storyboard shows the user wanting to get some water, hearing about the dispenser from a friend, entering the CIT kitchen, reading the instructions, putting their bottle below the nozzle, hovering his hand over the sensor, and finally getting water."
      />
      <BlogText text="This is the end of this investigation! Thank you very much for following and see you next time :)"></BlogText>
    </div>
  );
}

export default PersonaStoryboard;
