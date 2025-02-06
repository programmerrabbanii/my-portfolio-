import React from "react";
import { GiServerRack } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { LuShoppingBag } from "react-icons/lu";
import { IoBugOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="py-12">
      <div className="text-center text-white my-16">
        <h3 className="text-4xl font-extrabold py-2">My Services</h3>
        <h4 className="text-lg text-gray-400">What I do for my clients</h4>
      </div>
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {/* Build Full Website */}
        <motion.div
          className="card card-compact bg-transparent text-white py-11 px-6 text-center shadow-xl border-2 border-[#4A00FF] rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-[#7F00FF] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GiServerRack className="mx-auto text-6xl text-white mb-4" />
          <div className="card-body">
            <h2 className="font-bold text-xl">Build Full Website</h2>
            <p>
              I will design and redesign any type of website for your business.
              I provide a unique, clean & awesome graphical design interface.
            </p>
          </div>
        </motion.div>

        {/* Maintenance & Optimization */}
        <motion.div
          className="card card-compact bg-transparent text-white py-11 px-6 text-center shadow-xl border-2 border-[#4A00FF] rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-[#7F00FF] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GrSystem className="mx-auto text-6xl text-white mb-4" />
          <div className="card-body">
            <h2 className="font-bold text-xl">Maintenance & Optimized</h2>
            <p>
              Slow loading website is a big problem. I can boost your website’s
              speed and maintain your website whenever needed.
            </p>
          </div>
        </motion.div>

        {/* Unique Design */}
        <motion.div
          className="card card-compact bg-transparent text-white py-11 px-6 text-center shadow-xl border-2 border-[#4A00FF] rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-[#7F00FF] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MdDesignServices className="mx-auto text-6xl text-white mb-4" />
          <div className="card-body">
            <h2 className="font-bold text-xl">Unique Design</h2>
            <p>
              A unique design is key for every website. Both you and your
              customers will be amazed by the design.
            </p>
          </div>
        </motion.div>

        {/* Responsive Layout */}
        <motion.div
          className="card card-compact bg-transparent text-white py-11 px-6 text-center shadow-xl border-2 border-[#4A00FF] rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-[#7F00FF] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DiResponsive className="mx-auto text-6xl text-white mb-4" />
          <div className="card-body">
            <h2 className="font-bold text-xl">Responsive Layout</h2>
            <p>
              I will create different layout designs that are fully responsive,
              ensuring your website looks perfect on any device.
            </p>
          </div>
        </motion.div>

        {/* E-Commerce Store */}
        <motion.div
          className="card card-compact bg-transparent text-white py-11 px-6 text-center shadow-xl border-2 border-[#4A00FF] rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-[#7F00FF] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LuShoppingBag className="mx-auto text-6xl text-white mb-4" />
          <div className="card-body">
            <h2 className="font-bold text-xl">E-Commerce Store</h2>
            <p>
              I can create a fully functional online store with any payment
              gateway and shopping cart functionality integrated into your site.
            </p>
          </div>
        </motion.div>

        {/* Bug Fixing */}
        <motion.div
          className="card card-compact bg-transparent text-white py-11 px-6 text-center shadow-xl border-2 border-[#4A00FF] rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-[#7F00FF] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <IoBugOutline className="mx-auto text-6xl text-white mb-4" />
          <div className="card-body">
            <h2 className="font-bold text-xl">Bug Fixing</h2>
            <p>
              I can solve malware, bugs, and errors that can harm your website.
              Don't worry, I'm here to provide you with a clean and functional site.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
