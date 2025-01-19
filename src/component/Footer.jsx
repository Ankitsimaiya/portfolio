import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center  p-2 border-gray-700 pb-6 mb-6">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-semibold text-white">Ankit Simaiya</h3>
            <p className="mt-2">MERN Stack Developer</p>
          </div>

          {/* Right Section - Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Experience
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row text-white justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/ankitsimaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github"></i> {/* GitHub Icon */}
            </a>
            <a
              href="https://linkedin.com/in/ankitsimaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>
            <a
              href="https://x.com/ankitsimaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} Ankit Simaiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
