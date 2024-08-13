import React from "react";
import Certificates from "../components/Certificates";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import bgporto from "../assets/bgporto.png";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden w-[100%] relative max-w-[screen]">
        <div className="bg-shape1 overflow-x-hidden w-[600px] h-[400px] bg-[#5d00ff] rounded-[100%]  sm:blur-[1200px] blur-[800px]"></div>

        <div className="bg-shape2 overflow-x-hidden w-[600px] h-[400px] bg-[#5d00ff] rounded-[100%] absolute z-[-200] blur-[250px] sm:w-[600px] sm:h-[400px]  sm:blur-[270px]"></div>

        <div className="bg-shape3 overflow-x-hidden w-[400px] h-[300px] bg-[#5100ff] rounded-[100%] absolute z-[-200] blur-[200px] sm:w-[800px] sm:h-[700px]  sm:blur-[1200px] opacity-80"></div>
        <div className="bg-shape4 overflow-x-hidden w-[400px] h-[300px] bg-[#5100ff] rounded-[100%] absolute z-[-200] blur-[200px] sm:w-[700px] sm:h-[700px]  sm:blur-[1400px] opacity-85"></div>
        <div className="bg-shape5 overflow-x-hidden w-[700px] h-[800px] bg-[#5900ff] rounded-[100%] absolute z-[-200] blur-[1000px] sm:w-[600px] sm:h-[700px]  sm:blur-[1500px] opacity-85"></div>
        <div className="bg-shape6 overflow-x-hidden w-[800px] h-[600px] bg-[#5d00ff] rounded-[100%] absolute z-[-200] blur-[700px] sm:w-[700px] sm:h-[900px]  sm:blur-[1000px] opacity-85"></div>

        <Hero />
        <Skills />
        <Experiences />
        <Projects />
        <Certificates />
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
