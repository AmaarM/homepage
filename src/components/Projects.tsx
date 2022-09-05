import { StaticImageData } from "next/image";
import LifeTrackerPic from "../assets/lifetracker.png";
import FloraFaunaPic from "../assets/flora-fauna.png";
import Link from "next/link";
import { DiPostgresql, DiReact, DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";

type projectData = {
  title: string;
  techStack: object;
  link: string;
  desc: string;
  imageUrl: StaticImageData;
};

const Projects = () => {
  const techStackIcons = {
    React: DiReact,
    SQL: DiPostgresql,
    Node: DiNodejs,
    Express: SiExpress,
  };

  return (
    <div id="projects" className="text-skin-base mx-auto">
      <h1 className="text-skin-base text-4xl text-center mt-10">Projects</h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        <ProjectSection
          imageUrl={FloraFaunaPic}
          title={"Flora&Fauna"}
          techStack={techStackIcons}
          desc={
            "Website that gives users access to the New York Database for local Flora and Fauna"
          }
          link={"https://flora-fauna.surge.sh/"}
        />
        <ProjectSection
          imageUrl={LifeTrackerPic}
          title={"Life Tracker"}
          techStack={techStackIcons}
          link={"https://lifetracker-amaar.surge.sh/"}
          desc={"Website that allows users to track habits and calories"}
        />
      </div>
    </div>
  );
};

export const ProjectSection = (props: projectData) => {
  const { Node, React, SQL, Express } = props.techStack<any>;
  return (
    <div className="w-[300px] text-left my-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl">{props.title}</h1>
        <div className="flex flex-row justify-evenly w-[100px]">
          <Node />
          <React />
          <SQL />
          <Express />
        </div>
      </div>
      <img
        src={props.imageUrl.src}
        alt="lifetracker landing page"
        className="rounded-xl"
      />
      <Link href={props.link}>
        <h1 className="cursor-pointer hover:underline mt-3 text-center">
          Link
        </h1>
      </Link>
      <p className="text-center">{props.desc}</p>
    </div>
  );
};

export default Projects;
