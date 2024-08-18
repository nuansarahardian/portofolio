import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profilepic from "../assets/profilepic.png";
import circle from "../assets/circle.png";
import { HERO_CONTENT } from "../constants";
import bgporto from "../assets/bgporto.png";
import { motion } from "framer-motion";

function Hero() {
  const [text] = useTypewriter({
    words: ["Front-End Engineer", "UI/UX Designer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <section id="home" className="sm:min-h-screen sm:mb-10 mb-20 relative">
      <img
        className="absolute z-[-1000] sm:opacity-20 opacity-60 sm:min-h-screen object-cover"
        src={bgporto}
        alt=""
      />
      <div className="grid md:grid-cols-2 max-w-[1350px] mx-auto sm:pt-12  min-h-fit">
        <div className="max-w-[700px] place-content-center ml-10 md:ml-[100px] mr-8 order-2 mt-6">
          {/* Animasi teks dengan motion */}
          <div className="text-center md:text-left">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              <p className="lg:text-3xl text-lg sm:mb-2 mb:0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white">
                Hello, It's me!
              </p>
              <p className="lg:text-[56px] text-4xl font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-white">
                Nuansa Rahardian
              </p>
            </motion.div>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 sm:mt-6 mt-4 md:text-3xl lg:text-[30px] text-xl font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-white"
            >
              <span>{text}</span>
              <Cursor cursorColor="white" />
            </motion.div>
          </div>

          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
          >
            <p className="text-neutral-300 sm:mr-6 font-normal text-sm md:text-md text-center md:text-left">
              {HERO_CONTENT}
            </p>

            <div className="flex flex-row sm:mb-0 md:justify-normal justify-center mt-6">
              <button
                onClick={() =>
                  newTab(
                    "https://drive.google.com/drive/folders/1BtHeP9AGw41TQE0fLACT27HjFnRzKKzX"
                  )
                }
                className="card lg:w-[180px] md:w-48  flex pl-3 pr-3 pt-2 pb-2 mr-3 text-xl rounded-2xl border-[0.5px] border-slate-100/50 bg-gradient-to-br backdrop-filter backdrop-blur-lg from-gray-800/90 hover:scale-105 hover:bg-slate-300/10"
              >
                <span className="backdrop-filter backdrop-blur-4xl text-transparent m-auto bg-clip-text bg-gradient-to-br from-white to-neutral-600 text-base lg:text-lg">
                  Download CV
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="md:ml-0 md:mt-12 lg:ml-[100px] md:place-content-center z-[-10] md:order-2 order-1 flex justify-center md:mb-32"
        >
          <img
            src={profilepic}
            className="w-[350px] lg:w-[450px] md:w-[350px] sm absolute z-[10]"
            alt="Profile"
          />
          <img
            src={circle}
            className="z-[-1] lg:mt-[90px] md:mt-[58px] md:ml-[-2px] md:w-[300px] mt-[71px] ml-[-6px] lg:ml-[-6px] lg:w-[350px] w-[275px] animate-[spin_10s_linear_infinite]"
            alt="Circle Decoration"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
