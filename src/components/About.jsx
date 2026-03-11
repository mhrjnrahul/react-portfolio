import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const highlights = [
  { label: "Clean Code", desc: "Readable, maintainable structure" },
  { label: "UI Focused", desc: "Pixel-perfect, responsive designs" },
  { label: "Fast Learner", desc: "Currently mastering ASP.NET MVC" },
];

function About() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* ── Image ── */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 blur-xl scale-105" />
            <img
              src={aboutImg}
              alt="About Rahul"
              className="relative w-full max-w-sm rounded-3xl border border-neutral-700 object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        {/* ── Text + highlights ── */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex flex-col gap-6"
        >
          <p className="text-neutral-400 leading-relaxed text-sm lg:text-base whitespace-pre-line">
            {ABOUT_TEXT}
          </p>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-600 transition-colors duration-300"
              >
                
                <p className="text-white text-sm font-semibold mb-1">
                  {h.label}
                </p>
                <p className="text-neutral-500 text-xs">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
