import React from "react";
import { achievements } from "../data";
import NumInc from "./NumInc";
import Div from "./Div";

const Achievements = () => {
    return (
        <div className="mt-20 md:mt-32">
            <Div className="mb-12 md:mb-16">
                <h3 className="text-3xl md:text-5xl font-display font-medium text-black mb-4">
                    Highlights
                </h3>
                <div className="w-16 h-px bg-black"></div>
            </Div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                {achievements.map((item) => (
                    <Div
                        key={item.id}
                        className="flex flex-col items-center text-center space-y-3"
                    >
                        <div className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
                            <span className="inline-flex items-baseline">
                                <NumInc num={item.year} />
                                <span>{item.id === 4 ? 'K+' : '+'}</span>
                            </span>
                        </div>
                        <div
                            className="text-xs md:text-sm text-gray leading-relaxed uppercase tracking-wider"
                            dangerouslySetInnerHTML={{
                                __html: item.description,
                            }}
                        />
                    </Div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
