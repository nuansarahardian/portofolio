import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/profilepic.png";
import circle from "../assets/circle.png";
import { HERO_CONTENT } from "../constants";
import bgporto from "../assets/bgporto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section id="home" className="sm:min-h-screen  sm:mb-10 mb-20">
      <img
        className="absolute z-[-1000] opacity-20 sm:min-h-screen object-cover"
        src={bgporto}
        alt=""
      />
      <div className="grid md:grid-cols-2 max-w-[1350px] mx-auto  md:mb-0   sm:pt-40 sm:mt-0 mt-32 overflow-hidden h-auto">
        <div className="max-w-[700px] place-content-center ml-10 md:ml-[120px] mr-8 ">
          <p className="md:text-5xl text-2xl mb-3 tracking-wide font-semibold justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-white ">
            Halo, Iam
            <br />
            <span>Nuansa Rahardian</span>
            <br />
            <TypeAnimation
              sequence={["Front-End Developer", 1000, "UI/UX Designer", 1000]}
              speed={50}
              repeat={Infinity}
              className="md:text-2xl text-xl font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-white"
            />
          </p>

          <span className="text-neutral-300 mr-6 font-medium text-sm">
            {HERO_CONTENT}
          </span>
          <br />
          <div className="flex sm:flex-row flex-col absolute mt-4">
            <button className="relative overflow-hidden rounded-[48px] px-20 py-6 my-4 flex mr-6 ">
              <span
                className="absolute inset-px z-10 flex items-center justify-center rounded-[40px]
                bg-black bg-gradient-to-t from-slate-900 text-neutral-300 hover:bg-neutral-700"
              >
                {" "}
                My Resume
              </span>

              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute
                before:inset-0 before:top-1/2 before:aspect-square before:animate-disco
                before:bg-gradient-conic before:from-slate-700 before:via-slate-500 before:to-slate-600"
              ></span>
            </button>
            <div className="flex flex-row sm:mb-0 ">
              <div className="w-[48px] h-[48px] place-items-center my-4 mr-2 rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]">
                <FontAwesomeIcon icon={faInstagram} size="xl" color={"white"} />
              </div>
              <div className="w-[48px] h-[48px] place-items-center my-4 mr-2 rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]">
                <FontAwesomeIcon icon={faLinkedin} size="xl" color={"white"} />
              </div>
              <div className="w-[48px] h-[48px] place-items-center my-4 mr-2 rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]">
                <FontAwesomeIcon icon={faGithub} size="xl" color={"white"} />
              </div>
              <div className="w-[48px] h-[48px] place-items-center my-4 mr-2 rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]">
                <FontAwesomeIcon icon={faWhatsapp} size="xl" color={"white"} />
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-12 ml-4  md:mt-0 sm:mt-12 mt-36 lg:ml-[100px] md:place-content-center z-[-10]">
          <img
            src={profilepic}
            className="w-[350px] lg:w-[450px] md:w-[350px] sm absolute z-[10]"
          />
          <img
            src={circle}
            className="z-[-1]  lg:mt-[90px] md:mt-[70px] md:ml-[37px] md:w-[275px] mt-[71px] ml-[36px] lg:ml-[46px] lg:w-[350px] w-[275px] animate-[spin_10s_linear_infinite] "
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
