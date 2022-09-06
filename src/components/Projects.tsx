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

type projectData = {
  title: string;
  techStack: Array<string>;
  link: string;
  desc: string;
  imageUrl: StaticImageData;
};

const Projects = () => {
  return (
    <div id="projects" className="text-skin-base">
      <h1 className="text-skin-base text-2xl md:text-4xl text-center">
        Projects
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        <ProjectSection
          imageUrl={FloraFaunaPic}
          title={"Flora&Fauna"}
          techStack={["React", "Node", "SQL", "Express"]}
          desc={
            "Website that gives users access to the New York Database for local Flora and Fauna"
          }
          link={"https://flora-fauna.surge.sh/"}
        />
        <ProjectSection
          imageUrl={LifeTrackerPic}
          title={"Life Tracker"}
          techStack={["React", "Node", "SQL", "Express"]}
          link={"https://lifetracker-amaar.surge.sh/"}
          desc={"Website that allows users to track habits and calories"}
        />
        <ProjectSection
          title={"Flixster"}
          techStack={["Javascript", "Html", "CSS"]}
          link={"https://amaarm.github.io/flixster_starter/"}
          desc={"Website to see the the now playing or trending movies"}
          imageUrl={FlixsterPic}
        />
      </div>
    </div>
  );
};

export const ProjectSection = (props: projectData) => {
  const { techStack, imageUrl, desc, link } = props;

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

  let testStack: Function[];
  testStack = [];
  for (let i = 0; i < techStack.length; i++) {
    const component =
      techStack[i] != undefined
        ? possibleTechs[techStack[i] as keyof typeof possibleTechs]
        : () => {};
    testStack.push(component);
  }

  return (
    <div className="w-[300px] text-left my-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl">{props.title}</h1>
        <div className="flex flex-row justify-evenly w-[100px]">
          {testStack.map((Key, idx) => {
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
    </div>
  );
};

export default Projects;
