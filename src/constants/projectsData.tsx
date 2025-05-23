export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Tripma - Flight Booking System",
    description:
      "A comprehensive flight booking application built with Next.js and MongoDB.",
    tech: ["Next.js", "MongoDB", "Lucia Auth", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "https://github.com/sherif-abdelsalam/Tripma-Flight-booking-system",
  },
  {
    title: "Natours - Tour Management System",
    description:
      "A tour management application featuring role-based access control and JWT authentication.",
    tech: ["Express.js", "MongoDB", "JWT Auth", "REST API"],
    image:
      "https://res.cloudinary.com/dvfebj6lc/image/upload/v1748025513/1569852669_rfnkvx.jpg",
    link: "https://github.com/sherif-abdelsalam/node-js/tree/main/natours",
  },
  {
    title: "Event Booking System",
    description:
      "A comprehensive event booking application with user authentication and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://res.cloudinary.com/dvfebj6lc/image/upload/v1748025563/hamza-nouasria--3pvRUfQc-c-unsplash_g1odkl.jpg",
    link: "https://github.com/sherif-abdelsalam/Event-Booking-App",
    demo: "https://event-booking-app-eta.vercel.app/",
  },
];
