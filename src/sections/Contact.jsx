import { icons } from "lucide-react";

export const Contact = () => {
  return (
    <section className="overflow-hidden px-6 py-36 container mx-auto">
      {/* BACKGROUND */}
      <div className="absolute top-100 md:left-100 bg-purple-900/15 w-120 h-120 rounded-full blur-2xl" />
      <h1 className=" uppercase text-xl animate-fade-500 tracking-wider text-primary-light">
        Get in touch
      </h1>

      <div className="text-center mt-20">
        <h1 className="font-bold leading-tight text-4xl md:text-5xl  bg-gradient-to-r from-purple-800 via-blue-200 to-white bg-clip-text text-transparent">
          Let’s create something impactful.{" "}
        </h1>
        <p className="text-muted-foreground mt-5">
          Got a project idea? I’d love to collaborate and bring it to life.
          Reach out, and let’s explore how we can build something remarkable
          together.
        </p>

        {/* GRID CONTACT FORM */}
        <div className="grid md:grid-cols-2">
          {/* left side */}
          <div></div>

          {/* right side */}
          <div></div>
        </div>
      </div>
    </section>
  );
};
