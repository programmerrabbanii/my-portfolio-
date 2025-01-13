import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yiqapeo", 
        "template_z63usgp", 
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "4lcyIX5i1sLkHf6Ka" 
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Email Sent Successfully!",
            text: "Thank you for contacting me. I will get back to you soon.",
            confirmButtonText: "Okay",
            background: "#1a202c",
            color: "#fff",
          });
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Failed to Send Email",
            text: "Please try again later.",
            confirmButtonText: "Okay",
            background: "#1a202c",
            color: "#fff",
          });
        }
      );
  };

  return (
    <div id="contact" className="py-16 px-6">
      <p className="text-center text-3xl text-white">
        Get In Touch: Let's Build Something Great 
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
        {/* Left Section */}
        <div className="p-8 rounded-lg shadow-lg transform transition hover:scale-105">
          <h2 className="text-3xl text-white font-extrabold mb-6 animate-bounceIn">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-semibold text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-semibold text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="p-8 text-white rounded-lg shadow-lg transform transition hover:scale-105">
          <h2 className="text-3xl font-extrabold mb-6 animate-bounceIn">
            Contact Information
          </h2>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-300">Phone</p>
            <p className="text-lg">+8801798950302</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-300">Address</p>
            <p className="text-lg">Rajshahi,Bangladesh</p>
          </div>
          <div className="mt-6"> 
            <p className="text-sm font-semibold text-gray-300 mb-2">Follow Me</p>
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.facebook.com/developerrabbani",
                  icon: <FaFacebookF />,
                  color: "blue-500",
                },
                {
                  href: "https://twitter.com",
                  icon: <FaTwitter />,
                  color: "blue-400",
                },
                {
                  href: "https://www.linkedin.com/in/rabbani-sarkar-86ab60205/",
                  icon: <FaLinkedinIn />,
                  color: "blue-600",
                },
                {
                  href: "https://github.com/programmerrabbanii",
                  icon: <FaGithub />,
                  color: "gray-500",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border border-gray-700 rounded-full text-white hover:text-${item.color} hover:bg-gray-800 transition-all transform hover:scale-110`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
