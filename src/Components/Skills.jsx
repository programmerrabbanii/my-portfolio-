import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaWordpress, FaGitAlt, FaGithub, FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";

const skills = [
  { icon: <FaHtml5 />, label: "HTML5", level: "Expert", color: "#E34F26" },
  { icon: <FaCss3Alt />, label: "CSS3", level: "Expert", color: "#1572B6" },
  { icon: <IoLogoJavascript />, label: "JavaScript", level: "Intermediate", color: "#F7DF1E" },
  { icon: <FaReact />, label: "React", level: "Intermediate", color: "#61DAFB" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS", level: "Expert", color: "#38BDF8" },
  { icon: <FaBootstrap />, label: "Bootstrap", level: "Expert", color: "#7952B3" },
  { icon: <BiLogoFirebase />, label: "Firebase", level: "Intermediate", color: "#FFCA28" },
  { icon: <FaNodeJs />, label: "Node.js", level: "Beginner", color: "#339933" },
  { icon: <SiExpress />, label: "Express.js", level: "Beginner", color: "#ffffff" },
  { icon: <BiLogoMongodb />, label: "MongoDB", level: "Beginner", color: "#47A248" },
  { icon: <FaWordpress />, label: "WordPress", level: "Expert", color: "#21759B" },
  { icon: <FaGithub />, label: "GitHub", level: "Expert", color: "#181717" },
];

const Skills = () => {
  return (
    <div id="skills" className="py-12 w-11/12 mx-auto">
      <div className="text-white text-center">
        <motion.h2
          className="text-4xl font-bold py-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <motion.h4
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Technologies that power my development journey.
        </motion.h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-5 mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-tl from-gray-900 to-gray-800 p-6 shadow-xl rounded-2xl flex flex-col items-center hover:scale-105 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div
              className="text-5xl text-white mb-3 transition-all duration-300"
              style={{ transition: "color 0.3s ease-in-out" }}
            >
              <span className="group-hover:text-[var(--icon-color)]" style={{ "--icon-color": skill.color }}>
                {skill.icon}
              </span>
            </div>
            <h2 className="text-white text-lg font-semibold">{skill.label}</h2>
            <span className="absolute top-2 right-2 bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-lg opacity-90 group-hover:opacity-100 transition-all duration-300">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
