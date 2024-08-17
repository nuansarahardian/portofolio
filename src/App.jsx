import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import bgporto from "./assets/bgporto.png";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

export default function App() {
  //to track the active link and scroll state

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nuansa Rahardian's Portofolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      ;
      <div className="overflow-x-hidden w-[100%] relative max-w-[screen]">
        <div className="bg-shape1 overflow-x-hidden w-[600px] h-[400px] bg-[#5d00ff] rounded-[100%]  sm:blur-[1200px] blur-[800px]"></div>

        <div className="bg-shape2 overflow-x-hidden w-[600px] h-[400px] bg-[#5d00ff] rounded-[100%] absolute z-[-200] blur-[250px] sm:w-[600px] sm:h-[400px]  sm:blur-[270px]"></div>

        <div className="bg-shape3 overflow-x-hidden w-[400px] h-[300px] bg-[#5100ff] rounded-[100%] absolute z-[-200] blur-[200px] sm:w-[800px] sm:h-[700px]  sm:blur-[1200px] opacity-60"></div>
        <div className="bg-shape4 overflow-x-hidden w-[400px] h-[300px] bg-[#5100ff] rounded-[100%] absolute z-[-200] blur-[200px] sm:w-[700px] sm:h-[700px]  sm:blur-[1400px] opacity-65"></div>
        <div className="bg-shape5 overflow-x-hidden w-[700px] h-[800px] bg-[#5900ff] rounded-[100%] absolute z-[-200] blur-[1000px] sm:w-[600px] sm:h-[700px]  sm:blur-[1500px] opacity-65"></div>
        <div className="bg-shape6 overflow-x-hidden w-[800px] h-[600px] bg-[#5d00ff] rounded-[100%] absolute z-[-200] blur-[700px] sm:w-[700px] sm:h-[900px]  sm:blur-[1000px] opacity-75"></div>

        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
