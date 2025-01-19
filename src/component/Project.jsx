import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "MyVideo - Video Application Backend",
    description:
      "Developed a full backend API for a video application using Express.js. Features include CRUD operations for video management such as like/dislike, add, delete, and update. Implemented best practices for API design, authentication, and data validation to ensure reliability and smooth user interactions.",
    tags: ["Express.js", "Node.js", "MongoDB", "Postman"],
    image: "./backend01.jpg", // Replace with actual image path
  },
  {
    title: "Handwill - Online Local Store Website",
    description:
      "Designed and developed a local sellers’ platform using ReactJS, SCSS, and Strapi. Focused on building a user-friendly, scalable web application to enhance local commerce. Integrated frontend and backend seamlessly for an optimal user experience.",
    tags: ["React.js", "SCSS", "Strapi", "JavaScript"],
    image: "./project03.jpg", // Replace with actual image path
  },
  {
    title: "E-Commerce Website",
    description:
      "Built a full-stack e-commerce website with features like product listing, shopping cart, and user authentication. Optimized backend systems and designed a responsive frontend using ReactJS and Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "./project02.jpg", // Replace with actual image path
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center  text-white rounded-lg  p-5 mb-8"
      data-aos="fade-up"
    >
      <div className="w-full  mb-4 text-center md:mb-0" data-aos="fade-right">
        <img
          src={project.image}
          alt={project.title}
          className="  w-40 rounded-lg mb-4 md:mb-0"
        />
      </div>
      <div className="md:ml-6 ml-0" data-aos="fade-left">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-blue-500 px-3 py-1 text-sm rounded shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-gray-800 py-12 overflow-x-hidden">
      <div className="container max-w-[1000px] mx-auto px-4">
        <h2
          className="text-3xl font-bold text-white text-center "
          data-aos="fade-up"
        >
          Projects
        </h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
