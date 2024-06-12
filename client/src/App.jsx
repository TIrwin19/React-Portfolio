// import { Route, Routes } from "react-router-dom";
// import { useState } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Scrollby from "./components/Scrollby";
import Resume from "./Pages/Resume";
import Darkmode from "./components/Darkmode";

function App() {
  return (
    <main className="flex flex-col relative">
      {/* <Darkmode /> */}
      <div className="">
        <Landing />
      </div>
      <Navbar />
      <div>
        <About />
        <Portfolio />
        <Resume />
        <Scrollby />
        <Contact />
      </div>

      {/* <div className="grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div> */}

      <Footer />
    </main>
  );
}

export default App;
