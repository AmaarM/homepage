import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";
import Stars from "../Stars";
import { Canvas } from "@react-three/fiber";

type children = {
  children?: React.ReactNode;
};

const Main: React.FC<children> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Amaar&#39;s Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=.75" />
        <meta name="author" content="Amaar Mohamed" />
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <div id="top" className="absolute w-screen h-screen top-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      <Navbar />
      <main className="h-full mx-auto flex flex-col md:w-screen space-y-[475px]">
        {children}
      </main>
      <Footer notSticky={false} />
    </>
  );
};

export default Main;
