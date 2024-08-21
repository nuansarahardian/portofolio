import React from "react";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import laravel from "../assets/laravel.png";
import education from "../assets/education.png";
import { SKILL } from "../constants";
import { TOOLS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <section id="about" className="sm:pt-24 h-full">
      <div className="md:w-[90%] lg:w-[56%] w-[90%] flex flex-col justify-center item m-auto ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:text-5xl mb-8 text-4xl font-bold  flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white "
        >
          About Me
        </motion.div>

        <div className="grid md:grid-cols-9 grid-cols-2 gap-x-6 justify-center gap-5">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="hover:bg-gradient-to-tr hover:from-indigo-600/20 font-normal  md:col-span-6 col-span-2 card content drop-shadow-md h-fit my-auto p-[28px]  rounded-[32px]    sm:mr-0 bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl "
          >
            <p className="text-transparent leading-relaxed bg-clip-text bg-gradient-to-br from-white lg:text-[18px] md:text-[16px] text-sm text-justify">
              I'm passionate about <b>UI/UX design</b>, focused on creating
              intuitive and visually appealing products that meet user needs
              through detailed research. I also enjoy{" "}
              <b>Front-End Web Development</b>, using React JS and Framer Motion
              to build dynamic, interactive apps with smooth animations and
              responsive designs.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className=" hover:bg-gradient-to-tr hover:from-indigo-600/20 md:col-span-3 col-span-1 card content drop-shadow-md h-full p-[24px]  rounded-[32px]   sm:mr-0 bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl"
          >
            <div className=" flex flex-col justify-center m-auto h-full text-transparent bg-clip-text bg-gradient-to-br from-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-white flex flex-col justify-center m-auto">
                <FontAwesomeIcon
                  className="text-5xl text-gray-200/75 mb-2"
                  icon={faLocationDot}
                />
                <div className="text-center">
                  <p className="font-normal  md:text-[18px] text-sm ">
                    Purbalingga
                  </p>
                  <p className="font-bold md:text-[18px] text-sm">
                    Central Java
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="hover:bg-gradient-to-tr hover:from-indigo-600/20 md:col-span-4 card col-span-1 content drop-shadow-md h-full p-[24px]  rounded-[32px]   sm:mr-0 bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <img src={education} className="w-12  opacity-65" alt="" />

              <div className="text-center text-transparent bg-clip-text bg-gradient-to-br from-white ">
                <p className="font-normal md:text-[18px] text-sm">
                  Jenderal Soedirman University
                </p>
                <p className="font-bold md:text-[18px] text-sm">
                  S1 Informatics, class of 2021
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className=" hover:bg-gradient-to-tr hover:from-indigo-600/20 md:col-span-5 col-span-2 top card content drop-shadow-md h-fit p-[28px]  rounded-[32px]  mt-[0px]  sm:mr-0 bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl "
          >
            <p className="text-transparent leading-relaxed bg-clip-text bg-gradient-to-br from-white md:text-[18px] text-sm text-justify">
              My experience leading projects and organizations has sharpened my
              skills in
              <b> public speaking, leadership, problem-solving, and teamwork</b>
              . I've learned to communicate effectively, guide teams,
              collaborate well, and tackle challenges with strategic solutions.
            </p>
          </motion.div>
        </div>

        <div className="text-white"></div>
      </div>
      <div className=" flex flex-col justify-center mx-auto max-w-[1200px] h-auto mb-8  sm:mt-20 mt-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-medium md:text-3xl text-xl pb-1 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white"
        >
          Frameworks & Languages
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center md:mt-1 w-[100%] flex-wrap pl-10 pr-10 pt-4"
        >
          {SKILL.map((skill, index) => (
            <motion.div
              variants={iconVariants(1.5 + index + 1)}
              initial="initial"
              animate="animate"
              key={index}
              className=" shadow-inner shadow-white/30 md:min-w-[100px] md:min-h-[100px] min-w-[80px] min-h-[80px] m-2   rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:bg-indigo-700/30  hover:scale-[1.05]"
            >
              <img className="md:h-[80px] h-[60px] my-auto" src={skill.image} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-medium md:text-3xl text-xl md:mt-8 mt-6 sm:mb-0 mb-3 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-700"
        >
          Tools
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:mt-1 w-[100%] flex-wrap pl-10 pr-10 sm:pt-2 mb-2"
        >
          {TOOLS.map((tools, index) => (
            <motion.div
              variants={iconVariants(1 + index + 1)}
              initial="initial"
              animate="animate"
              key={index}
              className=" shadow-inner shadow-white/30 md:min-w-[100px] md:min-h-[100px] min-w-[80px] min-h-[80px] m-2   rounded-3xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center  hover:bg-indigo-700/30  hover:scale-[1.05]"
            >
              <img className="md:h-[80px] h-[60px] my-auto" src={tools.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
