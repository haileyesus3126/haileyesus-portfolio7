import taskManagementImage from "../assets/projects/task-management.png";
import invoiceAutomationImage from "../assets/projects/invoice-automation.png";
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

    github: "",

    live: "",
  },

  {
    title: "Invoice Processing Automation",

    featuredLabel: "Featured Project",

    description:
      "A Python-based automation workflow designed to extract, clean, organize, and process invoice information while reducing repetitive manual work.",

    technologies: [
      "Python",
      "Excel",
      "Data Processing",
      "Automation",
      "JSON",
    ],

    image: invoiceAutomationImage,

    github: "",

    live: "",
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

    github: "",

    live: "",
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
    title: "Personal Portfolio",

    description:
      "A responsive developer portfolio built to showcase my skills, experience, projects, and software development journey.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Vite",
    ],

    github: "",

    live: "",
  },
];

export { featuredProjects, otherProjects };