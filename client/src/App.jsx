import { Route, Routes } from "react-router-dom";
// import { useState } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./Pages/Resume";

function App() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto dark:bg-zinc-900">
      <Navbar />

      <div className="grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}

export default App;
