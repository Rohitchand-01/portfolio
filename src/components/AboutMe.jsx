import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="w-full py-20 md:py-32 lg:py-40 bg-white relative"
            aria-label="About Rohit Chand"
        >
            <Wrapper>
                <Div className="mb-12 md:mb-16 lg:mb-20 px-5 md:px-0">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                        About
                    </h2>
                    <div className="w-16 h-px bg-black"></div>
                </Div>

                <div className="max-w-3xl space-y-6 md:space-y-8 lg:space-y-10 px-5 md:px-0">
                    <Div>
                        <p className="text-base md:text-lg lg:text-xl text-gray leading-relaxed">
                            I am Rohit Chand, a Software Developer specializing in full-stack development with a focus on building scalable, high-performance applications. Currently serving as a Software Developer at CodeFeast, I combine technical expertise with practical industry experience to deliver robust solutions.
                        </p>
                    </Div>

                    <Div>
                        <p className="text-base md:text-lg lg:text-xl text-gray leading-relaxed">
                            My expertise encompasses the MERN stack, microservices architecture, and performance optimization. I have successfully optimized database schemas resulting in 35% performance improvements and developed RESTful microservices capable of handling 1,000+ daily user interactions with high reliability. I excel at translating design prototypes into production-ready interfaces and implementing automated CI/CD pipelines for streamlined deployments.
                        </p>
                    </Div>

                    <Div>
                        <p className="text-base md:text-lg lg:text-xl text-gray leading-relaxed">
                            I am committed to product thinking, clean architecture principles, and continuous professional development. My portfolio includes leadership roles in technical clubs, project coordination, and the development of innovative products spanning automation tools, AI-powered applications, and marketplace platforms. I approach each project with a focus on delivering measurable business value through technical excellence.
                        </p>
                    </Div>
                </div>
            </Wrapper>
        </section>
    );
};

export default AboutMe;
