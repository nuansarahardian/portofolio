import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/profilepic.png";
import circle from "../assets/circle.png";
import { HERO_CONTENT } from "../constants";

function Hero() {
  return (
    <div className="grid md:grid-cols-2 max-w-[1350px] mx-auto mb-8 md:mb-32 md:mt-12 mt-14 overflow-hidden">
      <div className="max-w-[700px] place-content-center ml-10 md:ml-[120px] mr-8 ">
        <p className="md:text-5xl text-2xl mb-5 tracking-wide font-bold justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-white ">
          Halo, Iam
          <br />
          <span>Nuansa Rahardian</span>
          <br />
          <TypeAnimation
            sequence={["Front-End Developer", 1000, "UI/UX Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="md:text-2xl text-xl font-medium italic"
          />
        </p>

        <span className="text-neutral-300 mr-6 font-medium">
          {HERO_CONTENT}
        </span>
        <br />
        <button className="relative overflow-hidden rounded-lg px-20 py-6 mt-4">
          <span
            className="absolute inset-px z-10 flex items-center justify-center rounded-lg
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
      </div>
      <div className="md:ml-12 ml-7 lg:ml-[100px] md:place-content-center z-[-10]">
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
  );
}
export default Hero;
