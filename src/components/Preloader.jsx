import React from "react";
import { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";
import "../preloader.css";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Nuansa</span>
        <span>Syafrie</span>
        <span>Rahardian</span>
      </div>
    </div>
  );
};

export default Preloader;
