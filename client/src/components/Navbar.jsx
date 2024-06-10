import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", offset: 0 },
  { name: "About", href: "about", offset: -80 },
  { name: "Portfolio", href: "portfolio", offset: -80 },
  { name: "Contact", href: "contact", offset: -80 },
  // { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navRef = useRef(null);
  // const [dark, setDark] = useState(false);

  // const darkModeHandler = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.7 }
    );

    navigation.forEach((item) => {
      const target = document.getElementById(item.href);
      if (target) {
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const toggleNavbar = () => {
      if (window.scrollY >= 50) {
        // Adjust the value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", toggleNavbar);
    return () => window.removeEventListener("scroll", toggleNavbar);
  }, []);

  return (
    <div
      className={` py-0 px-6 lg:px-8 md:scale-100 scale-90 bg-slate-50 dark:bg-zinc-900 fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-200 ease-in-out transform ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="relative flex h-10 my-3 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="block">
            <div className="flex lg:space-x-6 md:space-x-4 space-x-0">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  className={`cursor-pointer ${
                    activeSection === item.href
                      ? "bg-gray-900 dark:bg-gray-300 text-gray-50 dark:text-gray-900 drop-shadow-lg rounded-md px-3 py-2 font-bold"
                      : "text-base text-gray-950 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-gray-50 dark:hover:text-gray-950  hover:drop-shadow-md rounded-md px-3 py-2 font-medium"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="items-center">
          <button
            onClick={() => darkModeHandler()}
            type="button"
            className=" rounded-full bg-zinc-900 dark:bg-gray-50 p-1 text-gray-400 dark:text-gray-700 hover:text-white drop-shadow hover:drop-shadow-md dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition ease-in-out hover:scale-105 "
          >
            {!dark ? (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div> */}
      </div>
    </div>
  );
}
