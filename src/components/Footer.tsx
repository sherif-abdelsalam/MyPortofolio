import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import myLinks from "../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-10 px-6 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-6">
            <a
              href={myLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={myLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={myLinks.email}
              className="hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Sherif HodHod. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
