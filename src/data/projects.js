import taskManagementImage from "../assets/projects/task-management.png";
import shopifySeoImage from "../assets/projects/shopify-seo.png";
import ruthStoreImage from "../assets/projects/ruth-store.png";

const featuredProjects = [
  {
    title: "Task Management System",

    featuredLabel: "Featured Project",

    description:
      "A full-stack task management application with authentication, user-specific tasks, CRUD operations, filtering, validation, and REST API integration.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],

    image: taskManagementImage,

    github:
      "https://github.com/haileyesus3126/task-management-app-",

    live:
      "https://task-management-app-nine-coral.vercel.app/",
  },

  {
    title: "Shopify SEO Automation",

    featuredLabel: "Featured Project",

    description:
      "A Python-based automation workflow created to reduce repetitive Shopify SEO tasks by processing product information and helping update SEO-related content more efficiently.",

    technologies: [
      "Python",
      "Shopify",
      "SEO",
      "Automation",
      "Data Processing",
    ],

    image: shopifySeoImage,

    github:
      "https://github.com/YOUR-USERNAME/shopify-seo-automation",

    live:
      "https://www.shopify.com/",
  },

  {
    title: "Ruth Store",

    featuredLabel: "Featured Project",

    description:
      "A responsive store application designed to present products clearly and provide a simple, user-friendly shopping experience.",

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],

    image: ruthStoreImage,

    github:
      "https://github.com/haileyesus3126/Ruth-Store-7",

    live:
      "https://ruth-store-7.vercel.app/",
  },
];

const otherProjects = [
  {
    title: "Order Issue Management System",

    description:
      "An internal web application for recording, organizing, and tracking order-related issues and business workflows.",

    technologies: [
      "System Analysis",
      "Web Development",
      "CRUD",
      "Database Concepts",
    ],

    github: "",
    live: "",
  },

  {
    title: "Rental Management System",

    description:
      "A web-based system for managing rental information and supporting day-to-day rental workflows.",

    technologies: [
      "Web Development",
      "System Analysis",
      "CRUD",
      "Database Concepts",
    ],

    github: "",
    live: "",
  },

  {
    title: "YouTube Video Automation",

    description:
      "An automated workflow that processes long-form videos into short-form content, reformats clips, and adds captions.",

    technologies: [
      "Python",
      "Automation",
      "Video Processing",
      "Workflow Design",
    ],

    github: "",
    live: "",
  },

  {
    title: "Invoice Processing Automation",

    description:
      "A Python-based automation workflow designed to extract, clean, organize, and process invoice information while reducing repetitive manual work.",

    technologies: [
      "Python",
      "Excel",
      "Data Processing",
      "Automation",
      "JSON",
    ],

    github: "",
    live: "",
  },

  {
    title: "Personal Portfolio",

    description:
      "A responsive developer portfolio built to showcase my skills, experience, projects, and software development journey.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Vite",
    ],

    github:
      "https://github.com/YOUR-USERNAME/haileyesus-portfolio",

    live:
      "https://YOUR-PORTFOLIO-URL.com",
  },
];

export {
  featuredProjects,
  otherProjects,
};