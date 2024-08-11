import React from "react";
import alibaba from "../assets/alibaba.png";
import { CERTIFICATE } from "../constants";
import Slider from "react-slick";

const Certificate = () => {
  return (
    <>
      <div className="flex flex-col max-w-[1350px] mx-auto">
        <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 ">
          Certificate
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1350px] mx-auto mb-8 md:mb-12 md:mt-8 mt-6 ml-6 mr-6 gap-10">
          {/* card
          <div className="m-auto w-full mb-8 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl flex place-content-center">
            <div className="p-5 flex flex-col">
              <img
                className="rounded-xl overflow-hidden w-full object-fit"
                src={alibaba}
              />
              <h2 className="font-semibold md:text-3xl text-2xl mt-6 mb-2 md:mt-6 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white">
                Certified Developer
              </h2>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-lg text-sm ">
                Alibaba Cloud
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-sm text-sm ">
                17 Juni 2024-2025
              </span>
            </div>
          </div> */}
          <Slider>
            {CERTIFICATE.map((data, key) => (
              <div
                key={key}
                className="m-auto w-full rounded-3xl h-[480px] bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl flex place-content-center"
              >
                <div className="p-5 flex flex-col">
                  <img
                    className="rounded-xl overflow-hidden w-full object-cover h-[240px]"
                    src={data.image}
                  />
                  <h2 className="font-semibold md:text-2xl text-xl mt-6 mb-2 md:mt-6 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white">
                    {data.title}
                  </h2>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-lg text-sm ">
                    {data.company}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-sm text-sm ">
                    {data.year}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Certificate;
