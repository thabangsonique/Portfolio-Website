import React from "react";
import { Button } from "../components/Button";
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
  "REST APIs",
  "Responsive Design",
  "UI/UX Design",
  "Problem Solving",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden items-center min-h-screen">
      {/* bg */}
      {/* <div className="absolute inset-0">
        <img src="/space.jpg" className="w-full h-full object-cover" />
      </div> */}
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/40" />
      {/* green dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute rounded-full w-1.5 h-1.5 opacity-60"
            style={{
              backgroundColor: "#CCCCCC",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}`,
            }}
          />
        ))}
      </div>
      {/* Contents */}
      <div className="container relative mx-auto px-20 pt-40">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* left side */}
          <div className="space-y-8">
            <div className="inline-flex py-2 px-3 rounded-full items-center justify-center space-x-2 glass ">
              <span className="text-2xl ">Thabang Muleba</span>
            </div>
            {/*headline contents */}
            <div className="space-y-10">
              <h1 className="bg-gradient-to-r from-purple-800 via-blue-200 to-white bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                Full-Stack <br />
                <span className="font-serif italic tracking-tight font-normal  text-white">
                  Web Developer
                </span>
              </h1>

              {/* Creating responsive, full-stack applications that solve real-world problems. */}

              <p className="text-muted-foreground max-w-lg">
                Hi, I am Thabang Muleba — a Full-Stack Developer specializing in
                building end-to-end web applications. From crafting intuitive
                frontend experiences to designing backend services and APIs, I
                enjoy bringing ideas to life through technology. I am committed
                to continuous growth, writing high-quality code, and creating
                scalable solutions that provide real value to users.
              </p>
            </div>
            {/* CTA BUTTONS */}
            <div className="space-x-6 flex items-center">
              <Button size="large">
                Contact Me
                <FaArrowRight className="ml-3" />
              </Button>

              <Button size="large">
                <FaDownload className="mr-3" /> Download CV
              </Button>
            </div>
            {/* SOCIAL LINKS */}
            <div className="flex items-center space-x-5">
              <span className="text-muted-foreground">Follow me:</span>

              {/* icons */}

              {/* social links */}
              <div className="flex space-x-5 ">
                {[
                  { icon: FaGithub, href: "#" },
                  { icon: FaLinkedin, href: "#" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href}>
                    <social.icon
                      size={30}
                      className="transition-all duration-300 hover:scale-110 "
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div>
            {/* my profile image */}
            <img />
          </div>
        </div>

        {/* tech stack SCROLLVIEW SECTION */}
        <div className="text-center pt-20">
          <span className="text-muted-foreground">
            Technologies I work with:
          </span>

          <div className="overflow-hidden pt-10 text-muted-foreground">
            {" "}
            <div className="flex whitespace-nowrap animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="text-xl mx-6">
                  <span className="hover:text-primary-foreground transition-all duration-300">
                    {skill}
                  </span>
                </div>
              ))}{" "}
            </div>
            {/* scroll icon */}
            <div>
              <span className="uppercase">scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
