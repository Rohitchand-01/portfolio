import React from "react";
import { motion } from "framer-motion";

const Div = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Div;
