import React, { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState(null); // State to hold a single selected filter
  const [filteredItems, setFilteredItems] = useState(PROJECTS);
  const filters = ["Web Development", "Mobile Development", "UI/UX Design"];

  const handleFilterButtonClick = (selectedCategory) => {
    // Toggle the filter: if it's already selected, set it to null (deselect), otherwise set it as the selected filter
    setSelectedFilter(
      selectedFilter === selectedCategory ? null : selectedCategory
    );
  };
  const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  useEffect(() => {
    filterItems();
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter) {
      const tempItems = PROJECTS.filter(
        (project) => project.category === selectedFilter
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(PROJECTS);
    }
  };
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <section id="projects">
      <div className="flex flex-col max-w-[1150px] mx-auto min-h-[100vh] sm:pt-[20px] pt-0">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-br from-white p-2">
            Projects
          </div>
          <div className="buttons-container flex justify-center mx-4 gap-3">
            {filters.map((category, index) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`button ${
                  selectedFilter === category
                    ? " active inline-block mt-4 pl-3 pr-3 pt-2 pb-2  md:text-base text-xs rounded-xl border-[0.5px]  border-slate-100/30 backdrop-filter backdrop-blur-4xl  bg-white/30 text-gradient-to-r text-white hover:scale-[1.1] shadow-inner shadow-white/30"
                    : " inline-block mt-4 pl-3 pr-3 pt-2 pb-2  md:text-base text-xs rounded-xl border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800/10 hover:scale-[1.1] shadow-inner shadow-white/30"
                }`}
                key={`filters-${index}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1350px] mx-auto mb-8 md:mb-12 md:mt-8 mt-6 ml-2 mr-2 md:gap-y-6  lg:gap-y-8 gap-y-6">
          {filteredItems.map((project, index) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="lg:h-[full] md:h-full h-fit m-auto w-[95%]  sm:rounded-[40px] rounded-[36px]  -inset-1  absolute bg-gradient-to-br from-indigo-500  blur opacity-0 group-hover:opacity-50 group-hover:scale-105 transition duration-300"></div>
              <div
                key={`PROJECTS-${index}`}
                className=" card  lg:h-[full]  md:h-full h-fit m-auto w-[95%]  sm:rounded-[40px] rounded-[36px] bg-gradient-to-b from-black/30 from-60% to-white/5 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-5xl drop-shadow-3xl flex place-content-center"
              >
                <div className="flex justify-between flex-col ">
                  <div className="p-4 sm:p-5 flex flex-col ">
                    <div className="rounded-3xl overflow-hidden  md:h-48 lg:h-64 h-full ">
                      <LazyLoadImage
                        className="object-cover hover:scale-105"
                        src={project.image}
                        sizes="(max-width: 800px) 100vw,50vw"
                        alt={project.title}
                      />
                    </div>

                    <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mt-6 mb-2 md:mt-6 md:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white">
                      {project.title}
                    </h2>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 lg:text-base md:text-sm text-xs font-reguler">
                      {project.description}
                    </span>
                    <div>
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="inline-block mt-4 pl-3 pr-3 pt-2 pb-2 mr-3 lg:text-base text-sm rounded-xl border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-600 hover:scale-105 hover:bg-slate-300/10"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative flex place-content-end py-4 pr-2 ">
                    <button
                      onClick={() => newTab(project.link)}
                      className="lg:w-52 md:w-48 flex pl-3 pr-3 pt-2 pb-2 mr-3 text-xl rounded-2xl border-[0.5px] border-slate-100/50 bg-white/5 hover:scale-105 hover:bg-slate-300/10"
                    >
                      <span className="backdrop-filter backdrop-blur-4xl text-transparent m-auto bg-clip-text bg-gradient-to-br from-white to-neutral-600 text-base lg:text-lg">
                        Link to Project
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="size-6 fill-current text-neutral-500 ml-2 mt-[2px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
