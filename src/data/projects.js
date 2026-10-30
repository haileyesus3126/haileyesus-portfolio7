import taskManagementImage from "../assets/projects/task-management.png";
import orderIssuesImage from "../assets/projects/order-issues.png";
import rentalManagementImage from "../assets/projects/rental-management.png";
import inventoryManagementImage from "../assets/projects/inventory-management.png";
import ruthStoreImage from "../assets/projects/ruth-store.png";

const featuredProjects = [
  {
    title: "Task Management System",

    featuredLabel: "Featured Project",

    description:
      "A full-stack task management application featuring secure user authentication, role-based access control, task creation and tracking, approval workflows, notifications, and REST API integration.",

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
  title: "Inventory Management System",

  featuredLabel: "Team Project",

  description:
    "Collaborated with a development team on a Next.js-based inventory management application designed to organize product records, track stock levels, monitor inventory movements, and support business reporting.",

  technologies: [
    "Next.js",
    "React.js",
    "Inventory Management",
    "Team Collaboration",
  ],

  image: inventoryManagementImage,

  github: "",

  live:
    "https://inventory-management.swingsignalpro.com/",
},


  {
    title: "Order Issue Management System",

    featuredLabel: "Featured Project",

    description:
      "An internal business application developed with AI-assisted tools to manage missing and damaged product reports, track issue statuses, organize vendor communication, and monitor credit resolution workflows.",

    technologies: [
      "Web Development",
      "Database",
      "Workflow Management",
      "Replit",
    ],

    image: orderIssuesImage,

    github: "",
    live: "",
  },

  {
    title: "Rental Management System",

    featuredLabel: "Featured Project",

    description:
      "An internal web application developed with AI-assisted tools to organize store and landlord information, manage rental records, track payments, and support reporting and daily rental operations.",

    technologies: [
      "Web Development",
      "Database",
      "Business Applications",
      "Replit",
    ],

    image: rentalManagementImage,

    github: "",
    live: "",
  },

  {
    title: "Ruth Store",

    featuredLabel: "Featured Project",

    description:
      "A responsive e-commerce web application designed to display products, support product browsing, and provide a simple and user-friendly shopping experience.",

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
    title: "YouTube Video Automation",

    description:
      "A Python-based automation workflow designed to process long-form videos into short-form clips, adjust video formats, and generate captions to simplify content preparation.",

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
      "A responsive personal portfolio developed using React and Vite to showcase my web development projects, technical skills, education, and professional experience.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Vite",
    ],

    github: "",
    live:
      "https://haileyesus-portfolio7.vercel.app/",
  },
];

export {
  featuredProjects,
  otherProjects,
};
