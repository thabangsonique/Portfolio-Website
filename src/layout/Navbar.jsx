//NAVLINKS ARRAY.
const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
];
import { Button } from "../components/Button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-10">
      <nav className=" container flex items-center mx-auto justify-between px-6 py-3">
        {/*left Icon */}

        <a
          href="#"
          className="font-bold text-foreground hover:text-primary text-xl"
        >
          TD<span className="text-primary">.</span>
        </a>

        {/* desktop navigation */}
        <div className="hidden md:block glass py-3 px-3 rounded-full">
          {NavLinks.map((nav, index) => (
            <a
              href={nav.href}
              className="px-4 text-muted-foreground hover:text-foreground"
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile menue */}
        {/* icon */}
        <div className="md:hidden ">
          <Menu />
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <div className="glass md:hidden pb-6">
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
    </header>

    // SIGN-IN
  );
};
