import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className={`z-0 p-0 m-0`}
        >
            <span id={idName}>&nbsp;</span>
            <Component />
        </motion.section>
    )
}
export default SectionWrapper;