import type { NextPage } from "next";
import Layout from "../components/layouts/main";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="w-screen text-skin-base flex justify-center my-10 ease-in-out duration-300">
          <p>
            Hello, My name is Amaar Mohamed and I&#39;m an aspiring Software
            Engineer. I&#39;m currently studying Computer Science at the
            University of Minnesota
          </p>
        </div>
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
