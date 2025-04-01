import React from "react";
import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}

            className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => {
                    return(
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="max-w-sm h-auto w-full lg:w-1/4">
                                <img src={project.image}
                                     alt={project.title} 
                                     className="mb-6 rounded w-[150px] h-[150px] object-cover rounded"/>
                            </motion.div>
                            <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-3/4 max-w-xl">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-4 text-neutral-400">{project.description}</p>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;