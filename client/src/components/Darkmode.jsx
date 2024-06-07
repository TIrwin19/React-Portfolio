import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Darkmode() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="absolute z-30 md:top-4 md:right-6 bottom-4 right-2 items-center pr-2 ">
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
  );
}
