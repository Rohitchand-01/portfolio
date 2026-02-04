import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";

const AboutMe = () => {
    return (
        <div
            id="about"
            className="w-full py-20 md:py-32 lg:py-40 bg-white relative"
        >
            <Wrapper>
                <Div className="mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                        About
                    </h2>
                    <div className="w-16 h-px bg-black"></div>
                </Div>

                <div className="max-w-3xl space-y-8 md:space-y-10">
                    <Div>
                        <p className="text-lg md:text-xl text-gray leading-relaxed">
                            I'm Rohit Chand, a fourth-year Computer Science student at IIIT Sonepat with a passion for building scalable, high-performance applications. Currently working as a Software Developer at CodeFeast, I specialize in full-stack development using modern technologies.
                        </p>
                    </Div>

                    <Div>
                        <p className="text-lg md:text-xl text-gray leading-relaxed">
                            My experience includes developing MERN stack applications, optimizing database schemas for 35% performance improvements, and building RESTful microservices handling 1,000+ daily interactions. I'm skilled in translating design prototypes into pixel-perfect interfaces and implementing CI/CD pipelines for efficient deployments.
                        </p>
                    </Div>

                    <Div>
                        <p className="text-lg md:text-xl text-gray leading-relaxed">
                            I believe in product thinking, clean architecture, and continuous learning. Beyond coding, I've led multiple clubs and events, coordinated project teams, and developed various self-initiated products including automation tools, AI applications, and marketplace platforms.
                        </p>
                    </Div>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutMe;
