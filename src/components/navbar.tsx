import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around w-screen align-top items-center">
      <Link href="/">
        <h1 className="text-2xl text-skin-base cursor-pointer">Welcome</h1>
      </Link>
      <div className="flex flex-row my-5 justify-between w-[300px]">
        <Link href="/projects">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-2xl">
            Projects
          </h4>
        </Link>
        <Link href="/experience">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-2xl">
            Experience
          </h4>
        </Link>
        <Link href="https://github.com/AmaarM">
          <h4 className="text-skin-base cursor-pointer hover:opacity-80 text-2xl">
            Source
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
