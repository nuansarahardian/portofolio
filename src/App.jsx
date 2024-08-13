import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import bgporto from "./assets/bgporto.png";
import Home from "./pages/Home";

export default function App() {
  //to track the active link and scroll state
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />}></Route>
        </Routes>
      </Router>

      
    </>
  );
}
