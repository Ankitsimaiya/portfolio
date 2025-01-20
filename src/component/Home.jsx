import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    "A MERN Stack Developer",
    "A Frontend Enthusiast",
    "A Backend Problem Solver",
    "A Passionate Coder",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 font-body px-6 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col-reverse  md:grid md:grid-cols-2 items-center lg:px-8">
        {/* Left Side */}
        <div className="space-y-6 text-center md:text-left lg:mt-6 md:mt-0 animate-fade-in">
          {/* Name and Role */}
          <h1 className="text-4xl md:text-6xl font-bold">
            I am <span className="text-blue-400">Ankit</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-gray-400">
            <span className="animate-text-fade">{roles[currentIndex]}</span>
          </h2>

          {/* Additional Text */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Passionate about building dynamic, user-friendly web applications
            with a focus on clean design and seamless functionality. I love solving real-world problems using modern technologies.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-6">
            {/* LeetCode */}
            <a
              href="https://leetcode.com/ankitsimaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transform hover:scale-125 transition duration-300"
            >
              <SiLeetcode />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/ankitsimaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transform hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>
            {/* Twitter */}
            <a
              href="https://x.com/ankitsimaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transform hover:scale-125 transition duration-300"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.linkedin.com/in/ankitsimaiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transform hover:scale-125 transition duration-300"
            >
             <FaLinkedinIn />
            </a>
          </div>

          {/* Button: View Work */}
          <div className="pb-10">
            <a
              href="#project"
              className="inline-block px-6 py-3 mt-4 text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white rounded shadow-lg transition duration-300 transform hover:scale-105"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative  h-48 w-48 sm:w-72 lg:w-96 sm:h-72 mb-6 lg:pl-24 flex items-center justify-center animate-image-zoom">
          <img
            src="./banner01.png"
            alt="Ankit"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
