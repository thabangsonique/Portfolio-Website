import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";

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
    <section
      id="hero"
      className="relative overflow-hidden items-center min-h-screen"
    >
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
      <div className="container relative mx-auto px-6 md:px-20 pt-40">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* left side */}
          <div className="space-y-8 mr-4">
            <div className="animate-glow inline-flex py-2 px-3 rounded-full items-center justify-center space-x-2 glass animate-fade-500 ">
              <span className="text-2xl ">Thabang Muleba</span>
            </div>
            {/*headline contents */}
            <div className="space-y-10">
              <h1 className="animate-fade-700 bg-gradient-to-r from-purple-800 via-blue-200 to-white bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                Full-Stack <br />
                <span className="font-serif italic tracking-tight font-normal  text-white">
                  Web Developer
                </span>
              </h1>

              {/* Creating responsive, full-stack applications that solve real-world problems. */}

              <p className="animate-fade-800 text-muted-foreground max-w-lg">
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
              <Link to="/contact">
                <Button className="hover:scale-110 transition-all duration-300">
                  Contact Me
                  <FaArrowRight className="ml-3" />
                </Button>
              </Link>
              <a href="/CV of Thabang Muleba(E) (1).pdf" download>
                {" "}
                <Button className="hover:scale-110 transition-all duration-300">
                  <FaDownload className="mr-3" /> Download CV
                </Button>
              </a>
            </div>
            {/* SOCIAL LINKS */}
            <div className="flex items-center space-x-5">
              <span className="text-muted-foreground">Follow me:</span>

              {/* icons */}

              {/* social links */}
              <div className="flex space-x-5 ">
                {[
                  { icon: FaGithub, href: "https://github.com/thabangsonique" },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/thabang-muleba-2aa9aa20a/",
                  },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank">
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
          <div className="overflow-hidden rounded-full w-72 h-72 md:w-100 md:h-100 lg:w-150 lg:h-150 mx-auto -mt-4 md:-mt-8 lg:-mt-10">
            {/* my profile image */}
            <img
              src="/my-image-4.png"
              alt="Profile image"
              className="profile-image w-full h-full object-cover"
            />
          </div>
        </div>

        {/* tech stack SCROLLVIEW SECTION */}
        <div className="relative text-center pt-20">
          <span className="text-muted-foreground">
            Technologies I work with:
          </span>

          <div className="overflow-hidden pt-10 text-muted-foreground">
            {" "}
            <div className="flex whitespace-nowrap animate-marquee mb-30">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="text-xl mx-6">
                  <span className="hover:text-primary-foreground transition-all duration-300">
                    {skill}
                  </span>
                </div>
              ))}{" "}
            </div>
          </div>

          {/* scroll icon */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
            <a className="flex flex-col items-center text-muted-foreground group">
              <span className="uppercase hover:text-primary-foreground group-hover:hover:scale-110 transition-all duration-300">
                scroll
              </span>

              <FaChevronDown className="group-hover:translate-y-2 transition-all duration-300 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
