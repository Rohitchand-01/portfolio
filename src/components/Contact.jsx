import React from "react";
import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full py-20 md:py-32 lg:py-40 bg-white relative"
        >
            <Wrapper>
                <div className="max-w-4xl mx-auto">
                    <Div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                            Contact
                        </h2>
                        <div className="w-16 h-px bg-black mx-auto mb-6"></div>
                        <p className="text-base md:text-lg text-gray leading-relaxed max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and collaborate on interesting projects. If you're looking for a dedicated developer who is eager to contribute and grow, feel free to reach out!
                        </p>
                    </Div>

                    <Form />
                </div>
            </Wrapper>
        </div>
    );
};

export default Contact;
