import Image from "next/image";
import ProfilePic from "../assets/amaar-pic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="text-skin-base md:w-screen flex flex-col justify-evenly my-10 ease-in duration-300 items-center w-[400px] mx-auto"
    >
      <Image
        src={ProfilePic}
        alt="Amaar Smiling"
        width={"200px"}
        height={"200px"}
        className="rounded-full"
      />
      <p className="text-center text-xl my-10 leading-relaxed max-w-[300px]">
        Hello, My name is Amaar Mohamed and I&#39;m an aspiring Software
        Engineer. I&#39;m currently studying Computer Science at the University
        of Minnesota
      </p>
      <h1 className="md:text-5xl text-3xl my-10 items-center">Course Work</h1>
      <div className="text-skin-base flex flex-row justify-between md:max-w-[700px]">
        <div>
          <ul className="list-disc">
            <li className="list-item">
              Computational Thinking{" "}
              <span className="text-blue-400">in Python</span>
            </li>
            <li className="list-item">
              Programming with Objects{" "}
              <span className="text-green-400">in Java</span>
            </li>
            <li className="list-item">Discrete Mathmatics</li>
            <li className="list-item">
              Computer Architecture{" "}
              <span className="text-red-400">in C/Assembly</span>
            </li>
            <li className="list-item">
              Introduction to Data Structures{" "}
              <span className="text-green-400">in Java</span>
            </li>
          </ul>
        </div>
        <div>
          <li className="list-item">
            Advanced Programming Principles{" "}
            <span className="text-orange-400">in OCaml</span>
          </li>
          <p className="text-center">More to come...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
