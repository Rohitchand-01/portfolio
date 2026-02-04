import React from "react";
import { motion } from "framer-motion";

const SkillIcon = ({ path }) => {
    return (
        <motion.div
            className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
            <img src={path} className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" alt="Skill" />
        </motion.div>
    );
};

export default SkillIcon;
