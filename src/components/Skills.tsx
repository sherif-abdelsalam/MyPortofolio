import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaGlobe, FaLanguage } from "react-icons/fa";
import { Globe } from "lucide-react";

const SkillIcon = ({
  name,
  icon,
  color,
}: {
  name: string;
  icon: React.ReactNode;
  color?: string;
}) => (
  <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200">
    <div
      className={`w-16 h-16 ${
        color || ""
      } flex items-center justify-center mb-3 rounded-lg bg-white shadow-sm`}
    >
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700 text-center">
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="section-title mx-auto mb-16">Technologies</div>
        {/* Main Skills Grid - 2x2 responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Frontend Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 border-blue-500 pb-2">
              Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <SkillIcon
                name="HTML5"
                icon={<SiHtml5 className="w-10 h-10 text-orange-600" />}
                color="text-orange-600"
              />
              <SkillIcon
                name="CSS3"
                icon={<SiCss3 className="w-10 h-10 text-blue-500" />}
                color="text-blue-500"
              />
              <SkillIcon
                name="JavaScript"
                icon={<SiJavascript className="w-10 h-10 text-yellow-400" />}
                color="text-yellow-400"
              />
              <SkillIcon
                name="React"
                icon={<SiReact className="w-10 h-10 text-blue-400" />}
                color="text-blue-400"
              />
              <SkillIcon
                name="Next.js"
                icon={<SiNextdotjs className="w-10 h-10 text-black" />}
                color="text-black"
              />
            </div>
          </div>

          {/* Backend Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 border-green-500 pb-2">
              Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <SkillIcon
                name="Node.js"
                icon={<SiNodedotjs className="w-10 h-10 text-green-600" />}
                color="text-green-600"
              />
              <SkillIcon
                name="Express"
                icon={<SiExpress className="w-10 h-10 text-gray-800" />}
                color="text-gray-800"
              />
              <SkillIcon
                name="MongoDB"
                icon={<SiMongodb className="w-10 h-10 text-green-500" />}
                color="text-green-500"
              />
            </div>
          </div>

          {/* Learning Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 border-purple-500 pb-2">
              Learning
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <SkillIcon
                name="TypeScript"
                icon={<SiTypescript className="w-10 h-10 text-blue-600" />}
                color="text-blue-600"
              />
              <SkillIcon
                name="GraphQL"
                icon={<SiGraphql className="w-10 h-10 text-pink-600" />}
                color="text-pink-600"
              />
              <SkillIcon
                name="Docker"
                icon={<SiDocker className="w-10 h-10 text-blue-500" />}
                color="text-blue-500"
              />
            </div>
          </div>

          {/* Tools & Languages Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 border-orange-500 pb-2">
              Tools & Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <SkillIcon
                name="Git"
                icon={<SiGit className="w-10 h-10 text-red-500" />}
                color="text-red-500"
              />
              <SkillIcon
                name="English"
                icon={<FaLanguage className="w-10 h-10 text-blue-600" />}
                color="text-blue-600"
              />
              <SkillIcon
                name="Arabic"
                icon={<FaLanguage className="w-10 h-10 text-green-600" />}
                color="text-green-600"
              />
              <SkillIcon
                name="REST API"
                icon={<Globe className="w-10 h-10 text-blue-600" />}
                color="text-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
