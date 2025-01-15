import { Link, NavLink } from "react-router-dom";
import navbarlogo from "../assets/logo.png";
import resume from "../assets/Rabbani Sarkar.pdf";

const Navbar = () => {
  const navbarLinks = (
    <>
      <li className="uppercase ml-4">
        <NavLink to="/" className="text-white hover:text-gray-300">
          Home
        </NavLink>
      </li>
      <li className="uppercase ml-4">
        <a href="#about" className="text-white hover:text-gray-300">
          About
        </a>
      </li>
      <li className="uppercase ml-4">
        <a href="#services" className="text-white hover:text-gray-300">
          Services
        </a>
      </li>
      <li className="uppercase ml-4">
        <a href="#project" className="text-white hover:text-gray-300">
          Project
        </a>
      </li>
      <li className="uppercase ml-4">
        <a href="#skills" className="text-white hover:text-gray-300">
          Skills
        </a>
      </li>
      <li className="uppercase ml-4">
        <a href="#contact" className="text-white hover:text-gray-300">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent backdrop-blur fixed top-0 z-30 w-full px-4 lg:px-20 text-white">
      <div className="navbar-start">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-12 lg:w-16" src={navbarlogo} alt="Logo" />
        </Link>
      </div>

      {/* Center Links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{navbarLinks}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {/* Download Resume Button */}
        <a
          href={resume}
          download="Rabbani_Resume"
          className="hidden lg:inline-block btn btn-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>

        {/* Dropdown for smaller screens */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-52"
          >
            {navbarLinks}
            <li className="mt-4">
              <a
                href={resume}
                download="Rabbani_Resume"
                className="btn btn-primary px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
