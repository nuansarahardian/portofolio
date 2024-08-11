import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alibaba from "../assets/alibaba.png";
import { CERTIFICATE } from "../constants";

const Certificates = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[1350px] mx-auto ">
        <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 ">
          Certificates
        </div>
        <div className="m-8 sm:m-8">
          {/* card */}
          <Slider {...settings}>
            {CERTIFICATE.map((data, index) => (
              <div
                key={index}
                className=" w-full  rounded-3xl h-[480px] bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl flex"
              >
                <div className="p-5 flex flex-col">
                  <img
                    className="rounded-xl overflow-hidden w-full object-cover sm:h-[240px]"
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

export default Certificates;
