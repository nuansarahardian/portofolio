import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    // <div className='max-w-[1300]'>
    <div
      className="flex text-xl justify-between text-slate-700 items-center mx-auto px-16 h-24
        bg-gradient-to-t from-slate-900/5 border-b-[1px] border-slate-400 backdrop-filter backdrop-blur-xl"
    >
      <a className="font-semibold text-2xl text-white">Portofolio.</a>
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group px-6">
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className="text-white"
          >
            About Me
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300 ease-in-out"
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="experiences"
            smooth={true}
            offset={50}
            duration={500}
            className="text-white"
          >
            Experiences
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300 ease-in-out"
          ></span>
        </li>
        <li className="relative group">
          <Link
            to="projects"
            smooth={true}
            offset={50}
            duration={500}
            className="text-white"
          >
            Projects
          </Link>
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300 ease-in-out"
          ></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-svh w-full left-0 top-0   bg-slate-900/80 backdrop-filter backdrop-blur-lg z-10"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24 h-full text-white bg-slate-900/80 backdrop-filter backdrop-blur-lg z-10">
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="experiences" smooth={true} offset={50} duration={500}>
              Experiences
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
