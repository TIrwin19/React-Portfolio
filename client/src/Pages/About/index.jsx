import { useState } from "react";
// import portrate from "../../assets/images/IMG_2941.jpg";
import content from "./about.config";
import "./about.css";

const About = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="flex flex-col mt-5 mx-5 md:mx-9">
      <h1 className="lg:text-6xl md:text-3xl text-lg dark:text-gray-50 mb-8">
        About Me
      </h1>
      <div className="relative h-full portrait rounded-md">
        {/* <img
          className="absolute left-0 top-0 z-10 w-full rounded-md "
          src={portrate}
          alt="Portrate"
        /> */}
        <div className=" w-2/3 z-20 md:m-5 m-2 flex flex-col ">
          {content.map((item, index) => (
            <div
              key={index}
              className="rounded-md p-3 backdrop-blur-xl bg-white/60 w-fit mb-3 shadow-md hover:shadow-lg"
              onMouseEnter={() => setIsHovered(item.h2Hover)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h2 className="lg:text-3xl md:text-xl text-base">{item.title}</h2>
              <p
                className={`lg:text-lg md:text-base text-sm ${
                  isHovered === item.h2Hover || isHovered === item.pHover
                    ? "block"
                    : "hidden"
                }`}
                onMouseEnter={() => setIsHovered(item.pHover)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
