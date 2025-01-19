import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Skills Data
const skills = [
  { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Tailwind CSS", img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Material UI", img: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
  { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "JavaScript", img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: "Docker", img: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  { name: "Git", img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with a smoother animation duration and trigger it only once
  }, []);

  return (
    <div id="skill" className="w-full h-full bg-gray-900 text-white flex items-center justify-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Skills
        </h2>
        <p className="text-gray-400 text-center mt-2" data-aos="fade-up">
          These are some of the tools and technologies I work with.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-12 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4"
              data-aos="zoom-in"
              style={{ animationDelay: `${index * 0.2}s` }} // Stagger animation delays
            >
              <div
                className="w-24 h-24 bg-gray-800 rounded-full p-4 m-3 flex items-center justify-center shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
                style={{
                  animation: `bounce 1s ease-in-out infinite ${index * 0.3}s`, // Add bouncing animation with delay
                }}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
