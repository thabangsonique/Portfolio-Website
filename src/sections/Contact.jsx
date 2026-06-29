import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const Availability = [
    {
      status: "Currently Available",
      message:
        "I am currently available to new opportunities and new exciting projects. Be it a full-time front-end Engineer or freelance consultation, lets talk!",
    },

    {
      status: "Currently Unavailable",
      message:
        "Currently not available, but dont hesitate to reach out again later!",
    },
  ];

  const Information = [
    {
      Icon: Mail,
      Label: "Email",
      Value: "thabangrevit@gmail.com",
      href: "#",
    },

    {
      Icon: Phone,
      Label: "Email",
      Value: "thabangrevit@gmail.com",
      href: "#",
    },

    {
      Icon: MapPin,
      Label: "Email",
      Value: "thabangrevit@gmail.com",
      href: "#",
    },
  ];

  //checking availability state

  const [availability, setAvailability] = useState(true);

  // state variable...collecting and storing user data.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publickeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID;

  //state for loading and for submit status.
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publickeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID;

      console.log({
        serviceId,
        templateId,
        publickeyId,
      });
      if (!serviceId || !templateId || !publickeyId) {
        throw new Error(
          "Emailjs configuration failed. check your keys in the env. file",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publickeyId,
      );

      setSubmitStatus({
        type: "success",
        message: "Email recieved! I'll get back to you shortly.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error.status);
      console.error("Text:", error.text);
      setSubmitStatus({
        type: "error",
        message:
          (error && error.text) ||
          "Failed to send email. Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative mx-auto py-32 overflow-hidden">
      <div className="absolute bg-primary/6 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px]" />
      <div className="container mx-auto max-w-5xl p-6">
        {/* heading */}
        <div className="text-center ">
          <span className="uppercase tracking-wider text-primary">
            get in touch
          </span>
          <h1 className="font-semibold text-primary text-4xl md:text-5xl mt-2">
            Let's build{" "}
            <span className="text-white font-medium font-serif italic">
              something great.
            </span>
          </h1>
          <p className="text-muted-foreground mt-5">
            Have a project in mind? I'd love to hear about it. Send me a message
            and lets discusshow we can work together.
          </p>
        </div>

        {/* form and contact information */}
        <div className="grid lg:grid-cols-2 mt-12 gap-12">
          {/* form */}
          <div className="rounded-2xl glass glow-border p-6 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block">
                  Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  placeholder="Your Name..."
                  className="bg-muted-foreground/10 px-2 py-2 rounded-2xl w-full mb-4 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  type="email"
                  placeholder="Your@gmail.com"
                  className="bg-muted-foreground/10 px-2 py-2 rounded-2xl w-full mb-4 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  id="message"
                  required
                  placeholder="Your Name..."
                  className="bg-muted-foreground/10 px-2 py-2 rounded-2xl w-full mb-4 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* submit button */}
              <Button
                disabled={isLoading}
                className={`w-full mb-10 transition-all duration-300 ${isLoading ? "bg-primary/50" : ""}`}
                type="submit"
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send />
                  </>
                )}
              </Button>

              {/* //status message */}
              {submitStatus.type && (
                <div>
                  {submitStatus.type === "success" ? (
                    <div className=" flex gap-2 bg-green-500/50 px-2 py-2 rounded-xl ">
                      <CheckCircle />
                      <p>{submitStatus.message}</p>
                    </div>
                  ) : (
                    <div className="flex gap-2 bg-red-500/50 px-2 py-2 rounded-xl ">
                      <AlertCircle /> <p>{submitStatus.message}</p>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Right side */}
          {/* contact information */}

          <div className="container relative mx-auto">
            <div className=" relative glass rounded-xl p-6 glow-border animate-fade-in animation-delay-400">
              <span className="font-bold text-xl">Contact Information</span>

              {/* contact details */}
              <div className="relative space-y-10 mt-10 mb-10">
                <div className="flex gap-3">
                  {/* icon */}
                  <div className=" flex items-center justify-center rounded-xl px-2 py-2 bg-primary/20">
                    <Mail className="text-primary" />
                  </div>
                  {/* text */}
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Email</span>
                    <a href="#">thabangrevit@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* icon */}
                  <div className=" flex items-center justify-center rounded-xl px-2 py-2 bg-primary/20">
                    <Phone className="text-primary " />
                  </div>
                  {/* text */}
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Phone</span>
                    <a href="#">+27 67 651 7593</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* icon */}
                  <div className=" flex items-center justify-center rounded-xl px-2 py-2 bg-primary/20">
                    <MapPin className="text-primary" />
                  </div>
                  {/* text */}
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Location</span>
                    <a>Gauteng, Johannesburg</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-xl glow-border mt-5 p-6 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-3">
                {availability ? (
                  <div>
                    <div className="flex gap-2 items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="font-bold">
                        {Availability[0].status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {Availability[0].message}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-2 items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="font-bold">
                        {Availability[1].status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {Availability[1].message}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
