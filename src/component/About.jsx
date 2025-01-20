import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000}); // Initialize AOS with duration
  }, []);

  return (
    <div id="about" className="w-full h-full bg-gray-800 text-white py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold"
            data-aos="fade-up" // Fade-in animation for heading
          >
            About Me
          </h2>
        </div>

        {/* Image and Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <div
            className="flex justify-center"
            data-aos="fade-right" // Fade-in from the right for image
          >
            <img
              src="./about-section.png" // Replace with your actual image path
              alt="Ankit Simaiya"
              className="w-96 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Right Section - Description */}
          <div
            className="text-center md:text-left gap-10"
            data-aos="fade-left" // Fade-in from the left for description
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a skilled MERN Stack Developer with expertise in MongoDB,
              Express.js, React, and Node.js. I specialize in building RESTful
              APIs, designing scalable backend systems, and creating seamless
              frontend-backend workflows. Experienced with tools like Docker,
              Git, and Postman, I focus on delivering efficient and user-centric
              web applications.
            </p>
            <div className="my-4">

            <a
              href="/My_Resume.pdf" // Replace with actual CV link
              className="px-6 py-3  bg-orange-500 text-white font-medium rounded shadow hover:bg-orange-600 transition duration-300 transform hover:scale-105"
              data-aos="zoom-in" // Zoom-in animation for button
              download={"ankit-simaiya-resume.pdf"}
            >
              Download CV
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
