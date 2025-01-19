import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      console.log("formfdat", formData);
    e.preventDefault();

    emailjs
      .send(
        "service_2g0n3gu", // Replace with your EmailJS service ID
        "template_jyrsy5k", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Qz6M3BVGgzJ4XEmd6" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="w-full  bg-gray-900 text-white py-16 px-4 flex justify-center items-center overflow-x-hidden">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Fill out the form below or contact me through my social links.
          </p>
        </div>

        {/* Success/Failure Messages */}
        {successMessage && (
          <div className="text-green-500 text-center mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-medium py-3 rounded shadow"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
