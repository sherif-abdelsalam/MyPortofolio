import { Github, Linkedin, Mail, ChevronDown, Eye } from "lucide-react";
import { useEffect, useState, useCallback, useMemo, memo } from "react";
import myLinks from "./constants/socialLinks";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = useMemo(() => "I build things for the web.", []);

  const startTyping = useCallback(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [startTyping]);

  const scrollToNextSection = useCallback(() => {
    const nextSection =
      document.querySelector("#about") ||
      document.querySelector("section:nth-child(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 opacity-40"></div>

      <div className="max-w-6xl w-full relative z-10">
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-3 animate-fade-in font-medium">
          Hello there, I'm
        </p>

        <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight animate-slide-up">
          Sherif HodHod
        </h1>

        <div className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 sm:mb-8 text-gray-500 min-h-[40px] sm:min-h-[50px] md:min-h-[60px] lg:min-h-[70px] leading-relaxed">
          <span className="inline-block">
            {typedText}
            <span className="animate-pulse text-orange-600 font-bold">|</span>
          </span>
        </div>

        <p className="text-sm  md:text-2xl text-gray-700 max-w-4xl mb-8 sm:mb-10 md:mb-12 mx-auto leading-relaxed px-2 font-light">
          I'm a software developer specializing in building{" "}
          <span className="text-orange-600 font-semibold bg-orange-50 px-1 rounded">
            full stack applications
          </span>
          . Currently, I'm focused on
          <span className="text-orange-600 font-semibold bg-orange-50 px-1 rounded">
            MERN Stack
          </span>{" "}
          development.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center items-center max-w-2xl mx-auto text-sm sm:text-lg">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-900 px-6 py-2 sm:py-3 font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            CONTACT ME
          </a>

          <a
            href="#portfolio"
            className="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-900 bg-slate-900 text-white px-6 py-2 sm:py-3 font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            VIEW MY WORK
          </a>

          <a
            href={myLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold bg-orange-600 text-white px-6 py-2 sm:py-3 border-2 border-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
          >
            <Eye size={20} />
            View Resume
          </a>
        </div>

        <div className="flex space-x-6 sm:space-x-8 mb-8 sm:mb-12 justify-center">
          <a
            href={myLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-600 hover:text-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 p-2"
            aria-label="GitHub Profile"
          >
            <Github size={28} className="sm:w-6 group-hover:drop-shadow-md" />
          </a>
          <a
            href={myLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-600 hover:text-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 p-2"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} className="sm:w-6 group-hover:drop-shadow-md" />
          </a>
          <a
            href={myLinks.email}
            className="group text-gray-600 hover:text-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 p-2"
            aria-label="Email Contact"
          >
            <Mail size={28} className="sm:w-6 group-hover:drop-shadow-md" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 transform -translate-x-1/2 cursor-pointer text-gray-500 hover:text-orange-700 flex flex-col items-center animate-bounce transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50 rounded-lg p-4"
        aria-label="Scroll to next section"
      >
        <span className="text-sm sm:text-base mb-1 sm:mb-2 font-medium">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};

export default memo(Hero);
