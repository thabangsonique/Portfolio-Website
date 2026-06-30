import {
  FaCode,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: FaCode,
    title: "Maintainable code",
    description:
      "Writing code that is easy to read, understand, and modify, making future updates, debugging, and collaboration more efficient.",
  },

  {
    icon: FaUsers,
    title: "Team Collaboration",
    description:
      "Collaborating effectively with designers and developers to transform ideas into high-quality digital products.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Delivering high-performance applications with fast load times and smooth user interactions.",
  },

  {
    icon: FaLightbulb,
    title: "Collaborative Development",
    description:
      "Working seamlessly with cross-functional teams to deliver reliable, user-focused solutions.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-6 md: -mt-60 mx-auto relative container overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-900/40 blur-3xl" />
      <div className="absolute top-80 right-30 w-100 h-100 bg-purple-900/10 blur-3xl" />

      <div className=" mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-20">
        {/* Left section */}
        <div className="space-y-10">
          {" "}
          <h1 className="uppercase text-xl animate-fade-500 tracking-wider">
            About Me
          </h1>
          <div className="animate-fade-800">
            <h2 className="font-bold leading-tight text-4xl md:text-5xl  bg-gradient-to-r from-purple-800 via-blue-200 to-white bg-clip-text text-transparent">
              Engineering full-stack solutions,
              <span className="text-white font-serif italic font-normal tracking-tight">
                {" "}
                for the modern web.
              </span>
            </h2>
          </div>
          {/* context */}
          <div className="text-muted-foreground space-y-5">
            <p>
              Hi, I’m Thabang Muleba, a passionate Full-Stack Developer
              specializing in building modern web and mobile applications. I
              enjoy transforming ideas into scalable, high-performance digital
              products using technologies across both the front end and back
              end. From creating intuitive user interfaces to designing secure
              APIs and managing databases, I love every stage of the development
              process.
            </p>
            <p>
              What drives me is a commitment to building applications that are
              not only visually appealing but also reliable, efficient, and
              scalable. I believe great software is built on clean architecture,
              maintainable code, and a seamless user experience. Whether I’m
              developing responsive web applications or cross-platform mobile
              apps, I focus on performance, security, accessibility, and
              industry best practices to deliver solutions that stand the test
              of time.
            </p>
            <p>
              I’m constantly expanding my skills, exploring new technologies,
              and taking on projects that challenge me to grow as a developer.
              I’m excited to collaborate with teams and clients who value
              innovation, quality, and user-centered design. If you’re looking
              for a Full-Stack Developer who is passionate about building robust
              web and mobile applications from concept to deployment, I’d love
              to connect.
            </p>
          </div>
          {/* bubble quote content */}
          <div className="">
            <div className="rounded-2xl glass p-5 animate-glow">
              <span className="italic">
                "My mission is to continuously grow as a Full-Stack Developer by
                building scalable, high-quality web and mobile applications that
                solve real-world problems and deliver seamless, user-centered
                digital experiences. I strive to write clean, maintainable code,
                embrace modern technologies, and create solutions that are both
                innovative and impactful.""
              </span>
            </div>
          </div>
        </div>
        {/* Right section HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="glass-strong rounded-2xl p-4 space-y-6 ">
              <div className="bg-primary/30 p-2 inline-flex rounded-xl ">
                <highlight.icon size={30} />
              </div>

              <h3 className="text-xl font-bold">{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
        {/* VIEW PROJECTS CTA */}
        <Link to="/projects">
          <Button
            size="large"
            className="p-6 flex w-70 justify-between group hover:scale-110 transition-all duration-300"
          >
            <span className="group-hover:text-primary-light">
              View Projects
            </span>
            <FaExternalLinkAlt className="ml-20 group-hover:scale-150 transition-all duration-300" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
