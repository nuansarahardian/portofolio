import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HERO_CONTENT } from "../constants";
import bgporto from "../assets/bgporto.png";
import { motion } from "framer-motion";
import Lanyard from "./Lanyard/Lanyard";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: delay },
  },
});

const newTab = (url) => {
  window.open(url);
};

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Tech Enthusiast",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute inset-0 z-[-1000] w-full h-full object-cover sm:opacity-20 opacity-60"
        src={bgporto}
        alt="Background"
      />

      {/* === [BARU] WADAH LANYARD KHUSUS MOBILE === */}
      {/* Blok ini hanya akan aktif di tampilan mobile ('md:hidden'). */}
      {/* Diposisikan absolut di atas agar tidak mengganggu alur dokumen. */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-[50vh] flex justify-center items-start">
        <Lanyard position={[0, 0, 15]} />
      </div>

      <div className="grid md:grid-cols-2 max-w-[1350px] mx-auto min-h-screen">
        {/* === KOLOM KIRI (TEKS) === */}
        {/* [MODIFIKASI] Menambahkan padding-top HANYA untuk mobile ('pt-[45vh] md:pt-0'). */}
        <div className="relative z-10 flex flex-col justify-center p-4 md:p-8 pt-[20vh] md:pt-0">
          <div className="text-center md:text-left">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              <p className="lg:text-3xl text-lg sm:mb-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white">
                Hello, It's me!
              </p>
              <p className="lg:text-[56px] text-4xl font-medium leading-none text-white">
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
            className="text-center md:text-left"
          >
            <p className="text-neutral-300 mt-4 font-normal text-sm md:text-md">
              {HERO_CONTENT}
            </p>
            <div className="flex flex-row md:justify-start justify-center mt-6">
              <button
                onClick={() =>
                  newTab(
                    "https://drive.google.com/drive/folders/1BtHeP9AGw41TQE0fLACT27HjFnRzKKzX"
                  )
                }
                className="card relative group lg:w-[180px] md:w-48 sm:h-12 h-12 place-content-center justify-center items-center flex pl-3 pr-3 sm:pr-0 sm:pl-0 pt-2 pb-2 mr-3 text-xl rounded-2xl border-[0.5px] border-slate-100/40 bg-gradient-to-br backdrop-filter backdrop-blur-lg from-gray-800/90 hover:scale-105 hover:bg-slate-300/10"
              >
                <div className="sm:rounded-[36px] rounded-[28px] -inset-1 absolute bg-gradient-to-br from-indigo-500 blur-md backdrop-blur-md sm:opacity-10 opacity-5 group-hover:opacity-70 group-hover:scale-105 transition duration-300"></div>
                <div className="card sm:rounded-[36px] rounded-[28px] bg-gradient-to-b from-black/50 from-60% to-white border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-5xl drop-shadow-3xl flex place-content-center "></div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200/20 text-sm lg:text-lg">
                  Download CV
                </p>
              </button>
            </div>
          </motion.div>
        </div>

        {/* === KOLOM KANAN (LANYARD DESKTOP) === */}
        {/* [TIDAK DIUBAH] Blok ini dibiarkan sama persis seperti kode asli Anda. */}
        <div className="relative hidden md:block overflow-visible w-screen left-1/2 right-1/2 -mx-[50vw]">
          <div className="relative h-[100vh] ">
            <Lanyard position={[0, 0, 15]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
