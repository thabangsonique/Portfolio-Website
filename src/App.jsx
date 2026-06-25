import Hero from "../src/sections/Hero";
import { Navbar } from "./layout/Navbar";
import { About } from "../src/sections/About";
import { Projects } from "../src/sections/Projects";
import { Experience } from "../src/sections/Experience";
import { Testimonials } from "../src/sections/Testimonials";
import { Contact } from "../src/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
