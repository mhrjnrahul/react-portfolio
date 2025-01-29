import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";
import React, {useState, useEffect} from "react";

function Navbar() {
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
             <motion.div 
             className="flex flex-shrink-0 items-center">
                <p className="mx-2 w-10 text-3xl">RM</p>
            </motion.div> 
            <div className="flex items-center gap-4 text-2xl m-8 justify-center">
                <a href="https://github.com/mhrjnrahul" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.facebook.com/profile.php?id=100007692438373" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com/rahul.mhrjn/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
        </nav>
    );
}

export default Navbar;