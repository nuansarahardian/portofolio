import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";

export default function App() {
  return (
    <>
      <div className="overflow-x-hidden w-[100%] relative max-w-[screen]">
        <div className="bg-shape1 overflow-x-hidden w-[200px] h-[200px] bg-[#2691F5] rounded-[100%]  sm:blur-[120px] blur-[100px]"></div>

        <div className="bg-shape2 overflow-x-hidden w-[200px] h-[200px] bg-[#2691F5] rounded-[100%] absolute z-[-200] blur-[100px] sm:w-[600px] sm:h-[400px]  sm:blur-[270px]"></div>

        {/* <div className="overflow-x-hidden w-[200px] h-[200px] bg-[#2679F5] rounded-[100%] absolute z-[-100] top-[5%] left-[-20%] blur-[100px] sm:w-[800px] sm:h-[500px] sm:left-[-30%] sm:top-[-40%] sm:blur-[270px]"></div> */}

        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]"></div> */}
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Certificate />
        </div>
      </div>
    </>
  );
}
