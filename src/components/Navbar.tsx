import Link from "next/link";
import Globe from "../components/Globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { FcCollapse } from "react-icons/fc";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      setShowNav(window.scrollY > 500 ? true : false);
      setShowGlobe(window.innerWidth > 600 ? true : false);
    });
  }, []);

  return (
    <div className="fade-in animation-delay-3 flex flex-row justify-evenly w-screen align-middle sticky top-0 left-0 z-[60]">
      <div
        className={
          showNav
            ? "hidden"
            : "fade-in animation-delay-2 absolute left-0 top-0 cursor-pointer z-0"
        }
      ></div>

      <Link href="#top">
        <FcCollapse
          className={
            showNav
              ? "fade-in animation-delay-4 top-10 left-5 absolute text-xl cursor-pointer"
              : "hidden"
          }
        />
      </Link>
      <div
        className={
          showNav
            ? "flex flex-col my-5 justify-between w-screen min-w-[350px] items-end mx-10 fade-in animation-delay-4"
            : "flex flex-row my-5 justify-between max-w-[500px] min-w-[350px]"
        }
      >
        <Link href="#about">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-xl">
            About
          </h4>
        </Link>
        <Link href="#projects">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-xl">
            Projects
          </h4>
        </Link>
        <Link href="#experience">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-xl">
            Experience
          </h4>
        </Link>
        <Link href="https://github.com/AmaarM">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-xl">
            Source
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
