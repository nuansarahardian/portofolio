import React from "react";
import Certificates from "../components/Certificates";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import bgporto from "../assets/bgporto.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Certificates />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
