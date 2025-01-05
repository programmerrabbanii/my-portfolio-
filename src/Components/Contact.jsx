import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="py-16 px-6 ">
        <p className="text-center text-3xl text-white">Get In Touch: Let's Build Something Great</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
        {/* Left Section */}
        <div className="p-8 rounded-lg shadow-lg transform transition hover:scale-105">
          <h2 className="text-3xl text-white font-extrabold mb-6 animate-bounceIn">Get In Touch</h2>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
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
          <h2 className="text-3xl font-extrabold mb-6 animate-bounceIn">Contact Information</h2>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-300">Phone</p>
            <p className="text-lg">+880123456789</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-300">Address</p>
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-300 mb-2">Follow Me</p>
            <div className="flex gap-4">
              {[
                { href: "https://facebook.com", icon: <FaFacebookF />, color: "blue-500" },
                { href: "https://twitter.com", icon: <FaTwitter />, color: "blue-400" },
                { href: "https://linkedin.com", icon: <FaLinkedinIn />, color: "blue-600" },
                { href: "https://github.com", icon: <FaGithub />, color: "gray-500" },
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
