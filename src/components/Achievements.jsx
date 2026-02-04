import React from "react";
import { achievements } from "../data";
import NumInc from "./NumInc";
import Div from "./Div";

const Achievements = () => {
    return (
        <div className="mt-16 md:mt-20 lg:mt-32">
            <Div className="mb-10 md:mb-12 lg:mb-16 px-5 md:px-0">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-black mb-4">
                    Highlights
                </h3>
                <div className="w-16 h-px bg-black"></div>
            </Div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-5 md:px-0">
                {achievements.map((item) => (
                    <Div
                        key={item.id}
                        className="flex flex-col items-center text-center space-y-2 md:space-y-3"
                    >
                        <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-black">
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
