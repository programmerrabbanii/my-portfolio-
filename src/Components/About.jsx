import React from "react";
import aboutimg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-11/12 mx-auto py-12">
      <div className="hero w-full mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-8 items-center">
          <motion.img
            src={aboutimg}
            alt="About Image"
            className="lg:w-[50%] sm:w-full rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Me 🚀
            </motion.h1>
            <motion.p
              className="py-4 text-lg text-white leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hey there! I'm a Front-End Developer passionate about crafting
              visually stunning, responsive, and user-friendly web applications.
              With a strong foundation in React, JavaScript, and modern UI/UX
              principles, I build seamless experiences that engage users
              effortlessly. While my expertise lies in front-end technologies,
              I'm also expanding my skill set in Node.js and Express.js to
              develop full-stack solutions that are scalable and efficient. I
              believe in writing clean, maintainable, and high-performance code
              to bring real-world ideas to life. Let's build something
              extraordinary together! ✨
            </motion.p>

            <motion.p
              className="py-4 text-lg text-white leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              I specialize in React and JavaScript, with experience in Node.js
              and Express.js for creating full-stack solutions.
            </motion.p>

            <motion.button
              id="touch"
              className="  btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a href="#touch">Get in Touch</a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
