import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly w-screen align-middle mb-10">
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
