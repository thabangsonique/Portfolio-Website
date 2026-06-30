import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const experiences = [
  {
    period: "2025 - Present",
    role: "Software Engineer Student",
    company: "Melsoft Academy",
    description:
      "Software engineering student with hands-on experience in web development and data structures. Growing skills in coding, problem-solving, and collaborating on real-world projects — eager to contribute and learn in a professional setting.",
  },
  {
    period: "2024 - 2025",
    role: "Full Stack Developer Student",
    company: "FNB App Academy",
    description:
      "Gained practical experience building projects using React, Node.js, and MongoDB. Worked on guided assignments and collaborative exercises to strengthen full stack development skills.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className=" mt-20 relative mx-auto container overflow-hidden px-6 md:px-30 pb-20"
    >
      {/* BACKGROUND */}
      <div className="absolute top-100 left-80 w-100 h-100 rounded-full blur-3xl bg-purple-900/30" />
      <h1 className=" mb-5 uppercase text-xl animate-fade-500 tracking-wider">
        Experience journey
      </h1>
      {/* heading text */}
      <div className="space-y-5">
        <h1 className="font-bold leading-tight text-4xl md:text-5xl  bg-gradient-to-r from-purple-800 via-blue-200 to-white bg-clip-text text-transparent">
          Growth that tells{" "}
          <span className="font-serif italic font-normal text-primary-foreground">
            my story.
          </span>{" "}
        </h1>
        <p className="text-muted-foreground">
          A timeline showcasing my evolution — from curious learner to emerging
          Full-Stack developer.
        </p>
      </div>

      {/* EXPERIENCE TIMELINE */}
      <div className="relative mt-20">
        {/* timeline-line effect */}
        <div className="absolute  left-1/2 top-0 bottom-0 md:w-[2px] bg-gradient-to-b from-purple-900 via-purple-900/50 to-transparent" />
        <div className="md:flex md:flex-col gap-8 ">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex justify-center ${
                idx % 2 === 0
                  ? "md:justify-end md:pr-10"
                  : "md:justify-start md:pl-10"
              } animate-fade-400`}
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* dot */}
              <div
                className={`${idx === 0 ? "absolute left-1/2 top-0 -translate-x-1/2 rounded-full w-3 h-3 shadow-lg shadow-purple-500 bg-purple-900 animate-pulse" : ""}`}
              />

              {/* experience content */}
              <div
                className={`w-full max-w-lg rounded-2xl glass-strong ${
                  idx % 2 === 0 ? "md:mr-auto md:" : "md:ml-auto mt-10"
                }`}
              >
                <div className="p-5 space-y-3">
                  <span>{exp.period}</span>
                  <h3>{exp.role}</h3>
                  <h3 className="font-bold">{exp.company}</h3>
                  <p>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="mt-10">
        {" "}
        <h3 className="text-muted-foreground mb-8">
          Feel free to contact me for more infomation!
        </h3>
        <Link to="/contact">
          <Button
            size="large"
            className="animate-btn hover:scale-110 transition-all duration-300"
          >
            Contact Me
          </Button>
        </Link>
      </div>
    </section>
  );
};
