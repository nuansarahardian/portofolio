import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-24 flex justify-center mt-10 backdrop-filter backdrop-blur-5xl drop-shadow-3xl bg-gradient-to-b from-slate-900/5">
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-neutral-950 via-white to-neutral-950 flex justify-center">
        <div className="text-white mt-9 sm:text-base text-xs">
          ©2024 Nuansa Syafrie Rahardian. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
