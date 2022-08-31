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
      </Layout>
    </>
  );
};

export default Home;
