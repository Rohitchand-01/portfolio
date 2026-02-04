import React from "react";
import Div from "./Div";

const Service = ({ num, title, desc, data }) => {
    return (
        <Div className="border-b border-lightgray pb-8 md:pb-12">
            <div className="flex items-start gap-4 mb-4">
                <span className="text-sm text-gray font-medium">{num}</span>
                <h4 className="text-2xl md:text-3xl font-medium text-black">
                    {title}
                </h4>
            </div>
            <div className="ml-8 mb-6">
                <p className="text-base md:text-lg text-gray leading-relaxed mb-6">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {data.map((item, index) => (
                        <span
                            key={index}
                            className="text-xs md:text-sm text-gray border border-lightgray px-3 py-1.5 rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </Div>
    );
};

export default Service;
