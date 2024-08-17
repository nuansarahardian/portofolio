import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { sectionIds } from "../constants/index";
import Headroom from "react-headroom";
import { motion } from "framer-motion";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };
  //to determine active section
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      //
      determineActiveSection();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <Headroom>
      <div className="flex justify-center items-center w-full z-[999]">
        <div
          className="navbar sm:top-6  top-0 z-[999] w-[100%] flex text-xl justify-between text-slate-700 items-center sm:px-20 md:px-44 px-12 h-[80px]
        bg-gradient-to-t from-indigo-100/10 border-b-[1px] sm:border-b-[0.5px] rounded-none border-blue-200/50 backdrop-filter backdrop-blur-xl drop-shadow-3xl"
        >
          <a className="font-semibold text-2xl text-white">Portofolio.</a>
          <ul className="hidden lg:flex gap-2 z-10 cursor-pointer font-semibold text-base ">
            {sectionIds.map((section, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(section)}
                className="relative group px-4 my-auto flex active:text-blue-400 text-white"
              >
                <Link
                  to="/"
                  // // smooth={true}
                  // offset={50}
                  // duration={500}
                  className={
                    activeLink === section
                      ? "active text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400"
                      : ""
                  }
                >
                  {section}
                </Link>
                <span className="absolute left-0 top-[-8px] p-5 w-full h-full  border-[1.5px] bg-gradient-to-t from-slate-500/20 border-neutral-400/50 rounded-2xl transform opacity-0 group-hover:opacity-100 transition-transform duration-1000 ease-in-out"></span>
              </li>
            ))}
          </ul>

          <div onClick={toggleNav} className="lg:hidden z-30">
            {nav ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={30} className="text-white" />
            )}
          </div>

          <div
            className={
              nav
                ? "text-center z-[-10000] fixed h-120 pb-10 w-full left-0 top-0  bg-gray-900/95 drop-shadow-xl backdrop-filter backdrop-blur-2xl border-b-[1px] border-white "
                : "fixed left-[-100%]"
            }
          >
            <ul className="font-semibold text-2xl space-y-6 mt-24 h-full text-white z-10">
              {sectionIds.map((section, index) => (
                <li
                  key={index}
                  onClick={() => {
                    scrollToSection(section);
                    closeNav();
                  }}
                >
                  <Link
                    to="/"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={
                      activeLink === section
                        ? "active text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500"
                        : ""
                    }
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Headroom>
  );
}

export default Navbar;
