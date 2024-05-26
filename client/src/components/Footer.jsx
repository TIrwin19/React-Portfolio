import { useState, useEffect } from "react";
import octocatBlack from "../assets/images/github-mark.png";
import octocatWhite from "../assets/images/github-mark-white.png";
import linkdinWht from "../assets/images/In-White-34-╬ô├ñ├│.png";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Function to check if dark mode class is applied to body
    const isDarkModeEnabled = () => {
      return document.body.classList.contains("dark");
    };

    // Update dark mode state based on whether dark mode class is applied
    setDarkMode(isDarkModeEnabled());

    // Listen for changes in dark mode class and update state accordingly
    const observer = new MutationObserver(() => {
      setDarkMode(isDarkModeEnabled());
    });

    observer.observe(document.body, { attributes: true });

    // Cleanup function
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center my-3">
      <div className="flex">
        <a className="mx-2" href="https://github.com/TIrwin19">
          {!darkMode ? (
            <img className=" w-6 h-6" src={octocatBlack} alt="octocat" />
          ) : (
            <img className=" w-6 h-6" src={octocatWhite} alt="octocat" />
          )}
        </a>
        <a
          className="mx-2"
          href="https://www.linkedin.com/in/trevor-irwin-509734136/"
        >
          <img
            className="w-8 h-6 invert dark:invert-0"
            src={linkdinWht}
            alt="linkdin link"
          />
        </a>
      </div>
      <p className="dark:text-gray-50 mt-1">&copy; T. Irwin 2024</p>
    </div>
  );
};

export default Footer;
