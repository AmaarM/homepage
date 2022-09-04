import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineMail } from "react-icons/ai";

let copied = false;
const copyToClipboard = () => {
  copied = true;
  navigator.clipboard.writeText("amaarmo123@gmail.com");
  setTimeout(() => (copied = false), 10000);
};

const Hero = () => {
  return (
      <div className="fade-in animation-delay-1 text-skin-base my-7 mx-auto w-screen flex flex-row justify-evenly text-center z-0 h-[900px]">
        <div>
          <h1 className="text-5xl text-skin-base">Amaar Mohamed</h1>
          <h1 className="text-2xl text-skin-neon mt-2">
            Aspiring Software Engineer
          </h1>
          <div className="flex flex-row justify-evenly">
            <div className="w-4 my-2 cursor-pointer">
              <Link href="https://www.linkedin.com/in/amaarmohamed/">
                <FaLinkedin />
              </Link>
            </div>
            <div className="w-4 my-2 cursor-pointer">
              <Link href="https://github.com/AmaarM">
                <DiGithubBadge />
              </Link>
            </div>
            <div className="w-4 my-2 cursor-pointer">
              <AiOutlineMail onClick={copyToClipboard} />
            </div>
            {copied ? (
              <div className="w-[20px]">
                <h1 className="text-sm text-black">Copied to Clipboard</h1>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
  );
};

export default Hero;
