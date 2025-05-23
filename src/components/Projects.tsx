import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "./constants/projectsData";
import { useState, useEffect } from "react";

const ProjectCard = ({ title, description, tech, image, link }: Project) => {
  return (
    <Card className="overflow-hidden group">
      <div className="h-64 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
          <Button
            variant="outline"
            className="border-black hover:bg-black hover:text-white transition-colors"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [projectsVisible, setProjectsVisible] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(projectsVisible);
  // const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update projectsVisible based on screen size
  useEffect(() => {
    const updateProjectsVisible = () => {
      if (window.innerWidth < 768) {
        setProjectsVisible(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setProjectsVisible(2); // Tablet
      } else {
        setProjectsVisible(3); // Desktop
      }
    };

    updateProjectsVisible();
    window.addEventListener("resize", updateProjectsVisible);
    return () => window.removeEventListener("resize", updateProjectsVisible);
  }, []);

  // Create extended projects array for infinite loop
  const extendedProjects = [
    ...projects.slice(-projectsVisible), // Clone last projects at beginning
    ...projects, // Original projects
    ...projects.slice(0, projectsVisible), // Clone first projects at end
  ];

  // Auto-slide functionality
  useEffect(() => {
    // if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex >= projects.length + projectsVisible) {
        // Reset to beginning without animation
        setCurrentIndex(projectsVisible);
      } else if (currentIndex <= 0) {
        // Reset to end without animation
        setCurrentIndex(projects.length);
      }
    };

    const timer = setTimeout(handleTransitionEnd, 700); // Match transition duration
    return () => clearTimeout(timer);
  }, [currentIndex, projects.length, projectsVisible]);

  const getIndicatorIndex = () => {
    if (currentIndex <= projectsVisible) {
      return projects.length - (projectsVisible - currentIndex);
    } else if (currentIndex >= projects.length + projectsVisible) {
      return currentIndex - projects.length - projectsVisible;
    }
    return currentIndex - projectsVisible;
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center mb-16">
        <div className="section-title mx-auto">PORTFOLIO</div>
        <p className="mt-8 max-w-3xl mx-auto text-gray-600">
          Here are some of the projects I've built. Each project demonstrates
          different skills and technologies.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Projects Slider */}
        <div
          className="overflow-hidden"
          // onMouseEnter={() => setIsAutoPlaying(false)}
          // onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / projectsVisible
              }%)`,
            }}
          >
            {extendedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{
                  width: `${100 / projectsVisible}%`,
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: projects.length }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(projectsVisible + index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === getIndicatorIndex()
                  ? "bg-black"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
