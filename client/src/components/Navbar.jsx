import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="sm:px-6 lg:px-3">
      <div className="relative flex h-16 my-3 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="sm:ml-6 sm:block">
            <div className="flex md:space-x-4 space-x-0">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={
                    location.pathname === item.href
                      ? "bg-gray-900 dark:bg-gray-300 text-gray-50 dark:text-gray-900 drop-shadow-lg rounded-md px-3 py-2 font-bold"
                      : "text-base text-gray-950 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-gray-50 dark:hover:text-gray-950  hover:drop-shadow-md rounded-md px-3 py-2 font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute  right-0 flex items-center pr-2 sm:static sm:inset-auto sm:mx-6 sm:pr-0">
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
        </div>
      </div>
    </div>
  );
}
