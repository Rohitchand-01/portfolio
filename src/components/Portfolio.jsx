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

      <div className="space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32 px-5 md:px-0">
        {projectData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-lightgray rounded-lg aspect-video overflow-hidden w-full lg:w-[55%] hover:border-black transition-all duration-500 group shadow-sm hover:shadow-xl relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.description.substring(0, 100)}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    View Project →
                  </div>
                </div>
              </motion.a>
              <div className="flex flex-col w-full lg:w-[45%] justify-between">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-start justify-between gap-4 mb-3 md:mb-4">
                    <span className="text-sm md:text-base text-gray font-medium">0{index + 1}</span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-medium flex-1">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-300 inline-block"
                      >
                        {item.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray leading-relaxed mb-6 md:mb-8">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {item.tech && item.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="text-xs md:text-sm text-gray border border-lightgray px-2.5 md:px-3.5 py-1.5 md:py-2 rounded-full hover:border-black hover:text-black transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
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
