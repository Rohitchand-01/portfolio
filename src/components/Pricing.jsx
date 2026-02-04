import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { motion } from "framer-motion";
import { pricingPlans } from "../data";

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="w-full py-20 md:py-32 lg:py-40 bg-offwhite relative"
            aria-label="Pricing Plans"
        >
            <Wrapper>
                <Div className="mb-12 md:mb-16 lg:mb-20 px-5 md:px-0">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black mb-4">
                        Pricing Plans
                    </h2>
                    <div className="w-16 h-px bg-black"></div>
                </Div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-5 md:px-0">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`bg-white border border-lightgray p-6 md:p-8 lg:p-10 rounded-lg hover:border-gray transition-all duration-300 ${
                                plan.featured ? "border-black border-2" : ""
                            }`}
                        >
                            {plan.featured && (
                                <div className="text-xs uppercase tracking-wider text-black font-medium mb-4">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-black mb-2">
                                {plan.name}
                            </h3>
                            <div className="mb-4 md:mb-6">
                                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-black">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-sm md:text-base text-gray ml-2">
                                        /{plan.period}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm md:text-base text-gray mb-6 md:mb-8 leading-relaxed">
                                {plan.description}
                            </p>
                            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="text-xs md:text-sm lg:text-base text-gray flex items-start gap-2 md:gap-3">
                                        <span className="text-black mt-1 flex-shrink-0">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.a
                                href={plan.link || "#contact"}
                                className={`block w-full text-center py-2.5 md:py-3 lg:py-4 rounded text-sm md:text-base font-medium transition-colors duration-300 ${
                                    plan.featured
                                        ? "bg-black text-white hover:bg-darkgray"
                                        : "bg-white text-black border border-black hover:bg-black hover:text-white"
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {plan.buttonText || "Get Started"}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Pricing;
