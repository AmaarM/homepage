import Link from "next/link";
import Globe from "../components/Globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AsciiEffect } from "three-stdlib";

const Navbar = () => {
  return (
    <div className="fade-in animation-delay-3 flex flex-row justify-evenly w-screen align-middle sticky top-0 left-0 z-[60]">
      <Link href="#top">
        <div className="absolute left-0 top-0 cursor-pointer z-0">
          <Canvas>
            <OrbitControls />
            <Globe />
          </Canvas>
        </div>
      </Link>
      <div className="flex flex-row my-5 justify-between max-w-[500px] min-w-[350px]">
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
