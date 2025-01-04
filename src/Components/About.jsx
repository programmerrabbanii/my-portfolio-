import React from "react";
import aboutimg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="hero w-full mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-8 items-center">
          <motion.img
            src={aboutimg}
            alt="About Image"
            className="max-w-md rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="py-4 text-lg text-white leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hi there! I'm a passionate front-end developer with a keen eye for
              design and a love for building beautiful, user-friendly web
              applications. I specialize in React, JavaScript, and creating
              seamless UI/UX that enhances user experience. My focus is on
              writing clean, maintainable code while ensuring performance and
              scalability.
            </motion.p>

            <motion.p
              className="py-4 text-lg text-white leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              I specialize in React and JavaScript, with experience in Node.js and Express.js for creating full-stack solutions.
            </motion.p>

            <motion.button
              className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
