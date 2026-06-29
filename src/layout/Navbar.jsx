import { HashLink } from "react-router-hash-link";

//NAVLINKS ARRAY.
const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
];
import { useEffect } from "react";
import { Button } from "../components/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //change navebar background apon scroll.
  useEffect(() => {
    //function: change navbar background.
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-5 z-10 transition-all duration-500 ${isScrolled ? "glass-strong" : "bg-transparent"}`}
    >
      <nav className=" container flex items-center mx-auto justify-between px-6 py-3">
        {/*left Icon */}

        <Link
          to="/"
          className="font-bold text-foreground hover:text-primary text-xl"
        >
          TD<span className="text-primary">.</span>
        </Link>

        {/* desktop navigation */}
        <div className="hidden md:block glass py-3 px-3 rounded-full">
          <HashLink
            smooth
            to="/#about"
            className="p-2 text-muted-foreground hover:text-primary-foreground transition-all duration-300"
          >
            About
          </HashLink>
          <Link
            to="/projects"
            className="px-4 text-muted-foreground rounded-2xl py-3 hover:text-foreground hover:bg-secondary"
          >
            Projects
          </Link>
          <HashLink
            smooth
            to="/#experience"
            className="px-4 text-muted-foreground rounded-2xl py-3 hover:text-foreground hover:bg-secondary"
          >
            Experience
          </HashLink>
          <HashLink
            smooth
            to="/#testimonials"
            className="px-4 text-muted-foreground rounded-2xl py-3 hover:text-foreground hover:bg-secondary"
          >
            Testimonials
          </HashLink>
          {/* {NavLinks.map((nav, index) => (
            <a
              href={nav.href}
              className="px-4 text-muted-foreground rounded-2xl py hover:text-foreground hover:bg-secondary"
            >
              {nav.label}
            </a>
          ))} */}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile menue */}
        {/* icon */}
        <div
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}

      {isMenuOpen ? (
        <div className="glass md:hidden pb-6 animate-fade-400">
          <div className="container px-6 flex flex-col py-8 gap-5">
            {NavLinks.map((nav, index) => (
              <a
                href={nav.href}
                className="py-2 text-muted-foreground hover:text-foreground"
              >
                {nav.label}
              </a>
            ))}
          </div>

          {/* BUTTON */}
          <Button className="w-full ">Contact Me</Button>
        </div>
      ) : null}
    </header>

    // SIGN-IN
  );
};
