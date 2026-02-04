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
    <div id="work" className="mt-20 md:mt-32 relative">
      <Div className="mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
          Projects
        </h2>
        <div className="w-16 h-px bg-black mb-6"></div>
        <p className="text-base md:text-lg text-gray leading-relaxed max-w-3xl">
          A collection of innovative web solutions built with modern technologies, 
          focusing on performance, user experience, and scalable architecture.
        </p>
      </Div>

      <Div className="flex justify-start md:justify-center gap-3 mb-12 md:mb-16 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`text-sm md:text-base px-4 py-2 whitespace-nowrap transition-all duration-300 ${
              selectedTag === item.id
                ? "text-black border-b-2 border-black"
                : "text-gray hover:text-black border-b-2 border-transparent"
            }`}
            onClick={() => filterHandler(item.id)}
          >
            {item.name}
          </button>
        ))}
      </Div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projectData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-lightgray rounded-lg aspect-video overflow-hidden mb-6 hover:border-gray transition-colors duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </a>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl text-black font-medium">
                  {item.name}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray hover:text-black transition-colors duration-300"
                >
                  View →
                </a>
              </div>
              <p className="text-base md:text-lg text-gray leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tech && item.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs md:text-sm text-gray border border-lightgray px-2.5 py-1 rounded hover:border-gray transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
