import React from "react";
import { skillsData, Skill } from "../constants/skillsData";

const SkillIcon = ({ name, icon, color }: Skill) => (
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

        {/* Enhanced Skills Grid Structure */}
        <div className="max-w-7xl mx-auto">
          {/* Primary Skills - Frontend & Backend (Top Row) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {skillsData.slice(0, 2).map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3
                  className={`text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 ${category.borderColor} pb-2`}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillIcon
                      key={skillIndex}
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Skills - Learning & Others (Bottom Row with Different Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learning Section - Smaller card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 border-purple-500 pb-2">
                Learning
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {skillsData[2].skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>

            {/* Others Section - Larger card spanning 2 columns */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-8 uppercase text-gray-800 border-b-2 border-orange-500 pb-2">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsData[3].skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Frontend
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Backend
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Learning
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                Tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
