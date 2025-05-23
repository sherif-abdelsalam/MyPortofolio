
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:example@example.com" className="hover:text-gray-300 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mohamed Hassan. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
