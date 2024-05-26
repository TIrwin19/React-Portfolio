import readingNook from "../../assets/images/Screenshot 2024-05-03 104822.png";
import jate from "../../assets/images/jate.png";
import techBlog from "../../assets/images/tech_blog_5.png";
import geoFactor from "../../assets/images/geoFactor.png";
import octocatBlk from "../../assets/images/github-mark.png";
import octocatWht from "../../assets/images/github-mark-white.png";
import empTracker from "../../assets/images/employee_tracker.png";
import socialNetwork from "../../assets/images/social_network.png";

const projects = [
  {
    name: "Reading Nook",
    description: "The random reading companion",
    img: readingNook,
    class: "",
    link: "https://guarded-river-34918-8aebb7f6bceb.herokuapp.com/",
    backColor: "bg-gradient-to-br from-cyan-900 via-sky-500 to-cyan-100",
    repo: "https://github.com/TIrwin19/Reading_Nook",
    octocat: octocatBlk,
  },
  {
    name: "J.A.T.E",
    description: "Just another text editor",
    img: jate,
    class: "img-left",
    link: "https://calm-brushlands-29024-8220b77f5da8.herokuapp.com/",
    backColor: "bg-gradient-to-br from-zinc-800 via-sky-800 to-sky-500",
    repo: "https://github.com/TIrwin19/Text_Editor",
    octocat: octocatWht,
  },
  {
    name: "Tech-Blog",
    description: "For all your tech-nical thoughts",
    img: techBlog,
    class: "img-left",
    link: "https://shielded-falls-90250-c4c68d8642ee.herokuapp.com/",
    backColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 ",
    repo: "https://github.com/TIrwin19/MVC_Tech_Blog",
    octocat: octocatWht,
  },
  {
    name: "Holiday Geo-Factor",
    description: "Know when to go!",
    img: geoFactor,
    class: "",
    link: "https://tirwin19.github.io/Holiday_GeoFactor/",
    backColor: "bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-500",
    repo: "https://github.com/TIrwin19/Holiday_GeoFactor",
    octocat: octocatBlk,
  },
  {
    name: "SQL Employee Tracker",
    description: "Terminal employee tracker app",
    img: empTracker,
    class: "",
    link: "#",
    backColor: "bg-gradient-to-br from-zinc-800 via-sky-800 to-sky-500",
    repo: "https://github.com/TIrwin19/SQL_Employee_Tracker",
    octocat: octocatWht,
  },
  {
    name: "Social Network API",
    description: "Social Media MongoDB API ",
    img: socialNetwork,
    class: "",
    link: "#",
    backColor:
      "bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-300",
    repo: "https://github.com/TIrwin19/Social_Network_API",
    octocat: octocatWht,
  },
]

export default projects