import React from "react";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import laravel from "../assets/laravel.png";
import { SKILL } from "../constants";
import { TOOLS } from "../constants";

const Skills = () => {
  return (
    <section id="about" className="sm:pt-32">
      <div className="w-[75%] flex flex-col justify-center item m-auto">
        <div className="md:text-5xl text-4xl font-bold  flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-700">
          About Me
        </div>
        <p className="mt-6 text-center font-normal text-base justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-500 place-content-center mb-12">
          I am a highly motivated undergraduate <b>Informatics</b> student at
          <b> Universitas Jenderal Soedirman, class of 2021,</b> specializing in
          <b> UI/UX Design </b>and <b>Front-end Web Development</b>. With a
          strong focus on creating intuitive and engaging user experiences, I
          also have experience in Mobile development using Flutter.
          <b> My leadership and communication skills </b> have been honed
          through diverse project management and organizational roles. I am
          proficient in both <b>Windows and Linux</b> operating systems,
          equipping me to tackle a wide range of challenges in{" "}
          <b>development and design</b>.
        </p>
        <div className="text-white"></div>
      </div>
      <div className=" flex flex-col justify-center mx-auto max-w-[1200px] h-auto mb-8  sm:mt-10 mt-0">
        <div className="font-medium md:text-3xl text-xl  flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-700">
          Frameworks & Languages
        </div>
        <div className="flex justify-center md:mt-2 w-[100%] flex-wrap pl-10 pr-10 pt-4">
          {SKILL.map((skill, index) => (
            <div
              key={index}
              className="md:min-w-[100px] md:min-h-[100px] min-w-[80px] min-h-[80px] m-2   rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]"
            >
              <img className="md:h-[80px] h-[60px] my-auto" src={skill.image} />
            </div>
          ))}
        </div>
        <div className="font-medium md:text-3xl text-xl md:mt-16 mt-12 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-700">
          Tools
        </div>
        <div className="flex justify-center md:mt-2 w-[100%] flex-wrap pl-10 pr-10 pt-4">
          {TOOLS.map((tools, index) => (
            <div
              key={index}
              className="md:min-w-[100px] md:min-h-[100px] min-w-[80px] min-h-[80px] m-2   rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]"
            >
              <img className="md:h-[80px] h-[60px] my-auto" src={tools.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
