import React, { useState } from "react";
import { projects, filters } from "../data";
import Div from "./Div";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const filterHandler = (tag) => {
    setSelectedTag(tag);
    const filteredProjects =
      tag === "all" ? projects : projects.filter((p) => p.tags.includes(tag));
    setProjectData(filteredProjects);
  };

  return (
    <section id="work" className="mt-20 md:mt-32 relative" aria-label="Projects Portfolio">
      <Div className="mb-12 md:mb-16 px-5 md:px-0">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
          Projects
        </h2>
        <div className="w-16 h-px bg-black mb-4 md:mb-6"></div>
        <p className="text-sm md:text-base lg:text-lg text-gray leading-relaxed max-w-3xl">
          A collection of innovative web solutions built with modern technologies, 
          focusing on performance, user experience, and scalable architecture.
        </p>
      </Div>

      <Div className="flex justify-start md:justify-center gap-3 md:gap-4 mb-12 md:mb-16 lg:mb-20 overflow-x-auto pb-2 scrollbar-hide px-5 md:px-0">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`text-sm md:text-base px-5 py-2.5 whitespace-nowrap transition-all duration-300 ${
              selectedTag === item.id
                ? "text-black border-b-2 border-black font-medium"
                : "text-gray hover:text-black border-b-2 border-transparent"
            }`}
            onClick={() => filterHandler(item.id)}
          >
            {item.name}
          </button>
        ))}
      </Div>

      <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28 px-5 md:px-0">
        {projectData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 xl:gap-20 items-start ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-lightgray rounded-lg aspect-video overflow-hidden w-full lg:w-[55%] hover:border-gray transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.description.substring(0, 100)}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="flex flex-col w-full lg:w-[45%]">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-medium mb-4 md:mb-6">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity duration-300"
                    >
                      {item.name}
                    </a>
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray leading-relaxed mb-4 md:mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-2.5 mt-auto">
                  {item.tech && item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm text-gray border border-lightgray px-2.5 md:px-3.5 py-1.5 md:py-2 rounded-full hover:border-black hover:text-black transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
