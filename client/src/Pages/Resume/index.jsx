export default function Resume() {
  return (
    <div className="relative flex flex-col mt-10 max-w-7xl mx-auto px-6 dark:text-gray-50">
      <h1 className="lg:text-6xl md:text-3xl text-lg">Resume</h1>
      <a
        className="md:scale-100 scale-90 my-5 w-fit px-2.5 py-0.5 rounded-full border dark:text-zinc-900 text-gray-50 dark:border-gray-200 border-zinc-700 drop-shadow hover:drop-shadow-md transition ease-in-out hover:scale-105 dark:bg-gray-50 bg-zinc-900"
        href="https://drive.google.com/file/d/1Q4plzlAlxf9WZTaGmbxBs0SydngSlrb4/view?usp=sharing"
        download
      >
        Download Resume
      </a>
      <div className="flex justify-between">
        <div>
          <h2 className="md:text-2xl text-base">Front End Technologies</h2>
          <ul className="md:text-xl text-sm mt-2">
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
          <h2 className="md:text-2xl text-base">Back End Technologies</h2>
          <ul className="md:text-xl text-sm mt-2">
            <li>- SQL</li>
            <li>- PostgreSQL</li>
            <li>- Express.js</li>
            <li>- Sequelize</li>
            <li>- MongoDB</li>
            <li>- Mongoose</li>
            <li>- GraphQL</li>
          </ul>
        </div>
        <div>
          <h2 className="md:text-2xl text-base">Dev Technologies</h2>
          <ul className="md:text-xl text-sm mt-2">
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
