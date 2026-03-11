import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiDotnet, SiNuget, SiSharp } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const skills = [
  // Frontend
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />,     name: "HTML5",       category: "Frontend" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />,     name: "CSS3",        category: "Frontend" },
  { icon: <FaJsSquare className="text-yellow-400 text-5xl" />,  name: "JavaScript",  category: "Frontend" },
  { icon: <SiTailwindcss className="text-sky-400 text-5xl" />,  name: "Tailwind CSS",category: "Frontend" },
  { icon: <FaBootstrap className="text-purple-500 text-5xl" />, name: "Bootstrap",   category: "Frontend" },
  { icon: <RiReactjsLine className="text-cyan-400 text-5xl" />, name: "React",       category: "Frontend" },
  // Backend
  { icon: <SiSharp className="text-purple-400 text-5xl" />,     name: "C#",          category: "Backend"  },
  { icon: <SiDotnet className="text-indigo-400 text-5xl" />,    name: "ASP.NET",     category: "Backend"  },
  // NuGet icon used as EF Core stand-in (same ecosystem)
  { icon: <SiNuget className="text-blue-400 text-5xl" />,       name: "EF Core",     category: "Backend"  },
  { icon: <FaDatabase className="text-red-400 text-5xl" />,     name: "SSMS / SQL",  category: "Backend"  },
  // Tools
  { icon: <FaGitAlt className="text-orange-400 text-5xl" />,    name: "Git",         category: "Tools"    },
  { icon: <SiVercel className="text-white text-5xl" />,         name: "Vercel",      category: "Tools"    },
];

const categoryColors = {
  Frontend: "text-cyan-400   border-cyan-400/20   bg-cyan-400/5",
  Backend:  "text-purple-400 border-purple-400/20 bg-purple-400/5",
  Tools:    "text-orange-400 border-orange-400/20 bg-orange-400/5",
};

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {Object.entries(categoryColors).map(([cat, cls]) => (
          <span key={cat} className={`text-xs font-medium border rounded-full px-4 py-1 ${cls}`}>
            {cat}
          </span>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-end justify-center gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + (index % 4) * 0.8)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 group-hover:border-neutral-600 group-hover:bg-neutral-800/50 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;