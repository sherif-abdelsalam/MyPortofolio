export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Tripma - Flight Booking System",
    description:
      "A comprehensive flight booking application built with Next.js and MongoDB.",
    tech: ["Next.js", "MongoDB", "Lucia Auth", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "https://github.com/yourusername/tripma",
  },
  {
    title: "Natours - Tour Management System",
    description:
      "A tour management application featuring role-based access control and JWT authentication.",
    tech: ["Express.js", "MongoDB", "JWT Auth", "REST API"],
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://github.com/yourusername/natours",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    tech: ["React", "TailwindCSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "/",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application with location-based forecasts and weather maps.",
    tech: ["Vue.js", "Weather API", "Chart.js", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "https://github.com/yourusername/weather-app",
  },
];
