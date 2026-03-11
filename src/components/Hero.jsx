import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/RahulProfile.jpg";
import { motion } from "framer-motion";
import { ArrowDownToLine, Layers } from "lucide-react";

const fadeLeft = (delay) => ({
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:pb-24 lg:mb-12">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0 pt-12 lg:pt-0">
        {/* ── Left: Text ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Name */}
          <motion.h1
            variants={fadeLeft(0.1)}
            initial="hidden"
            whileInView="visible"
            className="text-5xl lg:text-6xl font-thin tracking-tight text-white leading-tight mb-4"
          >
            Rahul
            <br />
            <span className="font-semibold">Maharjan</span>
          </motion.h1>

          {/* Role */}
          <motion.span
            variants={fadeLeft(0.25)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent mb-6"
          >
            React & ASP.NET Developer
          </motion.span>

          {/* Bio */}
          <motion.p
            variants={fadeLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            className="max-w-lg text-neutral-400 leading-relaxed mb-8 text-sm lg:text-base"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeLeft(0.55)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/Rahul_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-neutral-950 font-semibold text-sm rounded-full hover:bg-neutral-200 transition-colors"
            >
              <ArrowDownToLine className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-neutral-600 text-neutral-300 text-sm rounded-full hover:border-neutral-400 hover:text-white transition-colors"
            >
              <Layers className="w-4 h-4" />
              See My Work
            </a>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 blur-2xl scale-110" />
            <img
              src={profilePic}
              alt="Rahul Maharjan"
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-3xl border border-neutral-700 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
