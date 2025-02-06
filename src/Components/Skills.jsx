import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaWordpress, FaGitAlt, FaGithub, FaNodeJs, FaFilePowerpoint } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";

const Skills = () => {
  return (
    <div id="skills" className="py-12 w-11/12 mx-auto">
      <div className="text-white text-center">
        <motion.h2
          className="text-4xl font-extrabold py-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <motion.h4
          className="text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Expertise that empowers me to build impactful digital solutions.
        </motion.h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-5 mt-16">
        {[
          { icon: <FaHtml5 />, label: "HTML5" },
          { icon: <FaCss3Alt />, label: "CSS3" },
          { icon: <IoLogoJavascript />, label: "JavaScript" },
          { icon: <FaReact />, label: "React" },
          { icon: <SiTailwindcss />, label: "Tailwind CSS" },
          { icon: <FaBootstrap />, label: "Bootstrap" },
          { icon: <BiLogoFirebase />, label: "Firebase" },
          { icon: <FaNodeJs />, label: "Node.js" },
          { icon: <SiExpress />, label: "Express.js" },
          { icon: <BiLogoMongodb />, label: "Mongodb" },
          { icon: <FaWordpress />, label: "WordPress" },
          { icon: <FaGithub />, label: "GitHub" }
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-tl from-gray-900 to-gray-800 p-4 sm:p-6 shadow-xl rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 sm:flex-row">
              <div className="text-4xl sm:text-5xl text-white mb-4">{skill.icon}</div>
              <h2 className="text-white text-sm sm:text-lg font-semibold">{skill.label}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
