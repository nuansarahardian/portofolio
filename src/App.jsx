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
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { HashLoader } from "react-spinners";
import { MoonLoader } from "react-spinners";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="App ">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <MoonLoader
              color="#efefef"
              loading={loading}
              size={50}
              aria-label="HashLoader"
              data-testid="loader"
              className="flex"
            />
          </div>
        ) : (
          <div className="overflow-x-hidden w-[100%] relative max-w-[screen]">
            <div className="bg-shape2 overflow-x-hidden w-[150px] h-[250px] bg-[#5d00ff] rounded-full backdrop-blur-3xl  sm:backdrop-blur-none absolute z-[-20000] blur-[140px] sm:w-[600px] sm:h-[400px]  sm:blur-[270px]"></div>
            <div className="bg-shape6  overflow-x-hidden w-[250px] h-[250px] bg-[#5d00ff] rounded-full backdrop-blur-3xl  sm:backdrop-blur-none absolute z-[-20000] blur-[170px] sm:w-[600px] sm:h-[400px]  sm:blur-[770px]"></div>
            <div className="bg-shape3  overflow-x-hidden w-[200px] h-[250px] bg-[#5d00ff] rounded-full backdrop-blur-3xl  sm:backdrop-blur-none absolute z-[-20000] blur-[170px] sm:w-[600px] sm:h-[400px]  sm:blur-[770px]"></div>

            <Helmet>
              <meta charSet="utf-8" />
              <title>Nuansa Rahardian's Portofolio</title>
              {/* <link rel="canonical" href="http://mysite.com/example" /> */}
              <meta
                name="description"
                content="Nuansa Rahardian's Personal Portofolio"
              />
            </Helmet>

            <Router>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </Router>
          </div>
        )}{" "}
      </div>
    </>
  );
}
