import { NavLink } from "react-router-dom";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="hero">
      <div className="flex flex-col items-center title-margin max-w-7xl mx-auto">
        <h1 className="md:text-9xl text-8xl text-gray-50">T. Irwin</h1>
        <h2 className="md:text-5xl text-4xl mt-3 text-gray-50">
          Fullstack Developer
        </h2>
        <NavLink
          to="/about"
          className="animate-bounce animate-infinite animate-ease-in-out text-lg mt-5 font-semibold leading-6 hover:underline text-gray-50 transition ease-in-out delay-150 hover:scale-x-110 duration-75"
        >
          Learn more <span aria-hidden="true">→</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
