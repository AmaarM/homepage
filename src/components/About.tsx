import Image from "next/image";
import ProfilePic from "../assets/amaar-pic.jpg";
const About = () => {
  return (
    <div className="w-screen text-skin-base flex flex-row justify-evenly my-10 ease-in-out duration-300">
      <p className="w-[400px]">
        Hello, My name is Amaar Mohamed and I&#39;m an aspiring Software
        Engineer. I&#39;m currently studying Computer Science at the University
        of Minnesota
      </p>
      <div className="text-skin-base">
        <h1 className="text-5xl">Course Work</h1>
      </div>
    </div>
  );
};

export default About;
