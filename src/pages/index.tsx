import type { NextPage } from "next";
import Layout from "../components/layouts/main";
import Section from "../components/layouts/section";
import About from "../components/About";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Section>
          <Hero /> 
        </Section>
        <Section>
          <About />
        </Section>
        <h1 className="text-2xl text-skin-base text-center">Course Work</h1>
        <div className="w-[800px] my-5 flex justify-center mx-auto text-skin-base">
          <div>
            <h1 className="text-xl">Course Work</h1>
            <ul>
              <li>Intro to Programming - Metropolitan State University</li>
              <li>Programming Principles - Metropolitan State University</li>
              <li>
                Intro to Data Structures and Algorithms - Metropolitan State
                University
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-2xl text-skin-base text-center">Experience</h1>
        <div className="w-[800px] my-5 flex justify-center mx-auto text-skin-base"></div>
      </Layout>
    </>
  );
};

export default Home;
