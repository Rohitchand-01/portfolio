import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full py-20 md:py-32 lg:py-40 bg-white relative"
            aria-label="Contact Information"
        >
            <Wrapper>
                <div className="max-w-3xl mx-auto text-center px-5 md:px-0">
                    <Div className="mb-10 md:mb-12 lg:mb-16">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                            Contact
                        </h2>
                        <div className="w-16 h-px bg-black mx-auto mb-4 md:mb-6"></div>
                        <p className="text-sm md:text-base lg:text-lg text-gray leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-12">
                            I'm always excited to take on new challenges and collaborate on interesting projects. If you're looking for a dedicated developer who is eager to contribute and grow, let's schedule a meeting!
                        </p>
                    </Div>

                    <Div>
                        <motion.a
                            href="https://cal.com/rohit-chand-6jpzv5/60-min-meeting"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-black text-white px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-5 rounded text-sm md:text-base lg:text-lg font-medium hover:bg-darkgray transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule a Meeting
                        </motion.a>
                    </Div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Contact;
