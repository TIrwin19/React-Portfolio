// import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="sm:px-6 lg:px-3">
      <div className="relative flex h-10 my-3 items-center justify-between">
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
      </div>
    </div>
  );
}
