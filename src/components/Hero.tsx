import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  CircleArrowOutUpRight,
  MailPlus,
  ArrowDownCircleIcon,
} from "lucide-react";
import { useEffect, useState, useCallback, useMemo, memo } from "react";
import myLinks from "../constants/socialLinks";

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
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-center relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 opacity-40"></div>

      <div className="max-w-6xl w-full relative z-10">
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 animate-fade-in font-medium transition-colors duration-300">
          Hello there, I'm
        </p>

        <h1 className="hero-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent leading-tight animate-slide-up">
          Sherif HodHod
        </h1>

        <div className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium mb-6 sm:mb-8 text-gray-500 dark:text-gray-400 min-h-[40px] sm:min-h-[50px] md:min-h-[60px] lg:min-h-[70px] leading-relaxed transition-colors duration-300">
          <span className="inline-block">
            {typedText}
            <span className="animate-pulse text-orange-600 dark:text-orange-400 font-bold">
              |
            </span>
          </span>
        </div>

        <p className="text-sm md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mb-8 sm:mb-10 md:mb-12 mx-auto leading-relaxed px-2 font-light transition-colors duration-300">
          I'm a software developer specializing in building{" "}
          <span className="text-orange-600 dark:text-orange-400 font-semibold bg-orange-50 dark:bg-orange-900/30 px-1 rounded">
            full stack applications
          </span>
          . Currently, I'm focused on
          <span className="text-orange-600 dark:text-orange-400 font-semibold bg-orange-50 dark:bg-orange-900/30 px-1 rounded">
            MERN Stack
          </span>{" "}
          development.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 justify-center items-center max-w-2xl mx-auto text-sm ">
          <a
            href={myLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold bg-orange-600 dark:bg-orange-500 text-white px-6 py-2 sm:py-3 border-2 border-orange-600 dark:border-orange-500 hover:bg-white dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <CircleArrowOutUpRight size={20} />
            View Resume
          </a>
          <a
            href="#portfolio"
            className="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-900 dark:border-gray-300 bg-slate-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 sm:py-3 font-medium hover:bg-white dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-gray-300 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            View My Work &nbsp;
            <ArrowDownCircleIcon size={20} />
          </a>
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-slate-900 dark:border-gray-300 px-6 py-2 sm:py-3 font-medium text-slate-900 dark:text-gray-100 hover:bg-slate-900 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-gray-300 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Contact Me &nbsp;
            <MailPlus size={20} />
          </a>
        </div>

        <div className="flex space-x-4 mb-8 sm:mb-12 md:mb-16 justify-center">
          <a
            href={myLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 p-2"
            aria-label="GitHub Profile"
          >
            <Github size={28} className="sm:w-6 group-hover:drop-shadow-md" />
          </a>
          <a
            href={myLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 p-2"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} className="sm:w-6 group-hover:drop-shadow-md" />
          </a>
          <a
            href={myLinks.email}
            className="group text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 p-2"
            aria-label="Email Contact"
          >
            <Mail size={28} className="sm:w-6 group-hover:drop-shadow-md" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 transform -translate-x-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-orange-700 dark:hover:text-orange-400 flex flex-col items-center animate-bounce transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50 rounded-lg p-4 dark:focus:ring-offset-gray-900"
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
