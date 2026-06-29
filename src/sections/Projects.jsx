import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    image: "/Movie-website.png",
    title: "Movie-Flix",
    description:
      "A modern movie discovery landing page showcasing a clean, responsive, and engaging user interface.",
    tech: ["HTML", "CSS"],
    Github: "https://github.com/thabangsonique/Menu-Like-Website-Project",
    deploy: "https://chipper-wisp-369b90.netlify.app/",
  },
  {
    image: "/Coffee-shop.png",
    title: "Reinvented Coffee Shop Website",
    description:
      "A complete front-end redesign of an outdated coffee shop website, transforming it into a modern, responsive, and visually engaging user experience.",
    tech: ["HTML", "CSS", "Bootstrap"],
    Github: "https://github.com/thabangsonique/Menu-Like-Website-Project",
    deploy: "https://chipper-wisp-369b90.netlify.app/",
  },
  {
    image: "/Bootstrap-website.png",
    title: "Bootstrap Website",
    description:
      "A simple landing page showcasing the use of bootstrap styling",
    tech: ["HTML", "Bootstrap"],
    Github: "https://github.com/thabangsonique/Menu-Like-Website-Project",
    deploy: "https://chipper-wisp-369b90.netlify.app/",
  },
  {
    image: "/Clock-app.png",
    title: "Clock App",
    description:
      "A fully functional digital clock application built with HTML, CSS, and JavaScript, delivering accurate real-time updates through a clean and responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    Github: "https://github.com/thabangsonique/Menu-Like-Website-Project",
    deploy: "https://chipper-wisp-369b90.netlify.app/",
  },
  {
    image: "/Quize-app.png",
    title: "Quiz App",
    description:
      "A multi-topic quiz application built with HTML, CSS, and JavaScript, featuring an interactive interface, real-time scoring, and a responsive user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    Github: "https://github.com/thabangsonique/Menu-Like-Website-Project",
    deploy: "https://chipper-wisp-369b90.netlify.app/",
  },
  {
    image: "/Portfolio-site.png",
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio showcasing my projects, technical skills, and passion for building clean, user-focused web applications.",
    tech: ["ReactJs", "TailwindCSS"],
    Github: "https://github.com/thabangsonique/Menu-Like-Website-Project",
    deploy: "https://chipper-wisp-369b90.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section className="relative container mx-auto min-h-sreen overflow-hidden mb-30">
      <div className="mt-40 animate-fade-500">
        <h1 className="text-center uppercase text-xl md:text-2xl text-primary-light tracking-wider">
          featured work
        </h1>

        {/* projects text */}
        <div className="text-center mt-4 space-y-6">
          <h1 className="text-3xl md:text-6xl font-extrabold  bg-gradient-to-r from-purple-800 via-blue-200 to-white bg-clip-text text-transparent ">
            Projects that create <br />
            <span className="font-serif font-normal italic text-primary-foreground">
              real impact.
            </span>
          </h1>
          <p>
            Explore my latest work — from dynamic web platforms to inventive
            solutions built to address real-world challenges.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="mt-20 container px-6">
          {/* heading text */}
          <h1 className="font-bold uppercase tracking-wider text-lg md:text-2xl md:text-center text-primary-light">
            Front-end projects
          </h1>

          {/* grid */}
          <div className="grid md:grid-cols-2 mt-10 gap-6">
            {/* project container */}
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden glass-strong border border-primary/20 group hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                {/* project image */}
                <div className="h-96 w-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 w-auto"
                  />
                </div>

                {/* project text */}
                <div className="p-5 mt-4">
                  {/* TITLE + ICONS */}
                  <div className="flex justify-between">
                    <span className="text-xl font-bold group-hover:scale-110 group-hover:text-primary-light transition-all duration-300 ">
                      {project.title}
                    </span>

                    {/* icons */}
                    <div className="flex gap-6 group-hover:scale-110 transition-all duration-300">
                      <a
                        href={project.Github}
                        target="_blank"
                        className="hover:scale-120 transition-all duration-300"
                      >
                        <FaGithub
                          size={25}
                          className="hover:text-primary-light transition-all duration-300"
                        />
                      </a>
                      <a
                        href={project.deploy}
                        target="_blank"
                        className="hover:scale-120 transition-all duration-300"
                      >
                        <FaExternalLinkAlt
                          size={25}
                          className="hover:text-primary-light transition-all duration-300"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="mt-6">{project.description}</p>

                  {/* text-stack array */}
                  <div className="flex mt-4">
                    {project.tech.map((tech, techIdx) => (
                      <div
                        key={techIdx}
                        className="p-3 rounded-full bg-background border border-blue-950/40"
                      >
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
