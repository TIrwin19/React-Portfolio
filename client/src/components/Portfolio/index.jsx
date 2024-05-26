// import { useState } from "react";
import "./components/porfolio.scss";
import projects from "./portfolio.config";

const Portfolio = () => {
  return (
    <div className=" flex flex-col mt-5 mx-5 md:mx-9">
      <h1 className="lg:text-6xl md:text-3xl text-lg dark:text-gray-50 mb-8">
        My latest Work
      </h1>
      <div className="scene grid grid-cols-2 gap-8">
        {projects.map((item, index) => (
          <div key={index} className="card">
            <div className="card__face card__face--front rounded-lg">
              <img
                className={`${item.class} border border-gray-300 dark:border-gray-700 project-img rounded-lg shadow-xl`}
                src={item.img}
              />
            </div>
            <div
              className={`${item.backColor} relative card__face card__face--back md:p-5 p-2 border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg`}
            >
              <h1 className=" md:text-5xl text-xl md:mb-3 mb-1">{item.name}</h1>
              <p className="md:text-xl text-base">{item.description}</p>
              <div className="absolute md:left-5 md:bottom-5 left-2 bottom-2 flex items-center">
                <a
                  className=" mr-4 shadow-md border transition duration-300 hover:scale-110 ease-in-out border-gray-400 bg-gray-50 py-1 px-2 bg-opacity-85 rounded-full text-gray-800 md:text-lg text-sm"
                  href={item.link}
                >
                  Check it out!
                </a>
                <a
                  className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
                  href={item.repo}
                >
                  <img
                    className=" md:w-9 md:h-9 w-6 h-6"
                    src={item.octocat}
                    alt="github octocat"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
