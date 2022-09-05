import type { NextPage } from "next";
import Layout from "../components/layouts/main";
import Section from "../components/layouts/section";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Section>
          <About />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Layout>
    </>
  );
};

export default Home;
