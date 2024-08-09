import React from "react";
import { PROJECTS } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Projects = () => {
  return (
    <div className="flex flex-col max-w-[1150px] mx-auto">
      <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 ">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1350px] mx-auto mb-8 md:mb-12 md:mt-8 mt-6 ml-6 mr-6">
        {/* card */}
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="md:h-[600px] m-auto w-[95%] mb-8 rounded-[48px]  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl flex place-content-center"
          >
            <div className="p-6 flex flex-col">
              <LazyLoadImage
                className="rounded-3xl overflow-hidden  md:h-72 h-40 object-cover"
                src={project.image}
                sizes="(max-width: 800px) 100vw,50vw"
                alt=""
              />

              <h2 className="font-semibold md:text-3xl text-2xl mt-6 mb-2 md:mt-6 md:mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white">
                {project.title}
              </h2>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 md:text-l text-sm ">
                {project.description}
              </span>
              <div>
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="inline-block mt-4 pl-3 pr-3 pt-2 pb-2 mr-3 md:text-base text-sm rounded-xl   border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800 hover:scale-[1.1]"
                  >
                    {tech}
                  </div>
                ))}
                <div className="w-48 flex mt-8 pl-3 pr-3 pt-2 pb-2 mr-3 text-xl rounded-2xl  border-[0.5px] border-slate-100/50 bg-white/5">
                  <span className="backdrop-filter backdrop-blur-4xl text-transparent m-auto bg-clip-text bg-gradient-to-br from-white to-neutral-800">
                    Link to Project{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-6 fill-current text-neutral-600 ml-2 mt-[2px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>{" "}
              </div>
            </div>
          </div>
        ))}

        <div className=" h-[600px] m-auto w-[95%] mb-8 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl flex place-content-center"></div>
      </div>
    </div>
  );
};

export default Projects;
