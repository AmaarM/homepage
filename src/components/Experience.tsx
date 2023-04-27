import Image from "next/image";
import { StaticImageData } from "next/image";
import TargetLogo from "../assets/target-logo.jpg";
import CodepathLogo from "../assets/codepath-logo.jpg";
import UMNLogo from "../assets/umnlogo.png";
import { useState } from "react";
import { workSection } from "../components/types/index"

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center md:w-screen">
      <h1 className="text-4xl text-center my-10">Work Experience</h1>
      <div
        id="experience"
        className="flex flex-row flex-wrap justify-evenly w-screen"
      >
        <WorkSection
          company={"Target"}
          title={"Guest Advocate"}
          desc={[
            "- Assisted Guests with any questions they may have, and resolved issues",
            "- Worked with leaders to complete task's and improve guest experience",
          ]}
          timeFrame={"11-2018 -> 06-2022"}
          image={TargetLogo}
        />
        <WorkSection
          company={"CodePath x Schmidt Futures"}
          title={"Full Stack Intern"}
          desc={[
            `- One of the 9 selected from 1500 applicants`,
            `- Built Responsive Websites using Javascript Technologies like React, Node, Express, SQL and more`,
            `- Gained soft skills and also recieved and learned from industry professionals`,
          ]}
          timeFrame={"06-2022 -> 08-2022"}
          image={CodepathLogo}
        />
        <WorkSection
          company={"University of Minnesota"}
          title={"Student Developer"}
          desc={[
            `- Help develop and maintain services used on all campuses, like Student Degree Progress`,
            `- Technologies used include Ruby, Ruby on Rails`,
            `- Gain soft skills and mentorship from experienced engineers`,
          ]}
          timeFrame={"11-2022 -> Present"}
          image={UMNLogo}
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
    <div className="text-skin-base ">
      <div className="w-[500px] my-5 flex flex-row justify-center">
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
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button
          className="text-sm text-center cursor-pointer hover:text-skin-gray transition-all ease-in-out"
          onClick={handleOnClick}
        >
          More Info
        </button>
      </div>
      <div className={moreInfo ? "flex flex-col" : "hidden"}></div>
      <div className="flex justify-center flex-col mx-auto md:w-[500px] w-[300px] text-center">
        {desc.map((e, idx) => (
          <div key={idx} className={moreInfo ? "fade-in" : "fade-out"}>
            <h2>{e}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
