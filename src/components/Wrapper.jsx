import React from "react";

const Wrapper = ({ children }) => {
    return (
        <div className="max-w-[1400px] px-5 md:px-10 lg:px-16 mx-auto">
            {children}
        </div>
    );
};

export default Wrapper;
