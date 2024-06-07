import Scrollby from "./Scrollby";

export default function Resume() {
  return (
    <div className="relative flex flex-col mt-5 mx-5 md:mx-9 dark:text-gray-50">
      <h1 className="lg:text-6xl md:text-3xl text-lg mb-8">Resume</h1>
      <Scrollby />
      <a
        className=" w-fit px-2.5 py-0.5 rounded-full border dark:text-zinc-900 text-gray-50 dark:border-gray-200 border-zinc-700 drop-shadow hover:drop-shadow-md transition ease-in-out hover:scale-105 dark:bg-gray-50 bg-zinc-900"
        href="https://docs.google.com/document/d/1cY2BbcMM_QOeqPk5H-gbMcYvcViMIWPXsLA-wZ5cQcs/edit?usp=sharing"
        download
      >
        Download Resume
      </a>
      <div className="flex md:space-x-52 space-x-14 mt-5">
        <div>
          <h2 className="text-2xl">Front End Technologies</h2>
          <ul className="text-xl mt-2">
            <li>- HTML</li>
            <li>- CSS/SCSS</li>
            <li>- Javascript</li>
            <li>- Node.js</li>
            <li>- React</li>
            <li>- TailwindCSS</li>
            <li>- Vite</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Back End Technologies</h2>
          <ul className="text-xl mt-2">
            <li>- SQL</li>
            <li>- PostgreSQL</li>
            <li>- Express.js</li>
            <li>- Sequelize</li>
            <li>- MongoDB</li>
            <li>- Mongoose</li>
            <li>- GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
