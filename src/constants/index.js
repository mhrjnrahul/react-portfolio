import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I'm a Full-Stack Developer from Nepal who loves the intersection of great design and solid engineering.
 I craft responsive frontends with React & Tailwind, and build reliable backends with ASP.NET MVC & Web APIs.`;

export const ABOUT_TEXT = `I'm Rahul Maharjan, a Full-Stack Developer from Lalitpur, Nepal. I build 
responsive frontends with React & Tailwind, and I'm currently deepening 
my backend skills with ASP.NET MVC and Web APIs at Aster Innovations.

When I'm not coding, I'm usually exploring new design trends or picking up 
something new in the .NET ecosystem. Always building, always learning.`;

export const PROJECTS = [
  {
    title: "Ecommerce App",
    image: project5,
    description:
      "A modern eCommerce frontend built with React.js, featuring dynamic product listings, responsive design, and smooth user experience for browsing and managing cart items.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Tailwind CSS",
      "GSAP",
      "Framer-motion",
    ],
    demo: "https://ecommerce-app-seven-chi.vercel.app/",
  },
  {
    title: "Zentry-clone",
    image: project4,
    description:
      "A clone of the website Zentry, with awesome animations with GSAP.",
    technologies: ["HTML", "CSS", "React", "GSAP", "Tailwind CSS"],
    demo: "https://zentry-web-clone.vercel.app/",
  },
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
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer-motion"],
    demo: "https://react-portfolio-five-azure.vercel.app/",
  },
  {
    title: "To-Do List App",
    image: project3,
    description:
      "A simple to-do list application with features like task creation, deletion, and completion tracking.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
];
