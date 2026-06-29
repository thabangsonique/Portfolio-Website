import React from "react";
import Hero from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Testimonials } from "../sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Testimonials />
    </>
  );
}
