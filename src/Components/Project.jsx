import { useState } from "react";
import { Link } from "react-router-dom";
import found from "../assets/found.png";
import crwod from "../assets/crowd.png";
import winter from "../assets/winter.png";

const Project = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div id="project">
      <div className="text-center text-white mt-24">
        <h4>Latest Works</h4>
        <h2 className="text-2xl mb-6">Our Recent Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {/* Card 1 */}
        <div className="card md:w-96 w-full border border-[#4A00FF] text-white transition-transform duration-300 hover:scale-105">
          <figure>
            <img
              className="h-[200px] bg-cover w-full"
              src={found}
              alt="Lost and Found Application"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lost and Found Application</h2>
            <p>
              {showMore1
                ? "This Lost and Found Website connects people who have lost belongings with those who’ve found them. Users can report, browse, and recover items. It includes features like user authentication, file uploads, database management, and API integration. The project uses React, Tailwind CSS, DaisyUI, Firebase, and MongoDB, offering full-stack development experience."
                : truncateText(
                    "This Lost and Found Website connects people who have lost belongings with those who’ve found them. Users can report, browse, and recover items. It includes features like user authentication, file uploads, database management, and API integration. The project uses React, Tailwind CSS, DaisyUI, Firebase, and MongoDB, offering full-stack development experience.",
                    42
                  )}
            </p>
            <div className="card-actions justify-start">
              <button
                onClick={() => setShowMore1(!showMore1)}
                className="text-[#4A00FF] hover:underline"
              >
                {showMore1 ? "Show Less" : "See More"}
              </button>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  href="https://found-and-lost-application.web.app/"
                >
                  <button className="rounded-full border-2 py-2 px-10 mt-5 border-[#4A00FF] shadow-2xl">
                    Live Link
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://found-and-lost-application.web.app/"
                >
                  <button className="rounded-full border-2 py-2 px-10 mt-5 border-[#4A00FF] shadow-2xl">
                    Repo Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card md:w-96 w-full border border-[#4A00FF] text-white transition-transform duration-300 hover:scale-105">
          <figure>
            <img className="h-[200px] bg-cover w-full" src={crwod} alt="Crowdfunding Application" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Crowd Funding Application</h2>
            <p>
              {showMore2
                ? "This crowdfunding website, built with React, Tailwind CSS, DaisyUI, Firebase, and MongoDB, serves as a platform for users to raise funds for personal needs, creative projects (like films or apps), or startups (like launching new products). Firebase handles login and registration, while MongoDB manages backend data. The platform provides a seamless and efficient experience for users to create campaigns and receive financial support."
                : truncateText(
                    "This crowdfunding website, built with React, Tailwind CSS, DaisyUI, Firebase, and MongoDB, serves as a platform for users to raise funds for personal needs, creative projects (like films or apps), or startups (like launching new products). Firebase handles login and registration, while MongoDB manages backend data. The platform provides a seamless and efficient experience for users to create campaigns and receive financial support.",
                    42
                  )}
            </p>
            <div className="card-actions justify-start">
              <button
                onClick={() => setShowMore2(!showMore2)}
                className="text-[#4A00FF] hover:underline"
              >
                {showMore2 ? "Show Less" : "See More"}
              </button>
              <div className="flex gap-4">
                <a target="_blank" href="https://assignment-ten-63235.web.app/">
                  <button className="rounded-full border-2 py-2 px-10 mt-5 border-[#4A00FF] shadow-2xl">
                    Live Link
                  </button>
                </a>
                <a target="_blank" href="https://assignment-ten-63235.web.app/">
                  <button className="rounded-full border-2 py-2 px-10 mt-5 border-[#4A00FF] shadow-2xl">
                    Repo Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card md:w-96 w-full border border-[#4A00FF] text-white transition-transform duration-300 hover:scale-105">
          <figure>
            <img className="h-[200px] bg-cover w-full" src={winter} alt="Winter Clothing Donation" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winter Clothing Donation Website</h2>
            <p>
              {showMore3
                ? "The Winter Donation web app, built with React, Tailwind CSS, DaisyUI, and Firebase for authentication, connects donors with volunteers to provide winter clothing to those in need across Bangladesh. Users can view campaigns, log in, and donate easily via a simple form."
                : truncateText(
                    "The Winter Donation web app, built with React, Tailwind CSS, DaisyUI, and Firebase for authentication, connects donors with volunteers to provide winter clothing to those in need across Bangladesh. Users can view campaigns, log in, and donate easily via a simple form.",
                    42
                  )}
            </p>
            <div className="card-actions justify-start">
              <button
                onClick={() => setShowMore3(!showMore3)}
                className="text-[#4A00FF] hover:underline"
              >
                {showMore3 ? "Show Less" : "See More"}
              </button>
              <div className="flex gap-4">
                <a target="_blank" href="https://assignment-nine-ea37e.web.app/">
                  <button className="rounded-full border-2 py-2 px-10 mt-5 border-[#4A00FF] shadow-2xl">
                    Live Link
                  </button>
                </a>
                <a target="_blank" href="https://github.com/programming-hero-web-course1/b10-a9-authentication-programmerrabbanii">
                  <button className="rounded-full border-2 py-2 px-10 mt-5 border-[#4A00FF] shadow-2xl">
                    Repo Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
