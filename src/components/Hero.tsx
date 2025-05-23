import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import myLinks from "./constants/socialLinks";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build things for the web.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 text-center">
      <div className="max-w-4xl">
        <p className="text-lg text-black mb-3">Hello there, I'm</p>
        <h1 className="text-xl md:text-7xl font-bold mb-5 text-[#0F172A]">
          Sherif HodHod
        </h1>
        <h2 className="text-3xl md:text-5xl font-medium mb-8 text-gray-500 min-h-[60px]">
          {typedText}
        </h2>

        <p className="text-xl text-gray-600 max-w-4xl mb-10 mx-auto">
          I'm a software developer specializing in building full stack
          applications. Currently, I'm focused on MERN Stack development.
        </p>

        <section className="flex flex-wrap gap-4 mb-12 justify-center">
          <a
            href="#contact"
            className="inline-block border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
          >
            CONTACT
          </a>

          <a
            href="#portfolio"
            className="inline-block border border-black bg-black text-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
          >
            See My Work
          </a>

          <a
            href={myLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold bg-orange-700 text-white px-6 py-2 hover:bg-white hover:border hover:border-orange-700 hover:text-orange-700 transition-colors"
          >
            Resume
          </a>
        </section>
        <div className="flex space-x-4 mb-8 justify-center">
          <a
            href={myLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={myLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={myLinks.email}
            className="text-gray-700 hover:text-black transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-400 flex flex-col items-center animate-pulse"
      >
        <span>Scroll Down</span>
        <svg
          className="w-6 h-6 mt-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
