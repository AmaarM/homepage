import type { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(() => import("../components/layouts/main"));
const DynamicSection = dynamic(() => import("../components/layouts/section"));
const DynamicExperience = dynamic(() => import("../components/Experience"));
const DynamicHero = dynamic(() => import("../components/Hero"));
const DynamicAbout = dynamic(() => import("../components/About"));
const DynamicProjects = dynamic(() => import("../components/Projects"));
const DynamicContact = dynamic(() => import("../components/Contact"));

const Home: NextPage = () => {
  return (
    <>
      <DynamicLayout>
        <DynamicHero />
        <DynamicSection>
          <DynamicAbout />
        </DynamicSection>
        <DynamicSection>
          <DynamicProjects />
        </DynamicSection>
        <DynamicSection>
          <DynamicExperience />
        </DynamicSection>
        <DynamicSection>
          <DynamicContact />
        </DynamicSection>
      </DynamicLayout>
    </>
  );
};

export default Home;
