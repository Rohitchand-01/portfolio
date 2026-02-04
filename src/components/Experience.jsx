import React from "react";
import { experiences } from "../data";
import Div from "./Div";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="experience" className="w-full py-20 md:py-32 lg:py-40 bg-white relative" aria-label="Work Experience">
            <Wrapper>
                <Div className="mb-12 md:mb-16 lg:mb-20 px-5 md:px-0">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                        Experience
                    </h2>
                    <div className="w-16 h-px bg-black"></div>
                </Div>

                <div className="max-w-4xl mr-auto space-y-10 md:space-y-12 lg:space-y-16 px-5 md:px-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative pl-6 md:pl-8 lg:pl-10 border-l-2 border-lightgray"
                        >
                            <div className="absolute -left-[7px] md:-left-[9px] top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-black border-2 border-white z-10"></div>
                            <div className="mb-4 md:mb-6">
                                <div className="text-base md:text-lg lg:text-xl text-black font-medium mb-1">
                                    {exp.company}
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black mb-2">
                                    {exp.role}
                                </h3>
                                <div className="text-xs md:text-sm lg:text-base text-gray">
                                    {exp.period} · {exp.location}
                                </div>
                            </div>
                            <ul className="space-y-2 md:space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-sm md:text-base lg:text-lg text-gray leading-relaxed flex items-start gap-3">
                                        <span className="text-black mt-2 flex-shrink-0">·</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Experience;
