import { StaticImageData } from "next/image";
import LifeTrackerPic from "../assets/lifetracker.png";
import FloraFaunaPic from "../assets/flora-fauna.png";
import FlixsterPic from "../assets/flixster.png";
import Link from "next/link";
import {
  DiPostgresql,
  DiReact,
  DiNodejs,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiJava,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { useState } from "react";

type projectData = {
  title: string;
  techStack: Array<string>;
  link: string;
  desc: string;
  imageUrl: StaticImageData;
  features: Array<string>;
};

const Projects = () => {
  return (
    <div id="projects" className="text-skin-base">
      <h1 className="text-skin-base text-2xl md:text-4xl text-center">
        Projects
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly md:w-screen w-[200px] mx-auto">
        <ProjectSection
          imageUrl={FloraFaunaPic}
          title={"Flora&Fauna"}
          techStack={["React", "Node", "SQL", "Express"]}
          desc={"Website that allows users to search for local flora and fauna"}
          link={"https://flora-fauna.surge.sh/"}
          features={[
            "- User Authentication, log in and sign up",
            "- Search the database for local flora and fauna",
            "- Upload Photos for other users to see",
            "- Like other users uploads",
            "- Report inappropriate user posts",
            "- See Your posted and likes posts",
            "- Change profile details",
          ]}
        />
        <ProjectSection
          imageUrl={LifeTrackerPic}
          title={"Life Tracker"}
          techStack={["React", "Node", "SQL", "Express"]}
          link={"https://lifetracker-amaar.surge.sh/"}
          desc={"Website that allows users to track exercises and calories"}
          features={[
            "- Log in and sign up",
            "- Centralized dashboard to see logged nutrition and exercises",
            "- Log exercises and calories eaten",
          ]}
        />
        <ProjectSection
          title={"Flixster"}
          techStack={["Javascript", "Html", "CSS"]}
          link={"https://amaarm.github.io/flixster_starter/"}
          desc={"Website to see the the now playing or trending movies"}
          imageUrl={FlixsterPic}
          features={[
            "- Search for movies",
            "- Sort by now playing and trending movies",
            "- Request to see more movies",
          ]}
        />
      </div>
    </div>
  );
};

export const ProjectSection = (props: projectData) => {
  const { techStack, imageUrl, desc, link, features } = props;
  const [moreInfo, setMoreInfo] = useState(false);

  const possibleTechs: object = {
    React: DiReact,
    Node: DiNodejs,
    SQL: DiPostgresql,
    Express: SiExpress,
    Javascript: DiJavascript,
    Html: DiHtml5,
    CSS: DiCss3,
    Java: DiJava,
  };

  const usedStack = [];
  for (let i = 0; i < techStack.length; i++) {
    const component =
      techStack[i] != undefined
        ? possibleTechs[techStack[i] as keyof typeof possibleTechs]
        : () => {};
    usedStack.push(component);
  }

  return (
    <div className="w-[300px] text-left my-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl">{props.title}</h1>
        <div className="flex flex-row justify-evenly w-[100px]">
          {usedStack.map((Key:Function, idx) => {
            return <Key key={idx} />;
          })}
        </div>
      </div>
      <img
        src={imageUrl.src}
        alt="lifetracker landing page"
        className="rounded-xl"
      />
      <Link href={link}>
        <h1 className="cursor-pointer hover:underline mt-3 text-center">
          Link
        </h1>
      </Link>
      <p className="text-center">{desc}</p>
      <div className="flex justify-center my-5 align-center">
        <button
          className="hover:opacity-20 transition-opacity"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          More Info
        </button>
      </div>
      <div className={moreInfo ? "flex justify-center flex-col" : "hidden"}>
        {features.map((e, idx) => (
          <div key={idx}>{e}</div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
