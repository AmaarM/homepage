import Link from "next/link";
import { useEffect, useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { FcCollapse } from "react-icons/fc";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      setShowNav(window.scrollY > 400 ? true : false);
    });
  }, []);

  const handleCollapse = () => {
    const newCollapse = !showCollapse;
    setShowCollapse(newCollapse);
  };

  return (
    <nav className="fade-in animation-delay-3 flex-row justify-evenly w-screen align-middle sticky top-0 left-0 z-[60] md:flex">
      <div
        className={
          showNav
            ? "hidden"
            : "fade-in animation-delay-2 absolute left-0 top-0 cursor-pointer z-0 py-10 px-10"
        }
      ></div>
      <div
        className={
          showNav
            ? "flex-col my-5 justify-between w-screen mx-10 items-end fade-in animation-delay-4 hidden md:flex"
            : "flex-row my-5 justify-between space-x-7 hidden md:flex"
        }
      >
        <NavLinks />
      </div>
      <div
        className={
          !showNav
            ? "md:hidden flex flex-row space-x-3 mx-auto justify-center"
            : "hidden"
        }
      >
        <NavLinks />
      </div>
      <div className={showNav ? "animation-delay-4 fade-in" : "hidden"}>
        <div
          className={
            "md:hidden flex flex-col items-end text-skin-base justify-end"
          }
        >
          <div className="md:hidden flex items-end">
            <button
              className="outline-none mobile-menu-button right-2 top-2 fixed"
              onClick={handleCollapse}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className={showCollapse ? "flex flex-col" : "hidden"}>
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavLinks = () => {
  const [showScroll, setScroll] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      setScroll(window.scrollY > 400 ? true : false);
    });
  }, []);

  return (
    <>
      {showScroll ? (
        <Link href="#home">
          <FcCollapse className={"cursor-pointer"} />
        </Link>
      ) : (
        ""
      )}
      <Link href="#about">
        <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-lg">
          About
        </h4>
      </Link>
      <Link href="#projects">
        <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-lg">
          Projects
        </h4>
      </Link>
      <Link href="#experience">
        <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-lg">
          Experience
        </h4>
      </Link>
      <Link href="#contact">
        <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-lg">
          Contact
        </h4>
      </Link>
      {!showScroll ? (
        <Link href="https://github.com/AmaarM/homepage">
          <a target="_blank">
            <div className="text-skin-base cursor-pointer hover:opacity-80 text-lg flex flex-row justify-center align-middle">
              Source
              <DiGithubBadge />
            </div>
          </a>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
