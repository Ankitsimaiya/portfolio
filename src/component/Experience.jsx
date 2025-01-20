import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const experiences = [
  {
    duration: "2024 - Present",
    role: "Full Stack Developer",
    company: "Kumbhadvertise.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    tags: ["Javascript", "React.js", "Next.js", "MongoDB","Express"],
  },
//   {
//     duration: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description:
//       "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
//     tags: ["HTML", "CSS", "Vue.js", "MySQL"],
//   },
//   {
//     duration: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description:
//       "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and built APIs for data communication and implemented frontend-backend workflows for enhanced user experience.",
//     tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
//   },
];

const ExperiencePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS animations
  }, []);

  return (
    <div id="experience" className="w-full bg-gray-900 text-white py-16 overflow-x-hidden ">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Section Heading */}
        <h2
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Delayed animation for each experience
            >
              {/* Duration */}
              <div className="text-gray-300 text-lg w-full md:w-1/3 mb-4 md:mb-0"
              data-aos="fade-right">
                {experience.duration}
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3"
              data-aos="fade-left">
                <h3 className="text-2xl font-semibold">
                  {experience.role} -{" "}
                  <span className="text-orange-500">{experience.company}</span>
                </h3>
                <p className="text-gray-300 mt-2">{experience.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-800 text-purple-400 px-3 py-1 text-sm rounded shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
