import { useState, useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRightFromSquareIcon,
  ChevronLeft,
  ChevronRight,
  LucideArrowUpToLine,
} from "lucide-react";
import { projects, type Project } from "../constants/projectsData";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  link,
  demo,
}: Project) => (
  <Card className="overflow-hidden group bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-all duration-300">
    <div className="h-64 overflow-hidden">
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-start justify-between">
        <Button
          variant="outline"
          className="border-black dark:border-gray-300 hover:bg-black dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-colors"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Github <LucideArrowUpToLine className="ml-2 h-4 w-4" />
          </a>
        </Button>

        {demo && (
          <Button className="bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600 text-white transition-colors">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center ml-4"
            >
              Live Demo <ArrowUpRightFromSquareIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const [projectsVisible, setProjectsVisible] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Adjust visible projects on resize
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      setProjectsVisible(width < 768 ? 1 : width < 1024 ? 2 : 3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Recalculate current index when visible count changes
  useEffect(() => {
    setCurrentIndex(projectsVisible);
  }, [projectsVisible]);

  // Infinite loop support
  const extendedProjects = useMemo(() => {
    return [
      ...projects.slice(-projectsVisible),
      ...projects,
      ...projects.slice(0, projectsVisible),
    ];
  }, [projects, projectsVisible]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((idx) => idx + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((idx) => idx - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= projects.length + projectsVisible) {
      setCurrentIndex(projectsVisible); // reset to start
    } else if (currentIndex <= 0) {
      setCurrentIndex(projects.length); // reset to end
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto text-center mb-16">
        <div className="section-title mx-auto text-gray-900 dark:text-white">
          Projects
        </div>
        <p className="mt-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Here are some of the projects I've built. Each project demonstrates
          different skills and technologies.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/3 bg-orange-600 dark:bg-orange-500 hover:scale-110 rounded-full p-3 transition-all duration-300 z-10 border-[6px] border-white dark:border-gray-900"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/3 bg-orange-600 dark:bg-orange-500 hover:scale-110 rounded-full p-3 transition-all duration-300 z-10 border-[6px] border-white dark:border-gray-900"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Projects Slider */}
        <div className="overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-600 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / projectsVisible
              }%)`,
            }}
          >
            {extendedProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / projectsVisible}%` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
