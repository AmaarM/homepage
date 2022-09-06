import Image from "next/image";
import { StaticImageData } from "next/image";
import TargetLogo from "../assets/target-logo.jpg";
import CodepathLogo from "../assets/codepath-logo.jpg";
import { useState } from "react";

type workSection = {
  company: string;
  title: string;
  desc: string;
  timeFrame: string;
  image: StaticImageData;
};

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-skin-base text-center my-10">
        Work Experience
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly w-screen">
        <WorkSection
          company={"Target"}
          title={"Guest Advocate"}
          desc={
            "Assisted Guests with any questions they may have, and resolve issues"
          }
          timeFrame={"11-2018 -> 06-2022"}
          image={TargetLogo}
        />
        <WorkSection
          company={"CodePath x Schmidt Futures"}
          title={"Full Stack Intern"}
          desc={
            "Built Responsive Websites using Javascript Technologies like React, Node, Express and more"
          }
          timeFrame={"06-2022 -> 08-2022"}
          image={CodepathLogo}
        />
      </div>
    </div>
  );
};

const WorkSection = ({
  title,
  desc,
  timeFrame,
  image,
  company,
}: workSection) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleOnClick = () => {
    setMoreInfo(!moreInfo);
  };

  return (
    <div className="text-skin-base w-[500px] my-10 flex flex-row justify-center">
      <div>
        <Image
          src={image}
          alt="target logo"
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        <h1 className="text-2xl max-w-[450px] my-1">{company}</h1>
        <h1 className="text-2xl max-w-[450px] my-1">{title}</h1>
        <h1 className="text-xl my-1">{timeFrame}</h1>
        <h1
          className="text-sm text-center my-5 cursor-pointer hover:text-skin-gray"
          onClick={handleOnClick}
        >
          More Info
        </h1>
      </div>
    </div>
  );
};

export default Experience;
