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
                            I am Rohit Chand, a Software Engineer based in Delhi, India. I build scalable web applications and backend systems using React.js, Next.js, Node.js, and modern databases—strong in modular architectures, performance tuning, and real-time data workflows. I work across the stack on API design, system integration, and production-ready features in fast-paced environments.
                        </p>
                    </Div>

                    <Div>
                        <p className="text-base md:text-lg lg:text-xl text-gray leading-relaxed">
                            Currently at Xelron AI, I design and implement AI evaluation systems, Docker-based infrastructure, and Python testing frameworks. Previously I led frontend work at CodeFeast (React, Next.js, dashboards, optimistic updates) and shipped marketing and product UIs at QriosX (SSR, Tailwind, Figma-to-code). I thrive on design handoff, pixel-perfect layouts, and reliable REST integrations.
                        </p>
                    </Div>

                    <Div>
                        <p className="text-base md:text-lg lg:text-xl text-gray leading-relaxed">
                            I am pursuing a B.Tech in Computer Science at IIIT Sonepat (7.1 CGPA). Outside of work I coordinate technical clubs and events, and I enjoy building products—from resource managers and lead tools to AI-powered cover letters and generative experiences.
                        </p>
                    </Div>
                </div>
            </Wrapper>
        </section>
    );
};

export default AboutMe;
