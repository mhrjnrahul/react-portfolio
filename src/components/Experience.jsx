import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Aster Innovations",
    period: "Oct 2025 – Present",
    location: "Nepal",
    description:
      "Working as a software development intern, contributing to real-world projects and gaining hands-on experience in a professional environment. Building skills in both frontend and backend development within a collaborative team setting.",
    tags: ["ASP.NET", "React", "EF Core", "C#", "SQL"],
    color: "cyan",
  },
];

const education = [   
  {
    degree: "B.Sc. CSIT",
    school: "Patan Multiple Campus",
    period: "2022 – Present",
    location: "Lalitpur, Nepal",
    description:
      "Bachelor of Science in Computer Science and Information Technology. Studying core CS fundamentals including algorithms, data structures, software engineering, and web development. Applying academic knowledge through hands-on projects.",
    tags: ["Computer Science", "Data Structures", "Software Engineering", "Web Dev"],
    color: "purple",
  },
  {
    degree: "+2 Science (High School)",
    school: "Bluebird College",
    period: "2020 – 2022",
    location: "Nepal",
    description:
      "Completed higher secondary education with a focus on Science. Developed a foundational understanding of mathematics and computer science that laid the groundwork for pursuing a CS degree.",
    tags: ["Science", "Mathematics", "Computer Basics"],
    color: "emerald",
  },
  {
    degree: "School Education (SEE)",
    school: "New Sumnima English School",
    period: "2006 – 2020",
    location: "Nepal",
    description:
      "Completed schooling from early education through the Secondary Education Examination (SEE). Developed core academic skills and an early interest in technology and computers.",
    tags: ["Schooling", "SEE"],
    color: "amber",
  },
];

const colorMap = {
  cyan:    { dot: "bg-cyan-400",    badge: "bg-cyan-400/10    text-cyan-400    border-cyan-400/20",    line: "group-hover:border-cyan-400/30"    },
  purple:  { dot: "bg-purple-400",  badge: "bg-purple-400/10  text-purple-400  border-purple-400/20",  line: "group-hover:border-purple-400/30"  },
  emerald: { dot: "bg-emerald-400", badge: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20", line: "group-hover:border-emerald-400/30" },
  amber:   { dot: "bg-amber-400",   badge: "bg-amber-400/10   text-amber-400   border-amber-400/20",   line: "group-hover:border-amber-400/30"   },
};

function Card({ item, index }) {
  const [open, setOpen] = useState(false);
  const c = colorMap[item.color];

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative pl-8"
    >
      {/* dot */}
      <div className={`absolute left-0 top-5 w-3 h-3 rounded-full ${c.dot} ring-4 ring-neutral-950 z-10`} />

      <div
        onClick={() => setOpen((p) => !p)}
        className={`group cursor-pointer bg-neutral-900/60 border border-neutral-800 ${c.line} rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm`}
      >
        {/* top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`text-xs font-medium border rounded-full px-3 py-0.5 ${c.badge}`}>
                {item.period}
              </span>
              <span className="text-xs text-neutral-600">{item.location}</span>
            </div>
            <h3 className="text-white font-semibold text-base leading-snug">
              {item.role ?? item.degree}
            </h3>
            <p className="text-neutral-500 text-sm mt-0.5">{item.company ?? item.school}</p>
          </div>
          <span className="flex-shrink-0 text-neutral-600 group-hover:text-neutral-400 transition-colors mt-1">
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </div>

        {/* expandable */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-neutral-400 text-sm leading-relaxed mt-4 mb-4">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-neutral-800 text-neutral-400 border border-neutral-700 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SectionLabel({ icon, label }) {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-5"
    >
      <div className="bg-neutral-800 p-2 rounded-lg">{icon}</div>
      <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-neutral-800" />
    </motion.div>
  );
}

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Experience &{" "}
        <span className="text-neutral-500">Education</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {/* Work */}
        <SectionLabel
          icon={<Briefcase className="w-4 h-4 text-cyan-400" />}
          label="Work Experience"
        />
        <div className="relative border-l border-neutral-800 ml-1.5 mb-14 space-y-5 pb-2">
          {experiences.map((exp, i) => (
            <Card key={i} item={exp} index={i} />
          ))}
        </div>

        {/* Education */}
        <SectionLabel
          icon={<GraduationCap className="w-4 h-4 text-emerald-400" />}
          label="Education"
        />
        <div className="relative border-l border-neutral-800 ml-1.5 space-y-5 pb-2">
          {education.map((edu, i) => (
            <Card key={i} item={edu} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;