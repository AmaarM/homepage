import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText("amaarmo123@gmail.com");
    setTimeout(() => setCopied(false), 2000);
  };
  console.log(copied);
  return (
    <div className="fade-in animation-delay-1 text-skin-base my-7 mx-auto w-screen flex flex-row justify-evenly text-center z-0 h-[900px]">
      <div>
        <h1 className="md:text-5xl text-2xl text-skin-base">Amaar Mohamed</h1>
        <h1 className="md:text-2xl text-xl text-skin-neon mt-2">
          Aspiring Software Engineer
        </h1>
        <div className="flex flex-row justify-evenly">
          <div className="w-4 my-2 cursor-pointer">
            <Link href="https://www.linkedin.com/in/amaarmohamed/">
              <a target="_blank">
                <FaLinkedin />
              </a>
            </Link>
          </div>
          <div className="w-4 my-2 cursor-pointer">
            <Link href="https://github.com/AmaarM">
              <a target="_blank">
                <DiGithubBadge />
              </a>
            </Link>
          </div>
          <div className="w-4 my-2 cursor-pointer">
            <AiOutlineMail onClick={copyToClipboard} />
            {copied ? (
              <div className="w-[70px] text-center">
                <h1 className="fade-in-out text-sm text-skin-base bg-gray-900 rounded-lg my-2">
                  Copied to Clipboard
                </h1>
              </div>
            ) : (
              <div className="w-[70px] text-center fade-out"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
