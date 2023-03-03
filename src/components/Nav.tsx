import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <nav className="w-full h-[7vh] flex items-center justify-center fixed">
      <div className="bg-black/80 px-4 py-2 mt-4 rounded-[25px] flex items-center gap-6 lg:gap-10">
        <a href="" className="text-white bg-white/30 p-2 rounded-[50%]">
          <FaLinkedin />
        </a>
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer text-white"
        >
          <i className="fa-solid fa-house" />
        </Link>
        <Link
          to="studies"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer text-white"
        >
          <i className="fa-solid fa-user" />
        </Link>
        <Link
          to="works"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer text-white"
        >
          <i className="fa-solid fa-briefcase" />
        </Link>
        <button className="text-white bg-white/30 p-2 rounded-[50%]">CV</button>
      </div>
    </nav>
  );
};
