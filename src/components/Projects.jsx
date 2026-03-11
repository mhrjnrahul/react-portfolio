import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const bentoConfig = [
  { colSpan: "md:col-span-2", rowSpan: "md:row-span-2", large: true  },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-2", large: true  },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false },
];

function ProjectCard({ project, config, index }) {
  const [hovered, setHovered] = useState(false);
  const { large } = config;
  const hasDemo = !!project.demo;

  const handleClick = () => {
    if (hasDemo) window.open(project.demo, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className={`
        ${config.colSpan} ${config.rowSpan}
        relative rounded-2xl overflow-hidden
        border border-neutral-800
        transition-all duration-300
        bg-neutral-950
        ${hasDemo ? "cursor-pointer hover:border-neutral-500 hover:shadow-lg hover:shadow-black/40" : "cursor-default hover:border-neutral-700"}
      `}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${hovered ? "opacity-30 scale-105" : "opacity-45 scale-100"}`}
        />
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
      </div>

      {/*  DEFAULT  */}
      <AnimatePresence initial={false}>
        {!hovered && (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative h-full flex flex-col justify-end p-5"
          >
            <h3 className={`text-white font-semibold leading-tight mb-2 ${large ? "text-xl" : "text-base"}`}>
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, large ? 5 : 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-neutral-800/80 text-neutral-400 border border-neutral-700/60 rounded-full px-2.5 py-0.5"
                >
                  {tech}
                </span>
              ))}
              {!large && project.technologies.length > 3 && (
                <span className="text-xs text-neutral-600 py-0.5 px-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*  HOVER  */}
      <AnimatePresence initial={false}>
        {hovered && (
          <motion.div
            key="hovered"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative h-full flex flex-col justify-end p-5"
          >
            <h3 className={`text-white font-semibold leading-tight mb-2 ${large ? "text-xl" : "text-base"}`}>
              {project.title}
            </h3>

            <p className={`text-neutral-300 leading-relaxed mb-4 ${large ? "text-sm line-clamp-3" : "text-xs line-clamp-2"}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, large ? 6 : 4).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-neutral-700/80 text-neutral-300 border border-neutral-600/60 rounded-full px-2.5 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* only shown if demo exists */}
            {hasDemo && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Projects() {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        My <span className="text-neutral-500">Projects</span>
      </motion.h2>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            config={bentoConfig[index] ?? { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;