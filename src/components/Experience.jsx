import React from "react";
import { experiences } from "../data";
import Div from "./Div";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div id="experience" className="w-full py-20 md:py-32 lg:py-40 bg-white relative">
            <Wrapper>
                <Div className="mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                        Experience
                    </h2>
                    <div className="w-16 h-px bg-black"></div>
                </Div>

                <div className="max-w-4xl space-y-12 md:space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative pl-8 md:pl-10 border-l-2 border-lightgray"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white z-10"></div>
                            <div className="mb-6">
                                <div className="text-lg md:text-xl text-black font-medium mb-1">
                                    {exp.company}
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
                                    {exp.role}
                                </h3>
                                <div className="text-sm md:text-base text-gray">
                                    {exp.period} · {exp.location}
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-base md:text-lg text-gray leading-relaxed flex items-start gap-3">
                                        <span className="text-black mt-2 flex-shrink-0">·</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Experience;
