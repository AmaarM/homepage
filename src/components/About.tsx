import Image from "next/image";
import ProfilePic from "../assets/amaar-pic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="text-skin-base w-screen flex flex-col justify-evenly my-10 ease-in duration-300 items-center"
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
      <div className="text-skin-base flex flex-row justify-between md:max-w-[350px] max-w-[300px]">
        <div>
          <ul className="list-disc">
            <li className="list-item">Computational Thinking</li>
            <li className="list-item">Programming with Objects</li>
            <li className="list-item">Discrete Mathmatics</li>
            <li className="list-item">Computer Organization/Architecture</li>
            <li className="list-item">Introduction to Data Structures</li>
          </ul>
        </div>
        <div>
          <p>More to come...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
