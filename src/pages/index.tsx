import type { NextPage } from "next";
import Layout from "../components/layouts/main"

const Home: NextPage = () => {
  return (
    <>
      <Layout>
      <div className="w-screen text-skin-base flex justify-center my-10 ease-in-out duration-300">
        <p>Hello, My name is Amaar Mohamed and I&#39;m an aspiring Software Engineer. I&#39;m currently studying Computer Science at the University of Minnesota</p>
      </div>
      </Layout>
    </>
  );
};

export default Home;
