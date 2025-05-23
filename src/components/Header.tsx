import { useState } from "react";
import { Menu, X } from "lucide-react";
import myLinks from "./constants/socialLinks";
import { useLocation } from "react-router-dom";
import { console } from "inspector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.hash === "#about";
  const isPortfolioPage = location.hash === "#portfolio";
  const isContactPage = location.hash === "#contact";
  const isSkillsPage = location.hash === "#skills";
  const isHomePage = location.hash === "#" || location.hash === "";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="/favicon.ico" alt="Logo" className="h-8" />
          <a href="#" className="block text-xl font-bold">
            &lt;Sherif HodHod&gt;
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className={`hover:text-gray-300 ${
                  isAboutPage ? "border-b-2 border-white pb-2" : ""
                }`}
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`hover:text-gray-300 ${
                  isSkillsPage ? "border-b-2 border-white pb-2" : ""
                }`}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`hover:text-gray-300 ${
                  isPortfolioPage ? "border-b-2 border-white pb-2" : ""
                }`}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-gray-300 ${
                  isContactPage ? "border-b-2 border-white pb-2" : ""
                }`}
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href={myLinks.resume}
                target="_blank"
                className="bg-white text-black px-4 py-2 hover:bg-gray-200 font-semibold"
              >
                RESUME
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute w-full">
          <nav className="container mx-auto py-5">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-4 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT ME
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-4 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block py-2 px-4 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-4 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href={myLinks.resume}
                  target="_blank"
                  className="block py-2 px-4 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
