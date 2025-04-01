import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate Front-End Developer focused on building  
                            high-performance web applications using React.js, Tailwind CSS, Framer-motion and GSAP. I 
                            turn ideas into interactive, pixel-perfect designs that enhance user experience.`;

export const ABOUT_TEXT = `I'm Rahul Maharjan, a dedicated Front-End Developer with a strong passion 
for crafting elegant, responsive, and user-friendly web applications.

Beyond coding, I love exploring the latest web technologies, optimizing UI/UX design, 
and pushing the boundaries of creativity. I thrive on problem-solving and continuous learning to
stay ahead in the fast evolving tech landscape. Whether it’s building sleek landing pages or complex web applications,
my goal is to create engaging and impactful digital solutions.

When I'm not coding, you'll find me exploring new design trends. Let's collaborate!`;


export const PROJECTS = [
  {
    title: "Google Keep clone",
    image: project1,
    description:
      "An application for managing tasks and projects, with features such as task creation and tracking.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    demo: "https://google-keep-clone-murex.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    demo: "https://react-portfolio-five-azure.vercel.app/",
  },
  {
    title: "To-Do List App",
    image: project3,
    description:
      "A simple to-do list application with features like task creation, deletion, and completion tracking.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    title: "Zentry-clone",
    image: project4,
    description:
      "A clone of the website Zentry, with awesome animations with GSAP.",
    technologies: ["HTML", "CSS", "React", "GSAP", "Tailwind CSS"],
    demo: "https://zentry-web-clone.vercel.app/",
  },
];

