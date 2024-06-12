// import "./scrollby.scss";

import cssIcon from "../assets/logos/342px-CSS.3.svg.png";
import htmlIcon from "../assets/logos/HTML5_logo_and_wordmark.svg.png";
import javascriptIcon from "../assets/logos/JavaScript_logo_2.svg.png";
import mongoDBIcon from "../assets/logos/MongoDB_Logomark_SpringGreen.png";
import nodeIcon from "../assets/logos/Node.js_logo.svg";
import postgresqlIcon from "../assets/logos/Postgresql_elephant.svg.png";
import reactIcon from "../assets/logos/React-icon.svg";
import sequelozeIcon from "../assets/logos/sequelizejs-icon.svg";
import tailwindIcon from "../assets/logos/tailwindcss.svg";
import viteIcon from "../assets/logos/Vitejs-logo.svg";
import graphql from "../assets/logos/GraphQL Logo (Rhodamine).png";

export default function Scrollby() {
  return (
    <div className="icon my-10 bg-slate-50 dark:bg-zinc-900 mx-6">
      <div className="icon-slide flex justify-between">
        <img className=" md:h-12 h-6 " src={cssIcon} alt="" />
        <img className=" md:h-12 h-6 " src={htmlIcon} alt="" />
        <img className=" md:h-12 h-6 " src={mongoDBIcon} alt="" />
        <img className=" md:h-12 h-6 " src={javascriptIcon} alt="" />
        <img className=" md:h-12 h-6 " src={nodeIcon} alt="" />
        <img className=" md:h-12 h-6 " src={postgresqlIcon} alt="" />
        <img className=" md:h-12 h-6 " src={reactIcon} alt="" />
        <img className=" md:h-12 h-6 " src={sequelozeIcon} alt="" />
        <img className=" md:h-12 h-6 " src={tailwindIcon} alt="" />
        <img className=" md:h-12 h-6 " src={viteIcon} alt="" />
        <img className=" md:h-12 h-6 " src={graphql} alt="" />
      </div>
    </div>
  );
}
