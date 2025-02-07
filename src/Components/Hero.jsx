import React from "react";
import heroImg from "../assets/profile-pic.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full mx-auto">
      <div className="hero min-h-screen text-white flex justify-center items-center relative">
        <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto gap-4 ">
          <motion.img
            src={heroImg}
            alt="Hero Image"
            className="w-62 h-62 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
             mt-16 rounded-lg shadow-2xl transform md:scale-110 hover:scale-105 
             transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="text-center lg:text-left mt-8 lg:mt-0 lg:w-1/2"> 
            <motion.h1
              className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Building the Web, One Line of Code at a Time
            </motion.h1> 
            
            <motion.p
              className="py-2 text-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Front-End Developer | Expert in React, Tailwind CSS & JavaScript | Passionate about sleek, responsive UI | Exploring Back-End (Node.js, Express, MongoDB) for full-stack solutions | Always learning, always building.
            </motion.p>

            <div className="flex justify-center lg:justify-start gap-6 pb-4">
              <a
                href="https://github.com/programmerrabbanii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/developerrabbani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/rabbani-sarkar-86ab60205/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/developer_rabbani/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>

            <motion.button
              className="btn btn-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <a
                href="https://drive.google.com/file/d/15CHWAxxpo2JhVh17JcBOM1qL7pFx1MMi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                View Resume
              </a>
            </motion.button>

            <div className="pt-6 text-2xl font-semibold text-gray-300">
              <Typewriter
                words={[
                  "React Developer",
                  "Backend Developer",
                  "Tech Enthusiast",
                ]}
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
