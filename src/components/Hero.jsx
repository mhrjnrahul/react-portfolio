import React from "react";
import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/RahulProfile.jpg";
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visbile: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
    }
}
})

function Hero() {
    return(
        <div className="overflow-hidden border-b border-neutral-900 pb-4 lg:mb-36">
           <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        whileInView="visbile"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Rahul Maharjan</motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        whileInView="visbile"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
                        text-4xl tracking-tight text-transparent">Front End Developer</motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        whileInView="visbile"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
                        </motion.p>

                        <motion.div 
                        variants={container(1.5)}
                        initial="hidden"
                        whileInView="visbile"
                        className="flex flex-col sm:flex-row gap-4 mt-4">
                        
                        <a 
                            href="/Rahul_Resume.pdf" 
                            target="_blank"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
                            Download CV
                        </a>

                        <a 
                            href="#projects" 
                            className="px-6 py-2 border border-gray-400 text-white rounded-md shadow-md hover:bg-gray-800 transition">
                            See My Work
                        </a>
                    </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={ {x: 100, opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ duration: 1, delay: 1.2}}
                        className="mt-12 w-full max-w-xs h-auto rounded-2xl" src={profilePic} alt="Rahul Maharjan"></motion.img>
                    </div>
                </div>
           </div> 
        </div>
    );
}

export default Hero;;