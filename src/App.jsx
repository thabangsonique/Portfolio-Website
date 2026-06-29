import Hero from "../src/sections/Hero";
import { Navbar } from "./layout/Navbar";
import { About } from "../src/sections/About";
import { Projects } from "../src/sections/Projects";
import { Experience } from "../src/sections/Experience";

import { Contact } from "../src/sections/Contact";
import { Routes, Route } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
