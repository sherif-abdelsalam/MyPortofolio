import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiPostgresql,
  SiTypescript,
  SiGraphql,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiPostman,
  SiDocker,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { Globe } from "lucide-react";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface SkillCategory {
  title: string;
  borderColor: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    borderColor: "border-blue-500",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 className="w-10 h-10 text-orange-600" />,
        color: "text-orange-600",
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="w-10 h-10 text-blue-500" />,
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" />,
        color: "text-cyan-500",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: <SiReact className="w-10 h-10 text-blue-400" />,
        color: "text-blue-400",
      },
    ],
  },
  {
    title: "Backend",
    borderColor: "border-green-500",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-10 h-10 text-green-600" />,
        color: "text-green-600",
      },
      {
        name: "Express",
        icon: <SiExpress className="w-10 h-10 text-gray-800" />,
        color: "text-gray-800",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-10 h-10 text-green-500" />,
        color: "text-green-500",
      },
      {
        name: "SQLite",
        icon: <SiSqlite className="w-10 h-10 text-blue-600" />,
        color: "text-blue-600",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-10 h-10 text-blue-700" />,
        color: "text-blue-700",
      },
    ],
  },
  {
    title: "Learning",
    borderColor: "border-purple-500",
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-10 h-10 text-blue-600" />,
        color: "text-blue-600",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="w-10 h-10 text-pink-600" />,
        color: "text-pink-600",
      },
    ],
  },
  {
    title: "Others",
    borderColor: "border-orange-500",
    skills: [
      {
        name: "Git",
        icon: <SiGit className="w-10 h-10 text-red-500" />,
        color: "text-red-500",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-10 h-10 text-gray-800" />,
        color: "text-gray-800",
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens className="w-10 h-10 text-purple-600" />,
        color: "text-purple-600",
      },

      {
        name: "REST APIs",
        icon: <Globe className="w-10 h-10 text-blue-600" />,
        color: "text-blue-600",
      },
      {
        name: "Postman",
        icon: <SiPostman className="w-10 h-10 text-orange-500" />,
        color: "text-orange-500",
      },
      {
        name: "Docker",
        icon: <SiDocker className="w-10 h-10 text-blue-500" />,
        color: "text-blue-500",
      },
      {
        name: "Python",
        icon: <SiPython className="w-10 h-10 text-yellow-500" />,
        color: "text-yellow-500",
      },
      {
        name: "C++",
        icon: <SiCplusplus className="w-10 h-10 text-blue-600" />,
        color: "text-blue-600",
      },
    ],
  },
];
