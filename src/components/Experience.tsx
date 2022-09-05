import Image from "next/image";
import { StaticImageData } from "next/image";
import TargetLogo from "../assets/target-logo.jpg";
import CodepathLogo from "../assets/codepath-logo.jpg";

type workSection = {
  title: string;
  desc: string;
  timeFrame: string;
  image: StaticImageData;
};

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-skin-base">Work Experience</h1>
      <div className="flex flex-row flex-wrap justify-evenly w-screen">
        <WorkSection
          title={"Target"}
          desc={"Guest Advocate"}
          timeFrame={"11-2018 -> 06-2022"}
          image={TargetLogo}
        />
        <WorkSection
          title={"Codepath x Schmidt Futures"}
          desc={"Full Stack Intern"}
          timeFrame={"06-2022 -> 08-2022"}
          image={CodepathLogo}
        />
      </div>
    </div>
  );
};

const WorkSection = ({ title, desc, timeFrame, image }: workSection) => {
  return (
    <div className="text-skin-base w-[500px] my-10 flex flex-row justify-evenly">
      <div>
        <Image
          src={image}
          alt="target logo"
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        <h1 className="text-2xl max-w-[450px]">{title}</h1>
        <h1 className="text-xl">{desc}</h1>
        <p className="text-lg">{timeFrame}</p>
      </div>
    </div>
  );
};

export default Experience;
