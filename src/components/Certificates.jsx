import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alibaba from "../assets/alibaba.png";
import { CERTIFICATE } from "../constants";
import { motion } from "framer-motion";

const Certificates = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState(CERTIFICATE);
  const filters = ["Organization", "Course", "Work", "Committee"];

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilter(
      selectedFilter === selectedCategory ? null : selectedCategory
    );
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter) {
      const tempItems = CERTIFICATE.filter(
        (data) => data.category === selectedFilter
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(CERTIFICATE);
    }
  };

  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (img, title) => {
    let tempData = [img, title];
    setTempData([1, ...tempData]);
    return setModal(true);
  };

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
      <section id="certificates">
        <div className="max-w-[1200px] mx-auto sm:min-h-64 sm:pt-[10px] pt-0 pb-[10px]">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 ">
              Certifications
            </div>
            <div className="buttons-container flex justify-center mx-12 gap-3">
              {filters.map((category, index) => (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={`button ${
                    selectedFilter === category
                      ? " active inline-block mt-4 pl-3 pr-3 pt-2 pb-2  md:text-base text-xs rounded-xl border-[0.5px]  border-slate-100/30 backdrop-filter backdrop-blur-4xl  bg-white/30 text-gradient-to-r text-white hover:scale-[1.1] shadow-inner shadow-white/30 "
                      : " inline-block mt-4 pl-3 pr-3 pt-2 pb-2  md:text-base text-xs rounded-xl border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl  bg-gradient-to-br text-transparent bg-clip-text from-white  hover:scale-[1.1] shadow-inner shadow-white/30 "
                  }`}
                  key={`filters-${index}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="m-8 sm:m-8"
          >
            {filteredItems.length >= 3 ? (
              <Slider {...settings}>
                {filteredItems.map((data, index) => (
                  <div
                    key={index}
                    className=" card2 w-full rounded-[36px] sm:h-[480px] h-[400px] bg-gradient-to-b from-black/50 border-[0.5px] border-slate-300/50 backdrop-filter backdrop-blur-4xl flex sm:mb-2 mb-12"
                  >
                    <div className="p-4 flex flex-col">
                      <button onClick={() => getData(data.image, data.title)}>
                        <img
                          className="rounded-3xl overflow-hidden w-full object-cover sm:h-[240px]"
                          src={data.image}
                        />
                      </button>

                      <h2 className="font-semibold md:text-2xl text-xl mt-6 mb-2 md:mt-6 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white">
                        {data.title}
                      </h2>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-md text-sm ">
                        {data.company}
                      </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-sm text-sm ">
                        {data.year}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex justify-center space-x-4">
                {filteredItems.map((data, index) => (
                  <div
                    key={index}
                    className="w-[360px] rounded-[36px] sm:h-[480px] h-[400px] bg-gradient-to-b from-black/50 border-[0.5px] border-slate-300/50 backdrop-filter backdrop-blur-4xl flex"
                  >
                    <div className="p-4 flex flex-col">
                      <button onClick={() => getData(data.image, data.title)}>
                        <img
                          className="rounded-3xl overflow-hidden w-full object-cover sm:h-[240px] h-[120px]"
                          src={data.image}
                        />
                      </button>

                      <h2 className="font-semibold md:text-2xl text-xl mt-6 mb-2 md:mt-6 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white">
                        {data.title}
                      </h2>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-md text-sm ">
                        {data.company}
                      </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-sm text-sm ">
                        {data.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          hide={() => setModal(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Certificates;
