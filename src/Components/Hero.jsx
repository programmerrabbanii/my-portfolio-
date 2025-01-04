import React from "react";
import heroImg from "../assets/rabbani.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <div className="hero min-h-screen text-white flex justify-center items-center relative">
        <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto gap-4"> 
          <motion.img
            src={heroImg}
            alt="Hero Image"
            className="max-w-sm rounded-lg shadow-2xl transform scale-110 hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="text-center lg:text-left mt-8 lg:mt-0 lg:w-1/2">
            <motion.h1
              className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="py-6 text-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              I'm a passionate full-stack developer who loves creating intuitive and engaging web applications. I work on both front-end and back-end technologies to build seamless digital experiences.
            </motion.p>

            <div className="flex justify-center lg:justify-start gap-6 pb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaGithub />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition duration-300">
                <FaInstagram />
              </a>
            </div>

            <motion.button
              className="btn btn-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              View Resume
            </motion.button>

            <div className="pt-6 text-2xl font-semibold text-gray-300">
              <Typewriter
                words={["React Developer", "Backend Developer", "Tech Enthusiast"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
